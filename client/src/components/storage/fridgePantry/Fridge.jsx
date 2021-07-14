import React, { useState, useContext } from 'react';
import {
  Button, Typography, Paper, Grid, ListItem, ListItemText
} from '@material-ui/core';
import useStyles from '../StorageMaterialUi.jsx';
import AddFridgeForm from '../addIngredient/AddFridgeForm.jsx';
import { ProductContext } from '../../../context';

const Fridge = () => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  const [inventory, setInventory] = useState(['milk', 'juice', 'chicken'])
  const { authCode, searchIngredients, setSearchIngredients } = useContext(ProductContext);

  const handleFormOpen = () => {
    setOpenForm(true)
  }

  const handleFormClose = () => {
    setOpenForm(false)
  }

  const handleIngredientSelect = (ingredientName) => {
    event.preventDefault();
    console.log('ingredient name', ingredientName);
    const ingredientsAlready = searchIngredients.concat([ingredientName]);
    console.log('copy of ingredients array?', ingredientsAlready);
    setSearchIngredients(ingredientsAlready);
  }

  return (
    <Grid item xs={12} md={4} className={classes.pantryAndFridgeContainer}>
      <Grid item xs={12} className={classes.fridgeHeader}>
        <Typography variant='h4' align='center' style={{ borderBottom: '2px solid black', height: '100%' }}>
          Fridge
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.items} style={{ borderBottom: '2px solid black' }}>
        {inventory.map((ingredient) => (
          <ListItem key={ingredient} alignItems="flex-start" onClick={() => {handleIngredientSelect(ingredient)}}>
          <ListItemText
            primary={ingredient}
          />
        </ListItem>
        ))}
      </Grid>
      <Grid item xs={12} style={{ height: '10%' }}>
        <Button className={classes.addItemButton} onClick={() => {
          handleFormOpen();
        }}>
          Add Item
        </Button>
        <AddFridgeForm
          openForm={openForm}
          handleFormClose={handleFormClose}
        />
      </Grid>
    </Grid>
  );
};

export default Fridge;