const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const controllers = require('./controllers')

const PORT = 3000;

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.get('/recipes', (req, res) => {
  res.sendFile('index.html',{root: __dirname + '/../client/dist'},(err) => {
    if(err) {
      res.status(400).send(err)
    }
  }
  )});

app.use('/fridge', controllers.fridgePantry);
app.use('/home', controllers.home);
app.use('/ingredients', controllers.ingredients);
app.use('/users', controllers.users);
app.use('/spryte', controllers.recipes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
