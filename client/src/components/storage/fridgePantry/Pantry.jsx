import React, { useState, useContext } from 'react';
import {
  Button, Typography, Paper, Grid, ListItem, ListItemText
} from '@material-ui/core';
import useStyles from '../StorageMaterialUi.jsx';
import AddPantryForm from '../addIngredient/AddPantryForm.jsx';
import { ProductContext } from '../../../context';
var _ = require('underscore');
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Pantry = ({ deleteIngredient }) => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  const { authCode, searchIngredients, setSearchIngredients, inventory, setInventory } = useContext(ProductContext);

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
          {inventory.map((ingredient) => {
            if (!ingredient.perishable) {
              return (
                <Paper elevation={1} className={classes.ingredient} square>
                  <Grid container xs={12}>
                    <Grid item xs={12} md={10}>
                      <ListItem key={ingredient.name} alignItems="flex-start" onClick={() => {
                        handleIngredientSelect(ingredient.name)
                      }}
                        style={_.contains(searchIngredients, ingredient.name) ? { color: '#FFFFFF', backgroundColor: '#666782' } : { color: 'Black' }}>
                        <ListItemText
                          primary={ingredient.name}
                        />
                      </ListItem>
                    </Grid>
                    <Grid item xs={12} md={2} style={_.contains(searchIngredients, ingredient.name) ? { backgroundColor: '#666782' } : {}}>
                      <IconButton aria-label="delete" className={classes.deleteButton}
                        style={_.contains(searchIngredients, ingredient.name) ? { backgroundColor: '#B3B3EA' } : {}}
                        onClick={() => { deleteIngredient(ingredient.name); }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              )
            }

          })}
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