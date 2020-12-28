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
    
    // Check if invoice exists
    if (results.rows.length === 0) {
      throw new ExpressError(`Can't find invoice with id:${id}.`, 404);
    } 

    const data = results.rows[0];

    // Create response object
    const response = {
      id: data.id,
      amt: data.amt,
      paid: data.paid,
      add_date: data.add_date,
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
    const {comp_code, amt} = req.body;

    const result = await db.query(
          `INSERT INTO invoices (comp_code, amt) 
           VALUES ($1, $2) 
           RETURNING id, comp_code, amt, paid, add_date, paid_date
           `, [comp_code, amt]
    );

    return res.json({"invoice": result.rows[0]});
  } catch (e) {
    return next(e);
  }
});

// PUT /invoices/:id route
router.put("/:id", async (req, res, next) => {
  try {
    const { amt } = req.body;
    const { id } = req.params;

    const result = await db.query(
      `UPDATE invoices SET amt=$1 WHERE id=$2
      RETURNING id, comp_code, amt, paid, add_date, paid_date
      `, [amt, id]
    );

    return res.json({"invoice": result.rows[0]});
  } catch (e) {
    return next(e);
  }
});

// DELETE /invoices/:id route
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.query(`DELETE FROM invoices where id=$1`, [id]);

    return res.json({"status": "deleted"});
  } catch (e) {
    return next(e);
  }
});

module.exports = router;