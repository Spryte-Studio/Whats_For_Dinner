const db = require('../../database');

const postUser = function(UID, callback) {
  console.log('UID in users model', UID);

  const insertUser =
    `INSERT INTO users (auth_code) VALUES ($1);`;

  db.query(insertUser, [UID], function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
};

module.exports = {postUser}
