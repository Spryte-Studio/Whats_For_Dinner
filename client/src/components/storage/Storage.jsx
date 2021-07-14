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

const Storage = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  const { authCode } = useContext(ProductContext);

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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={2} className={classes.tabContainer} >
          <Link to='/dashboard'>
            <Button className={classes.logoutButton}>
              Dashboard
            </Button>
          </Link>
          <Link to='/recipes'>
            <Button className={classes.logoutButton}>
              Recipes
            </Button>
          </Link>
          <Button className={classes.logoutButton}>
            LogOut
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.inventoryContainer}>
        <Pantry />
        <Fridge />
      </Grid>
    </Grid>
  );
};

export default Storage;