const db = require('../../database');

const postIngredient = function(
  ingredients, perishable, UID, callback) {

  console.log('ingredients in model', ingredients);

  const insertIngredientToInventory =
    `INSERT INTO inventory (name, perishable) VALUES ($1, $2) RETURNING ID;`;

  const insertIngredientForUser =
    `INSERT INTO users_inventory (user_id, inventory_id) VALUES ($1, $2);`;

  ingredients.map((ingredient) => (
    db.query(
      insertIngredientToInventory,
        [ingredient, perishable],
        function(err, results) {
          if (err) {
            callback(err, null);
          } else {
            db.query(
              insertIngredientForUser,
              [UID, results],
              function(err, resultsTwo) {
                if (err) {
                  callback(err, null);
                } else {
                  callback(null, resultsTwo)
                }
              }
            )
          }
        })
  ))
};

module.exports = {postIngredient}