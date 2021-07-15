import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import Home from './home/Home.jsx';
import Storage from './storage/Storage.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Recipes from './recipes/Recipes.jsx';
import { ProductContext } from '../context.js';
import axios from 'axios';


var App = () => {
  const email = new URLSearchParams(window.location.search).get('email');

  const tempAuth = '4/0AX4XfWgwAol5HXGPHF3HfE7dXkAojKTeMEbDy0cBvqXyyAowq1nRQ45mVJsdmT_ebcB5UQ';

  const [authCode, setAuthCode] = useState(email);
  const [searchIngredients, setSearchIngredients] = useState([]);
  const [inventory, setInventory] = useState([]);

  console.log(email)
  useEffect(() => {
    if (email !== null) {
      setAuthCode(email);
    }
  }, [email])

  useEffect(() => {
    if (email !== null) {
      axios.post('/users/postUser', email)
        .then((response) => {
          console.log('response from posting user to db', response);
        })
    }
  }, [])

  return (
    <ProductContext.Provider value={{
      authCode: authCode,
      searchIngredients, setSearchIngredients,
      inventory, setInventory,
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
    </ProductContext.Provider>
  )
};

export default App;