process.env.NODE_ENV = "test";

// npm packages
const request = require("supertest");

// app imports
const app = require("../app");
const db = require("../db");

// Initialize a global test company
let testCompany;

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
  const industriesQuery = await db.query(`SELECT industry_code FROM company_industries WHERE comp_code='ms'`);

  testCompany = companyQuery.rows[0];
  
  const invoices = invoicesQuery.rows;
  const industries = industriesQuery.rows;

  testCompany.invoices = invoices.map(i => i.id);
  testCompany.industries = industries.map(i => i.industry_code);

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
describe("GET /companies", function() {
  test("Gets a list of companies", async () => {
    const resp = await request(app).get(`/companies`);
    expect(resp.statusCode).toEqual(200);
    // Don't return the entire testCompany object because /companies route only displays code and name for each company.
    expect(resp.body).toEqual({
      companies: [{"code": testCompany.code, "name": testCompany.name}]
    });
  });
});

describe("GET /companies:code", function() {
  test("Gets a single company by its code", async () => {
    const resp = await request(app).get(`/companies/${testCompany.code}`);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({
      company: testCompany
    });
  });

  test("Responds with 404 if can't find company with the given code", async () => {
    const response = await request(app).get(`/companies/thiscompanydoesnotexist`);
    expect(response.statusCode).toEqual(404);
  });
});

describe("POST /companies", function() {
  test("Creates a new company", async () => {
    const resp = await request(app)
      .post(`/companies`)
      .send({
        code: "apple",
        name: "Apple",
        description: "Fruity"
      });
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      company: {code: "apple", name: "Apple", description: "Fruity"}
    });
  });

  test("Responds with 400 if no company info", async () => {
    const resp = await request(app)
      .post(`/companies`)
      .send({
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 400 if company code is missing", async () => {
    const resp = await request(app)
      .post(`/companies`)
      .send({
        name: "Facebook",
        description: "Social media"
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 400 if company name is missing", async () => {
    const resp = await request(app)
      .post(`/companies`)
      .send({
        code: "fb",
        description: "Social media"
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 400 if company description is missing", async () => {
    const resp = await request(app)
      .post(`/companies`)
      .send({
        code: "fb",
        name: "Facebook",
      });
    expect(resp.statusCode).toEqual(400);
  });
});

describe("PUT /companies/:code", function() {
  test("Updates company information", async () => {
    const resp = await request(app)
      .put(`/companies/${testCompany.code}`)
      .send({
        name: "New Microsoft",
        description: "We're still Microsoft"
      });
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({
      company: {code: "ms", name: "New Microsoft", description: "We're still Microsoft"}
    });
  });

  test("Responds with 400 if no update info", async () => {
    const resp = await request(app)
      .put(`/companies/${testCompany.code}`)
      .send({
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 400 if company name is missing", async () => {
    const resp = await request(app)
    .put(`/companies/${testCompany.code}`)
      .send({
        description: "We're still Microsoft"
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 400 if company description is missing", async () => {
    const resp = await request(app)
      .put(`/companies/${testCompany.code}`)
      .send({
        name: "New Microsoft",
      });
    expect(resp.statusCode).toEqual(400);
  });

  test("Responds with 404 if can't find company with the given code", async () => {
    const resp = await request(app)
      .put(`/companies/thiscompanydoesnotexist`)
      .send({
        name: "A Company That Exists",
        description: "Do we not exist?"
      });
    expect(resp.statusCode).toEqual(404);
  });
});

describe("DELETE /companies/:code", function() {
  test("Deletes a company", async () => {
    const resp = await request(app)
      .delete(`/companies/${testCompany.code}`);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual({
      status: "deleted"
    });
  });

  test("Responds with 404 if can't find company with the given code", async () => {
    const resp = await request(app)
      .delete(`/companies/thiscompanydoesnotexist`);
    expect(resp.statusCode).toEqual(404);
  });

});


