const pg = require('../../database');





const getFridgeInventory = (requestParams, callback) => {
  const qString = `SELECT....(fridge items query)`;
  pg.query(qString, [user_id], (err, results) => {
    callback(err, results.rows);
  });
};

const getPantryInventory = (requestParams, callback) => {
  const qString = `SELECT....(pantry items query)`;
  pg.query(qString, [user_id], (err, results) => {
    callback(err, results.rows);
  });
};

const addFridgeInventory = (requestParams, callback) => {
  const qString = `SELECT....(add items to fridge query)`;
  pg.query(qString, [user_id], (err, results) => {
    callback(err, results.rows);
  });
};

const addPantryInventory = (requestParams, callback) => {
  const qString = `SELECT....(add items to pantry query)`;
  pg.query(qString, [user_id], (err, results) => {
    callback(err, results.rows);
  });
};