const express = require('express');
const router = new express.Router();
const items = require('./fakeDB')
const ExpressError = require('./error');

// Routes

// GET /items route
router.get("/", (req, res) => {
  // List items in fakeDB
  return res.json({"items": items});
})

// POST /items route
router.post("/", (req, res, next) => {
  try {
    // Check if request body is empty
    if (!req.body.name || !req.body.price) {
      throw new ExpressError("Please submit an item.", 400);
    }

    // Get new item from request body
    let newItem = req.body;
    
    items.push(newItem)

    // Create server response
    let serverResponse = { 
      "added": {
        "name": req.body.name,
        "price": req.body.price
      }
    }

    return res.status(201).json(serverResponse);
  } 
  catch(e) {
    next(e)
  }
})

// GET /items/:name route
router.get("/:name", (req, res, next) => {
  try {
    // Find item from fakeDB
    const item = items.find( i => i.name === req.params.name);
  
    // Check if item exists
    if (!item) {
    throw new ExpressError("Item not found!", 404);
    }

    return res.send({"item": item});
  }
  catch(e) {
    next(e);
  }
  
})

// PATCH /items/:name route
router.patch("/:name", (req, res) => {
  // Find item from fakeDB
  const item = items.find( i => i.name === req.params.name);

  // Check if item exists
  if (!item) {
    throw new ExpressError("Item not found!", 404);
  }

  // Get updated item information from request body
  let updatedItem = req.body;

  // Update the item with the new information
  item.name = updatedItem.name;
  item.price = updatedItem.price;

  // Create server response
  let serverResponse = { 
    "updated": {
      "name": `${item.name}`,
      "price": updatedItem.price
    }
  }

  return res.send(serverResponse);
})

// DELETE /items/:name route
router.delete("/:name", (req, res) => {
  // Find item from fakeDB
  const item = items.find( i => i.name === req.params.name);

  // Check if item exists
  if (!item) {
    throw new ExpressError("Item Not Found!", 404);
  }

  // Find index of the item
  let index = items.findIndex( i => i.name === item.name);

  // Remove item from fakeDB
  items.splice(index, 1)

  return res.send( {"message": "Deleted"});

})

module.exports = router;