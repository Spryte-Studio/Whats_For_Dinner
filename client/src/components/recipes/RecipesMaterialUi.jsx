import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    border: '2px solid black',
    height: '10vh'
  },
  tab: {
    height: '50%'
  },
  recipeContainer: {
    border: '2px solid black',
    height: '100%',
    justifyContent: 'space-evenly'
  },
  recipeCardContainer: {
    margin: '10px'
  },
  // Card Styling
  cardBody: {
    maxWidth: 400
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

export default useStyles;
