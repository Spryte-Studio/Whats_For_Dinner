import React, { useContext } from 'react';
import useStyles from './RecipesMaterialUi.jsx';
import {
  BrowserRouter as Router, Route, Link, Switch, withRouter
} from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { ProductContext } from '../../context';
import { endSession } from '../../helpers';

const NoMatches = () => {
  const classes = useStyles();
  const { authCode } = useContext(ProductContext);

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
                The ingredients selected didn't match any recipes. Please go back to your Inventory and try selecting different recipes.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NoMatches;