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
    const { code } = req.params;

    // Get company with the matching code from DB
    const companyQuery = await db.query('SELECT * FROM companies WHERE code=$1', [code]);
    
    if (companyQuery.rows.length === 0) {
      throw new ExpressError(`Can't find company with code:${code}.`, 404);
    } 

    const invoicesQuery = await db.query('SELECT id FROM invoices WHERE comp_code=$1', [code]);

    const company = companyQuery.rows[0];
    const invoices = invoicesQuery.rows;

    company.invoices = invoices.map(i => i.id);

    return res.json({"company": company});

  } catch(e) {
    next(e);
  }
})

// POST /companies route
router.post("/", async (req, res, next) => {
  try{
    const { code, name, description } = req.body;

    if(!code || !name || !description) {
      throw new ExpressError(`Missing company information. Please make sure all required fields are present.`, 400);
    }

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
    const { name, description } = req.body;
    const { code } = req.params;

    if(!name || !description) {
      throw new ExpressError(`Missing company information. Please make sure all required fields are present.`, 400);
    }

    const result = await db.query(
      `UPDATE companies SET name=$1, description=$2 
       WHERE code=$3
       RETURNING code, name, description`,
    [name, description, code]
    );

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
    const { code } = req.params;

    const result = await db.query(`DELETE FROM companies WHERE code=$1`, [code]);

    return res.json({status: "deleted"});

  } catch(e) {
    next(e);
  }
} )

module.exports = router;