import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  background: {
    height: '100%'
  },
  header: {
    border: '2px solid black',
    height: '20vh'
  },
  pantry: {
    border: '2px solid black',
    height: '40vh',
    width: '70vh',
  },
  pantryContainer: {
    marginTop: '5px'
  },
  pantryImg: {
    border: '2px solid black',
  },
  recipes: {
    border: '2px solid black',
    height: '40vh',
    width: '70vh'
  },
  recipeContainer: {
    marginTop: '5px'
  },
  recipeImg: {
    border: '2px solid black',
  }
}));

export default useStyles;