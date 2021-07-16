import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import {
  BrowserRouter as Router, Route, Link, Switch, withRouter
} from 'react-router-dom';
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import RecipeCard from './RecipeCard.jsx';
import useStyles from './RecipesMaterialUi.jsx';
import globalUseStyles from '../../GlobalMaterialUi.jsx';
import { ProductContext } from '../../context';
import Filter from './Filter.jsx';
import { useRefresh } from 'react-tidy'


import { endSession } from '../../helpers';


const Recipes = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  const [recipes, setRecipes] = useState([]);
  const [OGrecipes, setOGRecipes] = useState([]);
  const [cuisineTypes, setCuisineTypes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState();
  const { searchIngredients, authCode } = useContext(ProductContext);
  const mappedIngredients = searchIngredients
    .map((ingredient, idx) => {
      if (idx < searchIngredients.length - 1) {
        return ingredient + "+";
      } else {
        return ingredient;
      }
    })
    .join("");
  const [query, setQuery] = useState(mappedIngredients);


  const getRecipes = async () => {
    try {
      const response = await axios.get('/spryte/allRecipes', { params: { q: query } });
      console.log(response.data.hits);
      setRecipes(response.data.hits);
      setOGRecipes(response.data.hits);
      var cuisines = [];
      response.data.hits.forEach((recipe) => {
        if (recipe.recipe.cuisineType && recipe.recipe.cuisineType.length > 0) {
          if (!cuisines.includes(recipe.recipe.cuisineType[0])) {
            cuisines.push(recipe.recipe.cuisineType[0]);
          }
        }
      });
      setCuisineTypes(cuisines);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]);
  const filterBy = (type) => {
    if (type === 'all') {
      setRecipes(OGrecipes);
    } else {
      var filteredRecipes = [];
      OGrecipes.forEach((recipe) => {
        if (recipe.recipe.cuisineType && recipe.recipe.cuisineType.length > 0) {
          if (recipe.recipe.cuisineType[0] === type) {
            filteredRecipes.push(recipe);
          }
        }
      });
      setRecipes(filteredRecipes);
    }
  };

  if (mappedIngredients.length === 0) {
    return (
      <Grid container id='Recipes'>
        <Grid container id='Recipes'>
          <Grid container id='Dashboard'>
            <Grid item xs={12} s={12} md={2}>
              <Paper className={classes.logo} elevation={0} square>
                <img src="Logos/WFD.png" style={{ height: '100%', justifyContent: 'center' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0} square>
                <Typography
                  align="center"
                  variant="h2"
                  style={{
                    top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%', lineHeight: '3'
                  }}
                >
                  Your Cookbook Digitalized
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={2} className={classes.tabContainer} >
              <Link to={`/inventory?email=${authCode}`}>
                <Button className={classes.logoutButton}>
                  Inventory
                </Button>
              </Link>
              <Button className={classes.logoutButton} onClick={endSession}>
                LogOut
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.recipeContainer}>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0} square>
                <Typography
                  align="center"
                  variant="h4"
                  style={{
                    top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%'
                  }}
                >
                  No ingredients selected to display recipes for - head back to pantry to select ingredients.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  } if (recipes.length === 0) {
    return (
      <Grid container id="Recipes">
        <Grid container id="Recipes">
          <Grid container id="Dashboard">
            <Grid item xs={12} s={12} md={2}>
              <Paper className={classes.logo} elevation={0} square>
                <img src="Logos/WFD.png" style={{ height: '100%', justifyContent: 'center' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0} square>
                <Typography
                  align="center"
                  variant="h2"
                  style={{
                    top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%', lineHeight: '3'
                  }}
                >
                  Your Cookbook Digitalized
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={2} className={classes.tabContainer} >
              <Link to={`/inventory?email=${authCode}`}>
                <Button className={classes.logoutButton}>
                  Inventory
                </Button>
              </Link>
              <Button className={classes.logoutButton} onClick={endSession}>
                LogOut
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.recipeContainer}>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0} square>
                <Typography
                  align="center"
                  variant="h4"
                  style={{
                    top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%'
                  }}
                >
                  The ingredients selected didn't match any recipes. Please go back to your pantry and try selecting different recipes.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container id="Recipes">
      <Grid container id="Recipes">
        <Grid container id="Dashboard">
          <Grid item xs={12} s={12} md={2}>
            <Paper className={classes.logo} elevation={0} square>
              <img src="Logos/WFD.png" style={{ height: '100%', justifyContent: 'center' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} s={12} md={8}>
            <Paper className={classes.logo} elevation={0} square>
              <Typography
                align="center"
                variant="h2"
                style={{
                  top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%', lineHeight: '3'
                }}
              >
                Your Cookbook Digitalized
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} className={classes.tabContainer}>
            <Link to={`/inventory?email=${authCode}`}>
              <Button className={classes.logoutButton}>
                Inventory
              </Button>
            </Link>
            <Button className={classes.logoutButton} onClick={endSession}>
              LogOut
            </Button>
          </Grid>
        </Grid>
        <Grid xs={2} sm={2} md={2} className={classes.recipeContainer}>
          <Filter cuisineTypes={cuisineTypes} filterBy={filterBy} />
        </Grid>
        <Grid container xs={10} sm={10} md={10} className={classes.recipeContainer}>
          {recipes.map((recipe) => (
            <Grid item xs={12} md={3} className={classes.recipeCardContainer}>
              <RecipeCard
                key={recipe.recipe.uri}
                label={recipe.recipe.label}
                image={recipe.recipe.image}
                cuisineType={recipe.recipe.cuisineType}
                ingredientLines={recipe.recipe.ingredientLines}
                recipe={recipe.recipe}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Recipes;
