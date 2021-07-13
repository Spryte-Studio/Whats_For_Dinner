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
      <Grid container className={classes.header} >
        <Grid item xs={2} style={{ borderRight: '2px solid black' }}>
          <Grid item xs={12} className={classes.tab} style={{ borderBottom: '2px solid black' }}>
            <Link to='/dashboard'>
              <Button className={globalClasses.tabButton} >
                Dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.tab} >
            <Link to='/recipes'>
              <Button className={globalClasses.tabButton}>
                Recipes
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          Logo
        </Grid>
      </Grid>
      <Grid container className={classes.inventoryContainer}>
        <Pantry />
        <Fridge />
      </Grid>
    </Grid >
  );
};

export default Storage;