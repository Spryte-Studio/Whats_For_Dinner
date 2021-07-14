const path = require('path');
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const router = express.Router();
const models = require('../models');

require('dotenv').config();
const { host } = process.env;

const dbURL = host;
console.log('host======',host);



module.exports = router;