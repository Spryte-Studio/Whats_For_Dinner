import React, { useEffect, useState, useContext } from 'react';
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import useStyles from './StorageMaterialUi.jsx';
import globalUseStyles from '../../GlobalMaterialUi.jsx';
import Fridge from './fridgePantry/Fridge.jsx';
import Pantry from './fridgePantry/Pantry.jsx';
import { ProductContext } from '../../context';
import { endSession } from '../../helpers';
import axios from 'axios';

const Storage = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  const { authCode, searchIngredients, inventory, setInventory, reloadInventory, toggleReloadInventory } = useContext(ProductContext);

  function fetchInventory(code) {


    console.log('AUTH CODE======', { code })
    axios.get(`/storage/inventory`, {
      params: { authCode: code }
    })
      .then((response) => {
        console.log('inside .then====', response)
        setInventory(response.data);
      });
  };

  // useEffect(() => {
  //   fetchInventory(authCode);
  // }, []);

  useEffect(() => {
    fetchInventory(authCode);
  }, [reloadInventory]);

  // const deleteIngredient = (ingredientName) => {
  //   axios.delete(`/ingredients/${ingredientName}`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deleteIngredient = (ingredientName) => {
    axios.delete(`/ingredients/${ingredientName}`, {
      params: {
        email: authCode
      }
    })
      .then((response) => {
        // console.log('success response from deleting ingredient', response);
        // toggle the 'reload inventory' switch so the inventory list can have an automatic reload
        toggleReloadInventory(!reloadInventory);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (searchIngredients.length !== 0) {
    return (
      <Grid container id='Storage'>
        <Grid container id='Dashboard'>
          <Grid item xs={12} s={12} md={2}>
            <Paper className={classes.logo} elevation={0} square>
              <img src="Logos/WFD.png" style={{ height: '100%', justifyContent: 'center' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} s={12} md={8}>
            <Paper className={classes.logo} elevation={0} square>
              <Typography align='center' variant='h2' style={{ top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%' }}>
                Your Cook Book Digitalized
              </Typography>
              <Typography align='center' variant='h4' style={{ fontFamily: 'Oswald', color: '#e6e6ea' }}>
                Now that you've selected some ingredients, head over to recipes to see what you could make!
              </Typography>
              <Link to='/recipes'>
                <Button className={classes.logoutButton}>
                  See Recipes!
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} className={classes.tabContainer} >
            <Button className={classes.logoutButton} onClick={endSession}>
              LogOut
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.inventoryContainer}>
          <Pantry deleteIngredient={deleteIngredient} />
          {/* <Fridge deleteIngredient={deleteIngredient} /> */}
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container id='Storage'>
        <Grid container id='Dashboard'>
          <Grid item xs={12} s={12} md={2}>
            <Paper className={classes.logo} elevation={0} square>
              <img src="Logos/WFD.png" style={{ height: '100%', justifyContent: 'center' }} />
            </Paper>
          </Grid>
          <Grid item xs={12} s={12} md={8}>
            <Paper className={classes.logo} elevation={0} square>
              <Typography align='center' variant='h2' style={{ top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%' }}>
                Your Cook Book Digitalized
              </Typography>
              <Typography align='center' variant='h4' style={{ fontFamily: 'Oswald', color: '#e6e6ea' }}>
                What ingredients do you want to use?
              </Typography>
              <Typography align='center' variant='h5' style={{ fontFamily: 'Oswald', color: '#e6e6ea' }}>
                ( Click to Select )
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} className={classes.tabContainer} >
            <Link to='/recipes'>
              <Button className={classes.logoutButton}>
                Recipes
              </Button>
            </Link>
            <Button className={classes.logoutButton} onClick={endSession}>
              LogOut
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.inventoryContainer}>
          <Pantry deleteIngredient={deleteIngredient} />
          {/* <Fridge deleteIngredient={deleteIngredient} /> */}
        </Grid>
      </Grid>
    );
  }
};

export default Storage;