const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const favModel = require('../models/favorites');



require('dotenv').config();

router.get('/', (req, res) => {
  favModel.getFavorites(userId, (err, results) => {
    if (err) {
      console.log('fav post err: ', err);
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

router.post('/', (req, res) => {
  favModel.postFavorite(req.body.recipe, userId, (err, results) => {
    if (err) {
      console.log('fav post err: ', err);
      res.status(500).send(err);
    } else {
      res.status(201).send(results);
    }
  });
});

router.delete('/', (req, res) => {
  favModel.deleteFavorite(req.body.recipe_id, userId, (err, results) => {
    if (err) {
      console.log('fav post err: ', err);
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;