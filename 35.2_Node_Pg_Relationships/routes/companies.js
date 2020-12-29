// Routes file for companies

const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const db = require("../db");

// Routes

// GET /companies route
router.get("/", async (req, res, next) => {
  try {
    // Get companies in DB
    const results = await db.query('SELECT code, name FROM companies');
  
    return res.json({companies: results.rows});
  } catch(e) {
    return next(e);
  }
})

// GET /companies/:code route
router.get("/:code", async (req, res, next) => {
  try {
    // Get code from request parameters
    const { code } = req.params;

    // Get company with the matching code from DB
    const companyQuery = await db.query('SELECT * FROM companies WHERE code=$1', [code]);
    
    // If no result, it means company doesn't exist so throw 404 error
    if (companyQuery.rows.length === 0) {
      throw new ExpressError(`Can't find company with code:${code}.`, 404);
    } 

    // Set company as the returned query result
    const company = companyQuery.rows[0];

    // Get company's invoices from DB
    const invoicesQuery = await db.query('SELECT id FROM invoices WHERE comp_code=$1', [code]);

    // Get company's industries from DB
    const industriesQuery = await db.query('SELECT industry_code FROM company_industries WHERE comp_code=$1', [code]);
    
    const invoices = invoicesQuery.rows;
    const industries = industriesQuery.rows;

    // Set invoices and industries properties on the company object
    company.invoices = invoices.map(i => i.id);
    company.industries = industries.map(i => i.industry_code);

    return res.json({"company": company});

  } catch(e) {
    next(e);
  }
})

// POST /companies route
router.post("/", async (req, res, next) => {
  try{
    // Get code, name, description from request body
    const { code, name, description } = req.body;

    // If company info is missing, throw 400 error
    if(!code || !name || !description) {
      throw new ExpressError(`Missing company information. Please make sure all required fields are present.`, 400);
    }

    // Create a new company
    const result = await db.query(
      `INSERT INTO companies (code, name, description) 
       VALUES ($1, $2, $3)
       RETURNING code, name, description`,
    [code, name, description]
    );
    
    return res.status(201).json({company: result.rows[0]});

  } catch(e) {
    next(e);
  }
} )

// PUT /companies/:code route
router.put("/:code", async (req, res, next) => {
  try{
    // Get name and description from request body
    const { name, description } = req.body;
    // Get code from request parameters
    const { code } = req.params;

    // If name or description is missing, throw 400 error
    if(!name || !description) {
      throw new ExpressError(`Missing company information. Please make sure all required fields are present.`, 400);
    }

    // Update company information
    const result = await db.query(
      `UPDATE companies SET name=$1, description=$2 
       WHERE code=$3
       RETURNING code, name, description`,
    [name, description, code]
    );
    
    // If no result, it means company doesn't exist so throw 404 error
    if (result.rows.length === 0) {
      throw new ExpressError(`Can't find company with code:${code}.`, 404);
    } 

    return res.json({company: result.rows[0]});

  } catch(e) {
    next(e);
  }
} )

// DELETE /companies/:code route
router.delete("/:code", async (req, res, next) => {
  try{
    // Get code from request parameters
    const { code } = req.params;

    // Find company with given id from DB
    let company = await db.query(`SELECT code, name FROM companies where code=$1`, [code]);

    // Check if company exists first before deleting
    if (company.rows.length === 0) {
      throw new ExpressError(`Can't find company with code:${code}.`, 404);
    }

    // Delete company
    const result = await db.query(`DELETE FROM companies WHERE code=$1 returning code`, [code]);

    return res.json({status: "deleted"});

  } catch(e) {
    next(e);
  }
} )

module.exports = router;