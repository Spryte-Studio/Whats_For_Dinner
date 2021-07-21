-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL NOT NULL,
  auth_code VARCHAR NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(auth_code)
);

-- ---
-- Table 'users_inventory'
--
-- ---

DROP TABLE IF EXISTS users_inventory;

CREATE TABLE users_inventory (
  id SERIAL NOT NULL,
  user_id INTEGER NOT NULL,
  inventory_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'inventory'
--
-- ---

DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory (
  id SERIAL NOT NULL,
  name VARCHAR NOT NULL,
  photo VARCHAR DEFAULT NULL,
  perishable boolean NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(name)
);

-- ---
-- Table 'favorite_recipes'
--
-- ---

DROP TABLE IF EXISTS favorite_recipes;

CREATE TABLE favorite_recipes (
  id SERIAL NOT NULL,
  recipe_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'favorite_recipes'
--
-- ---

DROP TABLE IF EXISTS favorite_recipes;

CREATE TABLE favorite_recipes (
  id SERIAL NOT NULL,
  calories INTEGER,
  cautions TEXT[] DEFAULT array[]::TEXT[],
  cusineType TEXT[] DEFAULT array[]::TEXT[],
  dietLabels TEXT[] DEFAULT array[]::TEXT[],
  digest JSON[] DEFAULT array[]::JSON[],
  dishType TEXT[] DEFAULT array[]::TEXT[],
  healthLabels TEXT[] DEFAULT array[]::TEXT[],
  image VARCHAR DEFAULT '',
  ingredientLines TEXT[] DEFAULT array[]::TEXT[],
  ingredients TEXT[] DEFAULT array[]::TEXT[],
  label VARCHAR DEFAULT '',
  mealType TEXT[] DEFAULT array[]::TEXT[],
  shareAs VARCHAR DEFAULT '',
  source VARCHAR DEFAULT '',
  totalTime INTEGER DEFAULT 0,
  totalWeight INTEGER DEFAULT 0,
  uri VARCHAR DEFAULT '',
  url VARCHAR DEFAULT '',
  yield INTEGER DEFAULT 0,
  PRIMARY KEY (id)
);



-- ---
-- Foreign Keys
-- ---

ALTER TABLE users_inventory ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE users_inventory ADD FOREIGN KEY (inventory_id) REFERENCES inventory (id);
ALTER TABLE favorite_recipes ADD FOREIGN KEY (user_id) REFERENCES users (id);


ALTER TABLE favorite_recipes RENAME TO users_favorites;
ALTER TABLE users_favorites ADD FOREIGN KEY (recipe_id) REFERENCES favorite_recipes (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_inventory` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `inventory` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `favorite_recipes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`email`) VALUES
-- ('','');
-- INSERT INTO `users_inventory` (`id`,`user_id`,`inventory_id`) VALUES
-- ('','','');
-- INSERT INTO `inventory` (`id`,`name`,`photo`,`perishable`) VALUES
-- ('','','','');
-- INSERT INTO `favorite_recipes` (`id`,`recipe_id`,`user_id`) VALUES
-- ('','','');