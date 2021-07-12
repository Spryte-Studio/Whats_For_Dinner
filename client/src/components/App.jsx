import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Home from './home/Home.jsx';
import Storage from './storage/Storage.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
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
            <Link to='/inventory'>Inventory</Link>
          </li>
          <li>
            <Link to='/recipes'>Recipes</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/inventory' exact>
            <Storage />
          </Route>
          <Route path='/recipes' exact>
            <Recipes />
          </Route>
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;