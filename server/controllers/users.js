const path = require('path');
// const cors = require('cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const userModel = require('../models/users');

router.post('/postUser', (req, res) => {
  let UID = req.body;

  userModel.postUser(UID, function(err, results) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});


module.exports = router;
