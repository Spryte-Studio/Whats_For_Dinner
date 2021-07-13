const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const models = require('../models');


// Get all fridge items default parameters: page=1, count=5
router.get('/user_id/fridge/', (req, res) => {
  req.params.page = Number(req.query.page) || 1;
  req.params.count = Number(req.query.count) || 5;

  axios.get(req.params, (err, results) => {
    err ? res.status(400).send('Error getting fridge items', err)
      : res.status(200).send(results);
  });
});

// Get all pantry items default parameters: page=1, count=5
router.get('/user_id/pantry/', (req, res) => {
  req.params.page = Number(req.query.page) || 1;
  req.params.count = Number(req.query.count) || 5;

  axios.get(req.params, (err, results) => {
    err ? res.status(400).send('Error getting pantry items', err)
      : res.status(200).send(results);
  });
});

// Get one item by it's ID.
router.get('/inventory/:id', (req, res) => {
  const id = Number(req.params.id);

  axios.get(id, (err, results) => {
    err ? res.status(400).send(`Error getting item id of: ${id}`, err)
      : res.status(200).send(results);
  });
});


module.exports = router;