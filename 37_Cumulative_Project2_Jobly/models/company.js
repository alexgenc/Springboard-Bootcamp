"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for companies. */

class Company {
  /** Create a company (from data), update db, return new company data.
   *
   * data should be { handle, name, description, numEmployees, logoUrl }
   *
   * Returns { handle, name, description, numEmployees, logoUrl }
   *
   * Throws BadRequestError if company already in database.
   * */

  static async create({ handle, name, description, numEmployees, logoUrl }) {
    const duplicateCheck = await db.query(
          `SELECT handle
           FROM companies
           WHERE handle = $1`,
        [handle]);

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate company: ${handle}`);

    const result = await db.query(
          `INSERT INTO companies
           (handle, name, description, num_employees, logo_url)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING handle, name, description, num_employees AS "numEmployees", logo_url AS "logoUrl"`,
        [
          handle,
          name,
          description,
          numEmployees,
          logoUrl,
        ],
    );
    const company = result.rows[0];

    return company;
  }

  /** Find all companies.
   *
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   * */

  static async findAll(query = {}) {

    
    const { name, minEmployees, maxEmployees } = query; 

    // Check min. number of employees isn't greater than max. number of employees.
    if (minEmployees > maxEmployees) {
      throw new BadRequestError("Minimum number of employees can't be greater than maximum number of employees!")
    } 

    // Create an empty array to store serialized parameters; ex: x = $1, y = $2.
    const serializedFilters = [];
    // Create an empty array to store query values to filter companies.
    const filterValues = [];


    // We only have 3 query parameters to filter by. Name, minEmployees, and maxEmployees. Check if each one exists and if so, store needed values in the 2 arrays created above.

    if (name)  { 
      serializedFilters.push(`name ILIKE $${serializedFilters.length + 1}`)
      filterValues.push(`%${name}%`) 
    } 
    
    if (minEmployees) {
      serializedFilters.push(`num_employees >= $${serializedFilters.length + 1}`)
      filterValues.push(minEmployees);
    }
    
    if (maxEmployees) {
      serializedFilters.push(`num_employees <= $${serializedFilters.length + 1}`)
      filterValues.push(maxEmployees)
    } 

    // Initialize a filter variable. This will be a string containing our serialized parameters.
    let filter;
    
    // If any query parameters are passed in, i.e., length > 0,  set filter variable accordingly. 
    serializedFilters.length > 0 ? filter = `WHERE ${serializedFilters.join(" AND ")}` : null
    
    // Create an initial SQL query
    let dbQuery = `SELECT handle,
                    name,
                    description,
                    num_employees AS "numEmployees",
                    logo_url AS "logoUrl"
                    FROM companies
                  `;

    // If filter exists, meaning there are query parameters passed in, add filter to our SQL query. Here, filter is the WHERE statement of our SQL query. If filter is falsy, that means there are no query parameters, so our SQL query won't have a WHERE statement in it.
    filter ? dbQuery = dbQuery + filter : null

    // Lastly, add an ORDER BY statement to our SQL query.
    dbQuery = dbQuery + ` ORDER BY name`

    // Make a database query and return the results. If there are no filters, results will list all existing companies.
    const companiesRes = await db.query(dbQuery, filterValues);

    return companiesRes.rows;
  }

  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity, companyHandle }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const companyRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
        [handle]);

    const company = companyRes.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(handle, data) {
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
          numEmployees: "num_employees",
          logoUrl: "logo_url",
        });
    const handleVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE companies 
                      SET ${setCols} 
                      WHERE handle = ${handleVarIdx} 
                      RETURNING handle, 
                                name, 
                                description, 
                                num_employees AS "numEmployees", 
                                logo_url AS "logoUrl"`;
    const result = await db.query(querySql, [...values, handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Delete given company from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(handle) {
    const result = await db.query(
          `DELETE
           FROM companies
           WHERE handle = $1
           RETURNING handle`,
        [handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);
  }
}


module.exports = Company;
