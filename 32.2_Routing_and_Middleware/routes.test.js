process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("./app");
let items = require("./fakeDB");

let snickers = {"name": "snickers", "price": 1.50};

beforeEach(() => items.push(snickers) );

afterEach(() => items.length = 0);

// Tests

describe("GET /items", function() {
  test("Gets a list of items", async function() {
    const resp = await request(app).get(`/items`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({"items": items});
  });
});

describe("POST /items", function() {
  test("Creates a new item", async function() {
    const resp = await request(app)
      .post(`/items`)
      .send({
        name: "Popsicle",
        price: 0.99
      });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      added: { name: "Popsicle", price: 0.99 }
    });
  });

  test("Respond with error if request body is empty.", async function() {
    const resp = await request(app)
      .post(`/items`)
      .send({});
    expect(resp.statusCode).toBe(400);
  });
});

describe("GET /items/:name", function() {
  test("Gets a single item by name", async function() {
    const resp = await request(app).get(`/items/${snickers.name}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({"item": snickers});
  });

  test("Responds with 404 if invalid name", async function() {
    const resp = await request(app).patch(`/items/Kitkat`);
    expect(resp.statusCode).toBe(404);
  });
});

describe("PATCH /items/:name", function() {
  test("Updates a single item", async function() {
    const resp = await request(app)
      .patch(`/items/${snickers.name}`)
      .send({
        name: "Snickers-Gold",
        price: 1.99
      });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      updated: { name: "Snickers-Gold", price: 1.99 }
    });
  });

  test("Responds with 404 if invalid name", async function() {
    const resp = await request(app).patch(`/items/Kitkat`);
    expect(resp.statusCode).toBe(404);
  });
});


describe("DELETE /items/:name", function() {
  test("Deletes a single item", async function() {
    const resp = await request(app).delete(`/items/${snickers.name}`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "Deleted" });
  });

  test("Responds with 404 if invalid name", async function() {
    const resp = await request(app).delete(`/items/Kitkat`);
    expect(resp.statusCode).toBe(404);
  });
});