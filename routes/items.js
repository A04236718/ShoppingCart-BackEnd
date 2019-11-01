const express = require('express');
const itemsController = require('../controller/itemsController');
var router = express.Router();

// Routes for th Various endpoints 

// Display All the items
router.get('/', itemsController.index);

// Get a single Item
router.get('/:id', itemsController.getItem);

// Create a New Item
router.post("/", itemsController.create);

// Update an existing item
router.put("/:id", itemsController.update);

// Delete an existing item
router.delete("/:id", itemsController.delete);

module.exports = roouter;