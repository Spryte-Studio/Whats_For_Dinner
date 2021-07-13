const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const models = require('../models');
const {app_key, app_id} = require('./config.js');
const apiURL = 'https://api.edamam.com/search';

router.get('/allRecipes', async (req, res) => {
  try {
    // await console.log(req.params);

    // const ingredients = [...ingredients];
    // const mappedIngredients = ingredients
    // .map((ingredient, idx) => {
    //   if (idx < ingredients.length - 1) {
    //     return ingredient + "+";
    //   } else {
    //     return ingredient;
    //   }
    // })
    // .join("");

  //  console.log(req.params)
    const url = `${apiURL}`;
    const response = await axios.get(url, {
    params: {
      q: req.query.q,
      app_id: app_id,
      app_key: app_key

    }});
    const recipes = response.data;
    console.log(recipes);
    res.status(200).send(recipes);
  } catch(e){
    console.log(e);
  }

})

module.exports = router;