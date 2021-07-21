const db = require('../../database');

const getFavorites = (userId, callback) => {
  const queryStr = `SELECT * FROM favorite_recipes, users_favorites
  WHERE users_favorites.user_id=$1
  AND users_favorites.recipe_id=favorite_recipes.id`;
  const queryParams = [userId];
  db.query(queryStr, queryParams)
    .then((results) => {
      console.log('getFavs results ', results);
      callback(null, results);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const postFavorite = (recipe, userId, callback) => {
  const queryStr = 'INSERT INTO favorite_recipes (calories, cautions, cuisineType, dietLabels, digest, dishType, healthLabels, image, ingredientLines, ingredients, label, mealType, shareAs, source, totalTime, totalWeight, uri, url, yield) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING ID;';
  const queryParams = [recipe.calories, recipe.cautions, recipe.cuisineType, recipe.dietLabels, recipe.digest, recipe.dishType, recipe.healthLabels, recipe.image, recipe.ingredientLines, recipe.ingredients, recipe.label, recipe.mealType, recipe.shareAs, recipe.source, recipe.totalTime, recipe.totalWeight, recipe.uri, recipe.url, recipe.yield];
  db.query(queryStr, queryParams)
    .then((results) => {
      const queryStr = 'INSERT INTO users_favorites (user_id, recipe_id) VALUES ($1, $2)';
      const queryParams = [userId, results.row[0].id];
      db.query(queryStr, queryParams)
        .then((results) => {
          console.log('postFavs results ', results);
          callback(null, results);
        })
        .catch((err) => {
          callback(err, null);
        });
    })
    .catch((err) => {
      callback(err, null);
    });
};

const deleteFavorite = (recipeId, userId, callback) => {
  const queryStr = 'DELETE FROM users_favorites WHERE recipe_id=$1; DELETE FROM favorite_recipes WHERE id=$2;';
  const queryParams = [recipeId, recipeId];
  db.query(queryStr, queryParams)
    .then((results) => {
      console.log('delFavs results ', results);
      callback(null, results);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = { postFavorite, deleteFavorite, getFavorites };
