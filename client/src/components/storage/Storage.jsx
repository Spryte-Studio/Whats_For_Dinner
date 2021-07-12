import React from 'react';
<<<<<<< HEAD
import Fridge from './fridgePantry/Fridge.jsx';
import Pantry from './fridgePantry/Pantry.jsx'
=======
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import useStyles from './StorageMaterialUi.jsx';
import globalUseStyles from '../../GlobalMaterialUi.jsx';
import Fridge from './fridgePantry/Fridge.jsx';
import Pantry from './fridgePantry/Pantry.jsx';
>>>>>>> c0ccf313cd8e22f63226976e641a730475c86274

const Storage = () => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  return (
<<<<<<< HEAD
    <div id='Storage'>
      <Fridge />
      <Pantry />
    </div>
=======
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
>>>>>>> c0ccf313cd8e22f63226976e641a730475c86274
  );
};

export default Storage;