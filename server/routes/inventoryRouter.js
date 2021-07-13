const inventory = require('../controllers/inventory.js');
const express = require('express');
const inventoryRouter= express.Router();

// Connect controller methods to their corresponding routes
inventoryRouter.get('/inventory', inventory.getAll);

inventoryRouter.get('/meta/inventory_id', inventory.getMeta);

inventoryRouter.post('/inventory', inventory.postItem);

module.exports = inventoryRouter;
