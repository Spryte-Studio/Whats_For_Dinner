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
  // console.log('req at ingredients api', req.params);
  axios.get(`${autoCompleteURL}`, {
    params: {
      'app_id': edamam_ingredientSearch_app_id,
      'app_key': edamam_ingredientSearch_app_key,
      'q': req.params.ingredientName
    }
  })
    .then((response) => {
      // console.log('this is response inside get request',response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('S: ingredients get/:ingredientName err: ', err);
      res.status(500).send(err);
    });
});


module.exports = router;