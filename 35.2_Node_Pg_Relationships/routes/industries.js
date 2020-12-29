// Routes file for industries

const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const db = require("../db");


// Routes

// GET /industries route
router.get("/", async (req, res, next) => {
  try {
    // Get industries in DB
    // const results = await db.query('SELECT i.industry_code, industry, comp_code FROM company_industries AS ci RIGHT JOIN industries AS i ON ci.industry_code = i.industry_code');

    const results = await db.query('SELECT industry_code, industry FROM industries');

    return res.json({"industries": results.rows});
  } catch(e) {
    return next(e);
  }
})

// GET /industries/:code route
router.get("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;

    // Get industry and company info in DB
    
    const results = await db.query('SELECT i.industry_code, industry, comp_code FROM company_industries AS ci RIGHT JOIN industries AS i ON ci.industry_code = i.industry_code GROUP BY ci.id, i.industry_code HAVING i.industry_code=$1', [code]);

    const industryCompanies = results.rows.map(ic => ic.comp_code)

    const industry = {
      industry_code: results.rows[0].industry_code,
      industry: results.rows[0].industry,
      companies: industryCompanies
    }

    return res.json({"industry": industry});
  } catch(e) {
    return next(e);
  }
})


// POST /industries route
router.post("/", async (req, res, next) => {
  try {
    // Get industry_code and industry name from request body
    const {industry_code, industry} = req.body;

    // If necessary info is missing to create a new invoice, throw 400 error
    if(!industry_code || !industry) {
      throw new ExpressError(`Missing industry information. Please make sure all required fields are present.`, 400);
    }

    // Create a new industry
    const result = await db.query(
          `INSERT INTO industries (industry_code, industry) 
           VALUES ($1, $2) 
           RETURNING industry_code, industry
           `, [industry_code, industry]
    );

    return res.status(201).json({"invoice": result.rows[0]});
  } catch (e) {
    return next(e);
  }
});

module.exports = router;