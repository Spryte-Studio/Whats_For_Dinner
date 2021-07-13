const inventory = require('../controllers/inventory.js');
const express = require('express');
const inventoryRouter= express.Router();

// Connect controller methods to their corresponding routes
inventoryRouter.get('/:product_id', inventory.getAll);

inventoryRouter.get('/meta/:product_id', inventory.getMeta);

inventoryRouter.post('/', inventory.postItem);

module.exports = inventoryRouter;
