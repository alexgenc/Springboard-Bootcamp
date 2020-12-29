// Routes file for invoices

const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const db = require("../db");// Routes

// GET /invoices route
router.get("/", async (req, res, next) => {
  try {
    // Get invoices in DB
    const results = await db.query('SELECT id, comp_code FROM invoices');
  
    return res.json({invoices: results.rows});
  } catch(e) {
    return next(e);
  }
})

// GET /invoices/:id route
router.get("/:id", async (req, res, next) => {
  try {
    // Get id from request parameters
    const { id } = req.params;

    // Get invoice with the matching id from DB
    const results = await db.query(
      `SELECT i.id, 
              i.comp_code, 
              i.amt, 
              i.paid, 
              i.add_date, 
              i.paid_date, 
              c.name, 
              c.description 
           FROM invoices AS i
             INNER JOIN companies AS c ON (i.comp_code = c.code)  
           WHERE id = $1
      `, [id]
    );
    
    // Check if invoice exists, if not throw 404 error
    if (results.rows.length === 0) {
      throw new ExpressError(`Can't find invoice with id:${id}.`, 404);
    } 

    const data = results.rows[0];

    // Create response object
    const response = {
      id: data.id,
      amt: data.amt,
      paid: data.paid,
      add_date: `${data.add_date}`,
      paid_date: data.paid_date,
      company: {
        code: data.comp_code,
        name: data.name,
        description: data.description,
      }
    }

    return res.json({invoice: response});
  } catch(e) {
    next(e);
  }
})

// POST /invoices route
router.post("/", async (req, res, next) => {
  try {
    // Get comp_code and amt from request body
    const {comp_code, amt} = req.body;

    // If necessary info is missing to create an invoice, throw 400 error
    if(!comp_code || !amt) {
      throw new ExpressError(`Missing invoice information. Please make sure all required fields are present.`, 400);
    }

    // Create a new invoice
    const result = await db.query(
          `INSERT INTO invoices (comp_code, amt) 
           VALUES ($1, $2) 
           RETURNING id, comp_code, amt, paid, add_date, paid_date
           `, [comp_code, amt]
    );

    return res.status(201).json({"invoice": result.rows[0]});
  } catch (e) {
    return next(e);
  }
});

// PUT /invoices/:id route
router.put("/:id", async (req, res, next) => {
  try {
    // Get amt from request body
    const { amt } = req.body;
    // Get id from request parameters
    const { id } = req.params;

    // If amt is missing, throw 400 error
    if(!amt) {
      throw new ExpressError(`Missing company information. Please make sure all required fields are present.`, 400);
    }

    // Update invoice
    const result = await db.query(
      `UPDATE invoices SET amt=$1 WHERE id=$2
      RETURNING id, comp_code, amt, paid, add_date, paid_date
      `, [amt, id]
    );
    
    // If no result, it means invoice doesn't exist so throw 404 error
    if (result.rows.length === 0) {
      throw new ExpressError(`Can't find invoice with id ${id}.`, 404);
    } 

    return res.json({"invoice": result.rows[0]});
  } catch (e) {
    return next(e);
  }
});

// DELETE /invoices/:id route
router.delete("/:id", async (req, res, next) => {
  try {
    // Get id from request parameters
    const { id } = req.params;

    // Find invoice with given id from DB
    let invoice = await db.query(`SELECT comp_code, amt FROM invoices where id=$1`, [id]);

    // Check if invoice exists first before deleting
    if (invoice.rows.length === 0) {
      throw new ExpressError(`Can't find invoice with id:${id}.`, 404);
    }

    // Delete invoice
    const result = await db.query(`DELETE FROM invoices where id=$1`, [id]);

    return res.json({"status": "deleted"});
  } catch (e) {
    return next(e);
  }
});

module.exports = router;