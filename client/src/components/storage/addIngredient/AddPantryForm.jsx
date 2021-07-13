import React, { useState, useEffect, useContext } from 'react';
import {
  Grid, Button, Paper, Typography, TextField, Input,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem
} from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ProductContext } from '../../../context';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

const AddPantryForm = ({ openForm, handleFormClose }) => {
  const classes = useStyles();
  const [addMultIngs, updateMultIngs] = useState([]);
  const [addIngredientName, updateAddIngredientName] = useState('');
  const [ingredientAutoComplete, updateAutoCompleteList] = useState([]);
  const { authCode } = useContext(ProductContext);

  function handleChange(event, values) {
    updateAddIngredientName(event.target.value);
  };

  function handleAutoCompleteUpdate() {
    axios.get(`/ingredients/${addIngredientName}`)
      .then((response) => {
        // console.log('response from autocomplete results', response.data);
        updateAutoCompleteList(response.data);
      });
  }

  function handleSubmit(event) {
    handleFormClose();
    console.log('inside submit!!!!');
    axios.post(`/ingredients/false`, {addMultIngs, authCode})
      .then((response) => {
        console.log('response from post pantry ingredients', response);
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
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Autocomplete
          multiple
          id="Add ingredients to your pantry! :)"
          options={ingredientAutoComplete}
          getOptionLabel={(option) => option}
          // style={{ width: 600 }}
          fullWidth
          onChange={handleChooseIngredients}
          renderInput={(params) =>
            <TextField
              {...params}
              id="name"
              // select
              label="Add multiple pantry items"
              variant="outlined"
              fullWidth
              value={addIngredientName}
              onChange={handleChange}
              helperText="Start typing to select your ingredient here"
            />}
        />
      </div>
      </form>
      {/* <DialogContentText>
          Picture of Ingredient
        </DialogContentText>
        <Input
          autoFocus
          margin="dense"
          id="image"
          placeholder="Ingredient Image"
          type="file"
          fullWidth
        /> */}
      <DialogActions>
        <Button onClick={handleFormClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" type="submit">
          Sumbit Ingredient
        </Button>
      </DialogActions>
    </Dialog>)
};

export default AddPantryForm;
