import React, { useState, useEffect, useContext } from 'react';
import {
  Button, Typography, Paper, Grid, TextField,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';
import useStyles from './HomeMaterialUi.jsx';
import Storage from '../storage/Storage.jsx';
import { ProductContext } from '../../context';
import { getAuth } from '../../helpers';
import Intro from './Intro.jsx';

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
    authCode ? (<Storage />) : (
      <>
        <Paper className={classes.background}>
          <Grid container className={classes.mainGrid} id='Home'>
            <Grid item xs={12} s={12} md={2}>
              <Paper className={classes.logo} elevation={0}>
                <img src="Logos/WFD.png" style={{ height: '100%' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0}>
                <Typography align='center' variant='h2' style={{ top: '500px', fontFamily: 'Oswald',   color: '#e6e6ea' , lineHeight: '3'  }}>
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
          <Intro />
        </Paper >
        <Dialog open={openLogin} onClose={handleLoginClose}>
          <DialogTitle id="form-dialog-title">Login With Google</DialogTitle>
          <DialogActions>
            <Button onClick={handleLoginClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {
              // handleLoginClose();
              // getAuth();
            }} color="primary">
              <a href="/auth/google">Sign In with Google</a>
              {/* <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=212805700707-muf5v7daa20sumpsafnojrlanps22eh4.apps.googleusercontent.com&flowName=GeneralOAuthFlow">
                Sign In with Google
              </a> */}
              {/* Sign in With Google */}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
};

export default Home;