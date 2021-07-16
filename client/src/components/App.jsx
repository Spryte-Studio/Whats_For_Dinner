/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch, withRouter
} from 'react-router-dom';
import axios from 'axios';
import Home from './home/Home.jsx';
import Storage from './storage/Storage.jsx';
import Recipes from './recipes/Recipes.jsx';
import { ProductContext } from '../context.js';

var App = () => {
  console.log('What\'s For Dinner? \n First Deployed: Jul 15, 2021 \n Created By: David Harbin (@davidkharbin), James Moore (@ThinkCreatively), Meagan Provencher (@mrprov12), Phong Trinh (@ThanhPhongUSC), Mikka Tully (@mtully808)')
  const email = new URLSearchParams(window.location.search).get('email');

  const tempAuth = '4/0AX4XfWgwAol5HXGPHF3HfE7dXkAojKTeMEbDy0cBvqXyyAowq1nRQ45mVJsdmT_ebcB5UQ';

  const [authCode, setAuthCode] = useState(email);
  const [searchIngredients, setSearchIngredients] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [reloadInventory, toggleReloadInventory] = useState(true);

  useEffect(() => {
    if (email !== null) {
      setAuthCode(email);
    }
  }, [])

  useEffect(() => {
    if (email !== null) {
      axios.post('/users/postUser', email)
        .then((response) => {
          // console.log('response from posting user to db', response);
        })
    }
  }, [])

  const handleLogout = () => {
    axios.get('/logout')
      .catch((err) => console.log('handleLogout err: ', err));
  };

  return (
    <ProductContext.Provider value={{
      authCode: authCode,
      searchIngredients, setSearchIngredients,
      inventory, setInventory,
      reloadInventory, toggleReloadInventory,
    }}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home handleLogout={handleLogout} />
            </Route>
            <Route path="/inventory" exact>
              <Storage handleLogout={handleLogout}/>
            </Route>
            <Route path="/recipes" exact>
              <Recipes handleLogout={handleLogout} />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;
