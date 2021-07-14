import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import axios from 'axios';
import Home from './home/Home.jsx';
import Storage from './storage/Storage.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Recipes from './recipes/Recipes.jsx';
import { ProductContext } from '../context.js';




var App = () => {
  const code = new URLSearchParams(window.location.search).get('code');

  const [authCode, setAuthCode] = useState('');

  useEffect(() => {
    if (code !== null) {
      setAuthCode(code);
    }
  }, [code])

  var handleLogout = () => {
    axios.get('/logout')
    .catch(err => console.log('handleLogout err: ',rr))
  }

  return (
    <ProductContext.Provider value={{
      authCode: authCode
    }}>
      <Router>
        <div>
          {/* <ul>
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
        </ul> */}
          <Switch>
            <Route path='/' exact>
              <Home handleLogout={handleLogout}/>
            </Route>
            <Route path='/inventory' exact>
              <Storage handleLogout={handleLogout}/>
            </Route>
            <Route path='/recipes' exact>
              <Recipes handleLogout={handleLogout}/>
            </Route>
            <Route path='/dashboard' exact>
              <Dashboard handleLogout={handleLogout}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </ProductContext.Provider>
  )
};

export default App;