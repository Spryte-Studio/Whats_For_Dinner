/* eslint-disable object-curly-newline */
const { Pool } = require('pg');

require('dotenv').config();

const { user, host, database, password, port } = process.env;
const dbConfig = { user, host, database, password, port };

// console.log(dbConfig);

const pool = new Pool(dbConfig);

pool.connect((err) => {
  if (err) {
    console.log('error connecting to database', err)
  } else {
    console.log('connected to postgres');
  }
});

module.exports = pool;
