import React from 'react';
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import useStyles from './RecipesMaterialUi.jsx';
import globalUseStyles from '../../GlobalMaterialUi.jsx';

var Recipes = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();

  return (
    <Grid container xs={12} id='Recipes'>
      <Grid container className={classes.header} xs={12} >
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
    </Grid >
  );
};

export default Recipes;