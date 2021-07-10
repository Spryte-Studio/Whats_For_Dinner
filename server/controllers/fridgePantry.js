const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();

const models = require('../models');


//router.get('/', (req, res) => {})
// router.get('/:productId', (req, res) => {
//   // console.log('get//products/:product_id');
//   axios.get(`${BaseUrl}/products/${req.params.productId}`, {
//     headers: { 'Authorization': GITHUB_API_KEY },
//   })
//     .then((response) => {
//       // console.log('this is response inside get request',response);
//       // console.log('productMain get response.data: ', response.data);
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log('S: productMain get/:productId err: ', err);
//       res.status(500).send(err);
//     });
// });
module.exports = router;