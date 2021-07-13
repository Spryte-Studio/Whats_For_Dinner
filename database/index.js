const { Pool } = require('pg')

require('dotenv').config();

const {db_config} = process.env;
const dbConfig = JSON.parse(db_config)

const pool = new Pool(dbConfig);


pool.connect((err) => {
  if (err) {
    console.log(err,'error connecting to database', err)
  } else {
    console.log('connected to postgres')
  }
})

module.exports = pool;