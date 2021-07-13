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
  const [recipes, setRecipes] = useState(JSON.parse(window.localStorage.getItem("recipes") || '[]'));
  const [query, setQuery] = useState("zucchini", "broccoli", "carrots");

  useEffect(() => {

    const getRecipes = async () => {
      try {
        const response = await axios.get('/spryte/allRecipes', { params: { q: query } })
        console.log(response.data.hits);
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
      <Grid container className={classes.header}>
        <Grid item xs={2} style={{ borderRight: '2px solid black' }}>
          <Grid item xs={12} className={classes.tab} style={{ borderBottom: '2px solid black' }}>
            <Link to='/dashboard'>
              <Button className={globalClasses.tabButton} >
                Dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.tab} >
            <Link to='/inventory'>
              <Button className={globalClasses.tabButton}>
                Inventory
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          Logo
        </Grid>
      </Grid>
      <Grid container className={classes.recipeContainer}>
        <Grid item xs={12} md={3} className={classes.recipeCardContainer}>
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
          {/* <RecipeCard />
        </Grid>
        <Grid item xs={12} md={3} className={classes.recipeCardContainer}>

          <RecipeCard />
        </Grid>
        <Grid item xs={12} md={3} className={classes.recipeCardContainer}>
          <RecipeCard /> */}
        </Grid>
      </Grid>
    </Grid >
  );
};

export default Recipes;