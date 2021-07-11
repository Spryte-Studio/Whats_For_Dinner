import React from 'react';
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import useStyles from './DashboardMaterialUi.jsx';
import globalUseStyles from '../../GlobalMaterialUi.jsx';

const Dashboard = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  return (
    <Grid id='dashboard' className={classes.background}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Grid item className={classes.header}>
            <Typography variant='h4' align='center'>
              Header
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.pantryContainer}>
          <Grid item xs={12} md={9} className={classes.pantry}>
            <Link to='/inventory'>
              <Button className={globalClasses.tabButton}>
                <Typography variant='h4' align='left'>
                  Inventory
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3} className={classes.pantryImg}>
            <Typography variant='h4' align='left'>
              Pantry Snapshot
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.recipeContainer}>
          <Grid item xs={12} md={9} className={classes.recipes}>
            <Link to='/recipes'>
              <Button className={globalClasses.tabButton}>
                <Typography variant='h4' align='left'>
                  Recipes
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3} className={classes.recipeImg}>
            <Typography variant='h4' align='left'>
              Recipe Snapshot
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;