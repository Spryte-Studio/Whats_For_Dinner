import React, { useState, useContext } from 'react';
import {
  Button, Typography, Paper, Grid, ListItem, ListItemText
} from '@material-ui/core';
import useStyles from '../StorageMaterialUi.jsx';
import AddPantryForm from '../addIngredient/AddPantryForm.jsx';
import { ProductContext } from '../../../context';
var _ = require('underscore');

const Pantry = () => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  const [inventory, setInventory] = useState(['chips', 'pretzels', 'skittles'])
  const { authCode, searchIngredients, setSearchIngredients } = useContext(ProductContext);

  const handleFormOpen = () => {
    setOpenForm(true)
  }

  const handleFormClose = () => {
    setOpenForm(false)
  }

  const handleIngredientSelect = (ingredientName) => {
    event.preventDefault();
    var ingredientsAlready;

    if (_.contains(searchIngredients, ingredientName)) {
      ingredientsAlready = _.filter(searchIngredients, function (ingredient) { return ingredient !== ingredientName })
    } else {
      ingredientsAlready = searchIngredients.concat([ingredientName]);
    }

    console.log('copy of ingredients array======', ingredientsAlready);
    setSearchIngredients(ingredientsAlready);
  }

  return (
    <Grid item xs={12} md={4} >
      <Paper className={classes.pantryAndFridgeContainer} elevation={3} square>
        <Grid item xs={12} className={classes.fridgeHeader}>
          <Typography variant='h4' align='center' style={{ borderBottom: '2px solid black', height: '100%' }}>
            Pantry
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.items} style={{ borderBottom: '2px solid black' }}>
          {inventory.map((ingredient) => (
            <Paper elevation={1} className={classes.ingredient} square>
              <ListItem key={ingredient} alignItems="flex-start" onClick={() => {
                handleIngredientSelect(ingredient)

              }}
                style={_.contains(searchIngredients, ingredient) ? { color: '#FFFFFF', backgroundColor: '#666782' } : { color: 'Black' }}>
                <ListItemText
                  primary={ingredient}
                />
              </ListItem>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={12} style={{ height: '10%' }}>
          <Button className={classes.addItemButton} onClick={() => {
            handleFormOpen();
          }}>
            Add Item
          </Button>
          <AddPantryForm
            openForm={openForm}
            handleFormClose={handleFormClose}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Pantry;