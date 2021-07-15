/* eslint-disable object-curly-newline */
import React from 'react';
import {
  Button, Typography, Paper, Grid
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import useStyles from './DashboardMaterialUi.jsx';
import globalUseStyles from '../../GlobalMaterialUi.jsx';

const Dashboard = ({ handleLogout }) => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();
  return (
    <Grid id="dashboard" className={classes.background}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Grid container className={classes.mainGrid} id="Dashboard">
            <Grid item xs={12} s={12} md={2}>
              <Paper className={classes.logo} elevation={0}>
                <img src="Logos/WFD.png" style={{ height: '100%', justifyContent: 'center' }} />
              </Paper>
            </Grid>
            <Grid item xs={12} s={12} md={8}>
              <Paper className={classes.logo} elevation={0}>
                <Typography align="center" variant="h2" style={{ top: '500px', fontFamily: 'Oswald', color: '#e6e6ea', width: '100%', lineHeight: '3' }}>
                  Your Cook Book Digitalized
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={2} className={classes.logoutButtonContainer}>
              <Button
                className={classes.logoutButton}
                onClick={() => {
                  handleLogout();
                }}
              >
                LogOut
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ justifyContent: 'space-evenly' }}>
          <Grid item xs={12} md={4} className={classes.pantryImg}>
            <Link to="/inventory">
              <img src="Logos/WFDInventoryLogo-Final-10.png" alt="Pantry Logo" className={classes.Img} />
            </Link>
          </Grid>
          <Grid item xs={12} md={4} className={classes.pantryImg}>
            <Link to="/recipes">
              <img src="Logos/WFDRecipeLogo-FINAL-11.png" alt="Recipe Logo" className={classes.Img} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
