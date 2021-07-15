const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const ingredientModel = require('../models/ingredients');

const autoCompleteURL = 'https://api.edamam.com/auto-complete';

require('dotenv').config();

const { edamam_ingredientSearch_app_id, edamam_ingredientSearch_app_key } = process.env;


router.get('/:ingredientName', (req, res) => {
  axios.get(`${autoCompleteURL}`, {
    params: {
      'app_id': edamam_ingredientSearch_app_id,
      'app_key': edamam_ingredientSearch_app_key,
      'q': req.params.ingredientName
    }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('S: ingredients get/:ingredientName err: ', err);
      res.status(500).send(err);
    });
});

router.post('/:perishable', (req, res) => {
  let perishable = req.params.perishable;

  ingredientModel.postIngredient(req.body.addMultIngs, perishable, req.body.authCode, function (err, response) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response.data);
    }
  })

});

router.delete('/:ingredientName', (req, res) => {
  const ingredientName = req.params.ingredientName;
  const userEmail = req.query.email;

  ingredientModel.deleteIngredient(ingredientName, userEmail, (err, response) => {
    if (err) {
      console.log('error deleting ingredient :(');
      res.status(500).send(err);
    } else {
      res.status(200).send(req.params.ingredientName + ' deleted successfully')
    }
  });
});

module.exports = router;