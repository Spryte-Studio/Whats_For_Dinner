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
      {/* <Grid container className={classes.header} >
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
      </Grid> */}
      <Grid item xs={12}>
        {/* <Grid container className={classes.mainGrid} id='Dashboard'>
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
        </Grid> */}
        <Grid item xs={12}>
        <Grid container className={classes.mainGrid} id='Dashboard'>
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
            <Button className={classes.logoutButton}>
              <Link to='/dashboard' >
                Dashboard
              </Link>
            </Button>
            <Button className={classes.logoutButton}>
              <Link to='/inventory'>
                Inventory
              </Link>
            </Button>
            <Button className={classes.logoutButton} onClick={() => {
              handleLoginOpen();
            }}>
              LogOut
            </Button>
          </Grid>
        </Grid>
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