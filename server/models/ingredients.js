const db = require('../../database');

// const postIngredient = function (
//   ingredients, perishable, UID, callback) {

//   console.log('ingredients in model', ingredients);

//   const insertIngredientToInventory =
//     `INSERT INTO inventory (name, perishable) VALUES ($1, $2) RETURNING ID;`;


//   db.query('SELECT id FROM users WHERE auth_code = $1;', [UID])
//     .then((userID) => {
//       ingredients.map((ingredientName) => (
//         db.query(insertIngredientToInventory, [ingredientName, perishable])
//           .then((results) => {
//             const inventory_id = results.rows[0].id;
//             const insertIngredientForUser =
//               `INSERT INTO users_inventory (user_id, inventory_id) VALUES ($1, $2);`;

//             db.query(insertIngredientForUser, [userID.rows[0].id, inventory_id])
//               .then(() => {
//                 callback(null, 'successfully added ingredients! :)')
//               })
//               .catch((err) => {
//                 callback(err, null);
//               });
//           })
//           .catch((err) => {
//             callback(err, null);
//           })
//       ))
//     })
//     .catch((err) => {
//       callback(err, null);
//     })
// };

const postIngredient = function(
  ingredients, perishable, UID, callback) {
  console.log('ingredients in model', ingredients);
  const insertIngredientToInventory =
    `INSERT INTO inventory (name, perishable) VALUES ($1, $2) RETURNING ID;`;
  db.query('SELECT id FROM users WHERE auth_code = $1;', [UID])
    .then((userID) => {
      ingredients.map((ingredientName) => (
        db.query('SELECT id FROM inventory WHERE name=$1', [ingredientName])
        .then((results) => {
          const inventory_id = results.rows[0].id;
          const insertIngredientForUser =
            `INSERT INTO users_inventory (user_id, inventory_id) VALUES ($1, $2);`;
          db.query(insertIngredientForUser, [userID.rows[0].id, inventory_id])
            .then(() => {
              callback(null, 'successfully added ingredients! :)')
            })
            .catch((err) => {
              callback(err, null);
            });
        })
        .catch((err) => {
          db.query(insertIngredientToInventory, [ingredientName, perishable])
            .then((results) => {
              const inventory_id = results.rows[0].id;
              const insertIngredientForUser =
                `INSERT INTO users_inventory (user_id, inventory_id) VALUES ($1, $2);`;
              db.query(insertIngredientForUser, [userID.rows[0].id, inventory_id])
                .then(() => {
                  callback(null, 'successfully added ingredients! :)')
                })
                .catch((err) => {
                  callback(err, null);
                });
            })
        })
      ))
    })
    .catch((err) => {
      callback(err, null);
    })
};

// const deleteIngredient = (ingredientName, userID, callback) => {
//   db.query('SELECT id FROM inventory WHERE name=$1', [ingredientName])
//     .then((results) => {
//       const queryStr = 'DELETE FROM users_inventory WHERE user_id=$1 AND inventory_id=$2';
//       const queryParam = [userId, results.rows[0].id];
//       db.query(queryStr, queryParam)
//         .then((response) => {
//           callback(null, response);
//         })
//         .catch((err) => {
//           callback(err, null);
//         });
//     });
// };

let userIDGlobalStorage = null;

const deleteIngredient = (ingredientName, userID, callback) => {
  db.query('SELECT id FROM users WHERE auth_code = $1;', [userID])
    .then((userId) => {
      userIDGlobalStorage = userId.rows[0].id;
      db.query('SELECT id FROM inventory WHERE name=$1', [ingredientName])
        .then((results) => {
          const queryStr = 'DELETE FROM users_inventory WHERE user_id=$1 AND inventory_id=$2';
          const queryParam = [userIDGlobalStorage, results.rows[0].id];
          db.query(queryStr, queryParam)
            .then((response) => {
              callback(null, response);
            })
            .catch((err) => {
              callback(err, null);
            });
        });
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = { postIngredient, deleteIngredient };
