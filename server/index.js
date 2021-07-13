const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const passport = require('passport');

const controllers = require('./controllers')

const PORT = 3000;

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use('/inventory', controllers.inventory);
app.use('/home', controllers.home);
app.use('/ingredients', controllers.ingredients);
app.use('/users', controllers.users);
app.use('/recipes', controllers.recipes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
