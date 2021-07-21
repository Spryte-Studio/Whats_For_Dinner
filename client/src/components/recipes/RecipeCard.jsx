import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardHeader, CardMedia, CardContent, CardActions,
  Collapse, Avatar, IconButton, Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './RecipesMaterialUi.jsx';

export default function RecipeReviewCard({ recipe, label, image, ingredientLines, cuisineType }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const mappedIngredients = ingredientLines.join("\n");

  return (
    console.log(ingredientLines),
    <Card className={classes.cardBody} raised={true} >
      <CardHeader
        avatar={
          <Avatar src="Logos/WFDIngredientLogo-02-09.png" className={classes.avatar} />
        }
        title={label}
        subheader={cuisineType}
      />
      <a href={recipe.url} target="_blank">
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title={label}
        />
      </a>
      <CardActions disableSpacing>
        {/* <IconButton>
          <FavoriteIcon />
        </IconButton> */}
        <Typography variant="body2" component="p">
          Ingredients:
        </Typography>
        <IconButton
          className={classes.expand, {
            [classes.expandOpen]: expanded,
          }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ul>
            {ingredientLines.map((recipeLine) => (
              <li> {recipeLine} </li>
            ))}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
