const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const models = require('../models');

const autoCompleteURL = 'https://api.edamam.com/auto-complete';

require('dotenv').config();

const {edamam_ingredientSearch_app_id, edamam_ingredientSearch_app_key} = process.env;

// router.get('/', (req, res) => {})

router.get('/:ingredientName', (req, res) => {
  // console.log('get//products/:product_id');
  axios.get(`${autoCompleteURL}`, {
    query: {
      'app_id': edamam_ingredientSearch_app_id,
      'app_key': edamam_ingredientSearch_app_key,
      'q': req.query.ingredientName
    },
  })
    .then((response) => {
      // console.log('this is response inside get request',response);
      // console.log('productMain get response.data: ', response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('S: productMain get/:productId err: ', err);
      res.status(500).send(err);
    });
});


module.exports = router;