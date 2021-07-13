// import connection to psql db
const pg = require('../../database');

const path = require('path');
const express = require('express');
const axios = require('axios');

const router = express.Router();
const models = require('../models');


const getFridgeInventory = (requestParams, callback) => {
  const qString = `SELECT....(fridge items query)`;

  pg.query(qString, [user_id], (err, results) => {
    callback(err, results.rows);
  });
};

const getPantryInventory = (requestParams, callback) => {
  const queryString = `SELECT....(pantry items query)`;

  pg.query(qString)
}