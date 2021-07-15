import React from 'react';
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
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Cuisine Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        >
          {cuisineTypes.map((type) => {
            console.log(type);
            return <MenuItem value={type} onClick={() => { filterBy(type) }}>{type}</MenuItem>;
          })}
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
    </div>
  );
}
