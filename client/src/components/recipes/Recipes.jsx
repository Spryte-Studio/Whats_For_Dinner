import React, { useState, useEffect } from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import RecipeCard from './RecipeCard.jsx';
import useStyles from './RecipesMaterialUi.jsx';
import globalUseStyles from '../../GlobalMaterialUi.jsx';

var Recipes = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  // const [recipes, setRecipes] = useState([]);
  const [recipes, setRecipes] = useState(JSON.parse(window.localStorage.getItem("recipes") || '[]'));
  const [query, setQuery] = useState("zucchini", "broccoli", "carrots");

  useEffect(() => {

    const getRecipes = async () => {
      try {
        const response = await axios.get('/spryte/allRecipes', { params: { q: query } })
        console.log(response.data.hits);
        // setRecipes(response.data.hits)
        setRecipes(response.data.hits, () => {
          window.localStorage.setItem("recipes", JSON.stringify(recipes));
        });

      } catch (e) {
        console.log(e);
      }
    }
    getRecipes();
  }, [query])
  console.log(recipes);
  // useEffect(() => {

  //   const getRecipes = async () => {

  //       const response = await axios.get('/spryte/allRecipes', {params: {q: query}})
  //       console.log(response.data.hits);
  //       setRecipes(response.data.hits);
  //       console.log(recipes)

  //   getRecipes();
  // }, [query])

  return (
    <Grid container id='Recipes'>
      <Grid container id='Recipes'>
        <Grid container id='Dashboard'>
          <Grid item xs={12} s={12} md={2}>
            <Paper className={classes.logo} elevation={0} square>
              <img src="Logos/WFDRecipeLogo-WB-08.png" style={{ height: '100%', justifyContent: 'center' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} s={12} md={8}>
            <Paper className={classes.logo} elevation={0} square>
              <Typography align='center' variant='h2' style={{ top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%' }}>
                Your Cook Book Digitalized
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} className={classes.tabContainer} >
            <Link to='/dashboard' >
              <Button className={classes.logoutButton}>
                Dashboard
              </Button>
            </Link>
            <Link to='/inventory'>
              <Button className={classes.logoutButton}>
                Pantry
              </Button>
            </Link>
            <Button className={classes.logoutButton}>
              LogOut
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.recipeContainer}>
          {recipes.map(recipe => {
            return (
              <Grid item xs={12} md={3} className={classes.recipeCardContainer}>
                <RecipeCard
                  key={recipe.recipe.uri}
                  label={recipe.recipe.label}
                  image={recipe.recipe.image}
                  cuisineType={recipe.recipe.cuisineType}
                  ingredientLines={recipe.recipe.ingredientLines}
                  recipe={recipe} />
              </Grid>
            )
          })}
        </Grid>
      </Grid >
    </Grid>
  );
};

export default Recipes;