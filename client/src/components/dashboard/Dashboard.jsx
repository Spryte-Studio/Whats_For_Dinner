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
          <Grid container className={classes.mainGrid} id='Home'>
            <Grid item xs={12} s={12} md={2}>
              <Paper className={classes.logo} elevation={0}>
                <img src="Logos/WFDRecipeLogo-WB-08.png" style={{ height: '100%', justifyContent: 'center' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0}>
                <Typography align='center' variant='h2' style={{ top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%' }}>
                  Your Cook Book Digitalized
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={2} className={classes.logo} >
              <Button className={classes.logoutButton} onClick={() => {
                handleLoginOpen();
              }}>
                LogOut
              </Button>
            </Grid>
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
            <Paper>
              <img src='Logos/WFDIngredientLogo-02-09.png' alt='Pantry Logo' className={classes.Img} />
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.recipeContainer}>
          <Grid item xs={12} md={9} className={classes.recipes}>
            <Link to='/recipes'>
              <Button className={globalClasses.tabButton}>
                <Typography variant='h4' align='left' >
                  Recipes
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3} className={classes.recipeImg}>
            <Paper className={classes.Img}>
              <img src='Logos/WFDRecipeLogo-NB-08.png' alt='Recipe Logo' className={classes.Img} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;