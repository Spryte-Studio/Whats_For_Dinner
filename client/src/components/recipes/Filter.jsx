import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './RecipesMaterialUi.jsx';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function RecipeReviewCard({ cuisineTypes, filterBy }) {
  const classes = useStyles();
  return (
    <div style={{ marginLeft: '30px'}}>
      <FormControl className={classes.formControl} style={{width: '100%'}}>
        <InputLabel id="demo-simple-select-helper-label">Cuisine Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          onChange={(event) => { filterBy(event.target.value); }}
        >
          <MenuItem value='all'>all</MenuItem>
          {cuisineTypes.map((type) => {
            return <MenuItem value={type} onClick={() => { }}>{type}</MenuItem>;
          })}
        </Select>
        <FormHelperText>Filter by Cuisine</FormHelperText>
      </FormControl>
    </div>
  );
}
