import React, { useState, useEffect } from 'react';
import {
  Button, Typography, Paper, Grid, TextField,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';
import useStyles from './HomeMaterialUi.jsx';
import Dashboard from '../dashboard/Dashboard.jsx';

const Home = () => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);

  const handleLoginOpen = () => {
    setOpenLogin(true);
  }

  const handleLoginClose = () => {
    setOpenLogin(false);
  }

  const code = new URLSearchParams(window.location.search).get('code');

  // useEffect(() => {

  // }, [hash]);

  console.log(code)
  return (
    code ? (<Dashboard />) : (
      <>
        <Paper className={classes.background}>
          <Grid container className={classes.mainGrid} id='Home'>
            <Grid item xs={12} s={12} md={11}>
              <Paper className={classes.logo} elevation={0}>
                <img src="https://media.discordapp.net/attachments/863169328869277717/864205075186581534/Logo-palette-07.png" style={{ height: '100%' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={1}>
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
      </>)
  );
};

export default Home;