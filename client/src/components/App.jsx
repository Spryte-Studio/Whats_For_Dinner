import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Home from './home/Home.jsx';
import Storage from './storage/Storage.jsx';
import Login from './users/Login.jsx';
import SignUp from './users/SignUp.jsx';
import Recipes from './recipes/Recipes.jsx';




var App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/storage'>Fridge</Link>
          </li>
          <li>
            <Link to='/recipes'>Recipes</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/storage' exact>
            <Storage />
          </Route>
          <Route path='/recipes' exact>
            <Recipes />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/signup' exact>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;