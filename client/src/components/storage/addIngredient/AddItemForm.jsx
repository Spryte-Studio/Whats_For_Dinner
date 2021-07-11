import React, { useState } from 'react';
import {
  Grid, Button, Paper, Typography, TextField, Input,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';

const AddItemForm = ({ openForm, handleFormClose }) => {
  return (
    <Dialog open={openForm} onClose={handleFormClose}>
      <DialogTitle id="form-dialog-title">Please Fill In The Item Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ingredient Name
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Ingredient Name"
          type="text"
          fullWidth
        />
        <DialogContentText>
          Picture of Ingredient
        </DialogContentText>
        <Input
          autoFocus
          margin="dense"
          id="image"
          placeholder="Ingredient Image"
          type="file"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleFormClose} color="primary">
          Sumbit Ingredient
        </Button>
      </DialogActions>
    </Dialog>)
};

export default AddItemForm;
