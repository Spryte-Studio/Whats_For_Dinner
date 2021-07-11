import React from 'react';
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import useStyles from '../MaterialUi.jsx';

const Pantry = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} md={4} className={classes.pantryAndFridgeContainer}>
      <Grid item xs={12} className={classes.fridgeHeader}>
        <Typography variant='h4' align='center' style={{ borderBottom: '2px solid black', height: '100%' }}>
          Pantry
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.items} style={{ borderBottom: '2px solid black' }}>
        Items (Map here)
      </Grid>
      <Grid item xs={12} style={{ height: '10%' }}>
        <Button className={classes.addItemButton}>
          Add Item
        </Button>
      </Grid>
    </Grid>
  );
};

export default Pantry;