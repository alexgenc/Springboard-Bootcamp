process.env.NODE_ENV = "test";

// npm packages
const request = require("supertest");

// app imports
const app = require("../app");
const db = require("../db");

// Initialize a global test company and a test invoice
let testCompany;
let testInvoice;

// Set up for tests
beforeAll ( async () => {
  // Empty out all tables
  await db.query('DELETE FROM companies');
  await db.query('DELETE FROM invoices');
})

beforeEach ( async () => {
  // Add a test company
  let resultCompany = await db.query(
    `INSERT INTO companies (code, name, description) 
     VALUES ('ms', 'Microsoft', 'Child of Bill Gates')
     RETURNING code, name`
  );

  // Add a test invoice
  let resultInvoice = await db.query(
    `INSERT INTO invoices (comp_code, amt) 
     VALUES ('ms', 100)
     RETURNING id, comp_code, amt, paid, add_date, paid_date`
  );
  
  const companyQuery = await db.query(`SELECT * FROM companies WHERE code='ms'`);
  const invoicesQuery = await db.query(`SELECT id FROM invoices WHERE comp_code='ms'`);

  testCompany = companyQuery.rows[0];
  testInvoice = resultInvoice.rows[0];
  
  const invoices = invoicesQuery.rows;

  testCompany.invoices = invoices.map(i => i.id);

});

// Teardown for tests
afterEach ( async () => {
  // Delete any data created by test
  await db.query('DELETE FROM companies');
  await db.query('DELETE FROM invoices');
})

afterAll ( async () => {
  // close db connection
  await db.end();
});

// Tests

describe("GET /invoices", function() {
  test("Gets a list of invoices", async () => {
    const resp = await request(app).get(`/invoices`);
    expect(resp.statusCode).toEqual(200);
    // Don't return the entire testInvoice object because /invoices route only displays id and comp_code for each invoice.
    expect(resp.body).toEqual({
      invoices: [{"id": testInvoice.id, "comp_code": testInvoice.comp_code}]
    });
  });
});

describe("GET /invoices/:id", function() {
  test("Gets a single invoice by its id", async () => {

    const testInvoiceQuery = await db.query(
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
           WHERE id = ${testInvoice.id}
      `
    );
  
    data = testInvoiceQuery.rows[0];
  
    invoiceResponse = {
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

  const resp = await request(app).get(`/invoices/${testInvoice.id}`);
  expect(resp.statusCode).toEqual(200);
  expect(resp.body).toEqual({invoice: invoiceResponse});
  });

  test("Responds with 404 if can't find invoice with the given id", async () => {
    const resp = await request(app).get(`/invoices/999`);
    expect(resp.statusCode).toEqual(404);
  });
});

describe("POST /invoices", function() {
  test("Creates a new invoice", async () => {
    const resp = await request(app)
      .post(`/invoices`)
      .send({
        comp_code: "ms",
        amt: 1000
      });
    expect(resp.statusCode).toEqual(201);
  });

  test("Responds with 400 if no invoice info", async () => {
    const resp = await request(app)
      .post(`/invoices`)
      .send({
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 400 if company code is missing", async () => {
    const resp = await request(app)
      .post(`/invoices`)
      .send({
        amt: 1000
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 400 if amount is missing", async () => {
    const resp = await request(app)
      .post(`/invoices`)
      .send({
        comp_code: "fb",
      });
    expect(resp.statusCode).toEqual(400);
  });

});

describe("PUT /invoices/:id", function() {
  test("Updates invoice amount", async () => {
    const resp = await request(app)
      .put(`/invoices/${testInvoice.id}`)
      .send({
        amt: 500
      });
    expect(resp.statusCode).toEqual(200);
    expect(resp.body['invoice'].amt).toEqual(500);
  });

  test("Responds with 400 if amount is missing/no update info", async () => {
    const resp = await request(app)
      .put(`/invoices/${testInvoice.id}`)
      .send({
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 404 if can't find invoice with given id", async () => {
    const resp = await request(app)
      .put(`/invoices/999`)
      .send({
        amt: 999
      });
    expect(resp.statusCode).toEqual(404);
  });
});

describe("DELETE /invoices/:id", function() {
  test("Deletes an invoice", async () => {
    const resp = await request(app)
      .delete(`/invoices/${testInvoice.id}`);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({
      status: "deleted"
    });
  });

  test("Responds with 404 if can't find invoice with the given id", async () => {
    const resp = await request(app)
      .delete(`/invoices/999`);
    expect(resp.statusCode).toEqual(404);
  });

});