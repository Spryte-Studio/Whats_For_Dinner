const db = require('../../database');

const postUser = function(UID, callback) {
  const authCode = Object.keys(UID)[0];

  const insertUser =
    `INSERT INTO users (auth_code) VALUES ($1);`;

  db.query(insertUser, [authCode], function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
};

module.exports = {postUser}
