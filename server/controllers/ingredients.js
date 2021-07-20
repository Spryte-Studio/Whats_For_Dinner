const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const ingredientModel = require('../models/ingredients');

const autoCompleteURL = 'https://api.edamam.com/auto-complete';
const ingredientPhoto = 'https://api.edamam.com/api/food-database/v2/parser';

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

  req.body.addMultIngs.map((ingredient) => (
    axios.get(`${ingredientPhoto}`, {
      params: {
        'app_id': edamam_ingredientSearch_app_id,
        'app_key': edamam_ingredientSearch_app_key,
        'ingr': ingredient
      }
    })
      .then((response) => {
        // res.status(200).send(response.data);
        console.log('response from getting photos', response.data.parsed[0].food.image);
        let photo = response.data.parsed[0].food.image
        ingredientModel.postIngredient(ingredient, perishable, req.body.authCode, photo, function (err, response) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(200).send(response.data);
          }
        })
      })
      .catch((err) => {
        // console.log('S: ingredients get/:ingredientName err: ', err);
        // res.status(500).send(err);
        console.log('err from getting photos', err);
      })
  ))
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