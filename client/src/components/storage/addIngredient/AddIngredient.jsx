import React, { useState, useEffect, useContext } from 'react';
import {
  Grid, Button, Paper, Typography, TextField, Input,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem
} from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ProductContext } from '../../../context';
import useStyles from './AddFormMaterialUi.jsx';

const AddPantryForm = ({ openForm, handleFormClose }) => {
  const classes = useStyles();
  const [addMultIngs, updateMultIngs] = useState([]);
  const [addIngredientName, updateAddIngredientName] = useState('');
  const [ingredientAutoComplete, updateAutoCompleteList] = useState([]);
  const { authCode, reloadInventory, toggleReloadInventory } = useContext(ProductContext);

  function handleChange(event, values) {
    updateAddIngredientName(event.target.value);
  };

  function handleAutoCompleteUpdate() {
    if (addIngredientName.length !== 0) {
      axios.get(`/ingredients/${addIngredientName}`)
        .then((response) => {
          updateAutoCompleteList(response.data);
        });
    }
  }

  function handleSubmit(event) {
    handleFormClose();
    axios.post(`/ingredients/false`, { addMultIngs, authCode })
      .then((response) => {
        toggleReloadInventory(!reloadInventory);
      })
  }

  function handleChooseIngredients(event, values) {
    updateMultIngs(values);
  }

  useEffect(() => {
    handleAutoCompleteUpdate();
  }, [addIngredientName]);

  return (
    <Dialog open={openForm} onClose={handleFormClose}>
      <Paper elevation={0} square className={classes.root}>
        <form className={classes.root} noValidate autoComplete="off">
          <Autocomplete
            multiple
            id="Add ingredients to your pantry! :)"
            options={ingredientAutoComplete}
            getOptionLabel={(option) => option}
            fullWidth
            onChange={handleChooseIngredients}
            onKeyPress={(event)=> { if (event.key==='Enter') {event.preventDefault(); handleSubmit(event)}}}
            renderInput={(params) =>
              <TextField
                {...params}
                id="name"
                label="Add multiple pantry items"
                variant="outlined"
                fullWidth
                value={addIngredientName}
                onChange={handleChange}
                helperText="Start typing to select your ingredient here"
              />}
          />
        </form>
        <DialogActions>
          <Button onClick={handleFormClose} >
            Cancel
          </Button>
          <Button onClick={handleSubmit} type="submit" >
            Submit Ingredient
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>)
};

export default AddPantryForm;
