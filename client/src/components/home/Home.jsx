import React, { useState, useEffect, useContext } from 'react';
import {
  Button, Typography, Paper, Grid, TextField,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';
import useStyles from './HomeMaterialUi.jsx';
import Dashboard from '../dashboard/Dashboard.jsx';
import { ProductContext } from '../../context';

const Home = () => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const { authCode } = useContext(ProductContext);

  const handleLoginOpen = () => {
    setOpenLogin(true);
  }

  const handleLoginClose = () => {
    setOpenLogin(false);
  }

  return (
    authCode ? (<Dashboard />) : (
      <>
        <Paper className={classes.background}>
          <Grid container className={classes.mainGrid} id='Home'>
            <Grid item xs={12} s={12} md={2}>
              <Paper className={classes.logo} elevation={0}>
                <img src="Logos/WFDRecipeLogo-WB-08.png" style={{ height: '100%' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0}>
                <Typography align='center' variant='h2' style={{ top: '500px', fontFamily: 'Oswald' }}>
                  Your Cook Book Digitalized
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Button className={classes.loginHomeButton} onClick={() => {
                handleLoginOpen();
              }}>
                Login
              </Button>
            </Grid>
          </Grid>
          <Typography align='center'>
            TEST
          </Typography>
        </Paper >
        <Dialog open={openLogin} onClose={handleLoginClose}>
          <DialogTitle id="form-dialog-title">Login With Google</DialogTitle>
          <DialogActions>
            <Button onClick={handleLoginClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleLoginClose} color="primary">
              <a href="/auth/google">Sign In with Google</a>
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
};

export default Home;