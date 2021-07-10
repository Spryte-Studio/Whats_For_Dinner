import React, { useState } from 'react';
import {
  Button, Typography, Paper, Grid, TextField,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const Home = () => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);

  const handleLoginOpen = () => {
    setOpenLogin(true);
  }

  const handleLoginClose = () => {
    setOpenLogin(false);
  }

  return (
    <>
      <Paper className={classes.background}>
        <Grid container className={classes.mainGrid} id='Home'>
          <Grid item xs={12} s={12} md={11}>
            <Paper className={classes.logo} elevation={0}>
              <img src="https://print-stock.co.uk/img/library/l/Logo_SQ.jpg" style={{ height: '100%' }} />
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
      </Paper>
      <Dialog open={openLogin} onClose={handleLoginClose}>
        <DialogTitle id="form-dialog-title">Please Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Login please click the login with google button.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLoginClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;