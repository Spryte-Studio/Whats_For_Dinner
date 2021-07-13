import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  background: {
    height: '100%',
    backgroundColor: '#666782'
  },
  logo: {
    height: '200px',
    width: '100%',
    backgroundColor: '#666782'
  },
  logoutButton: {
    border: '2px solid #E6E6EA',
    backgroundColor: '#B3B3EA',
    width: '150px',
  },
  header: {
    border: '2px solid black',
    height: '300px',
    textAlign: 'center'
  },
  pantry: {
    backgroundColor: '#b3b3co',
    height: '40vh',
    width: '70vh'
  },
  pantryContainer: {
    marginTop: '5px',
    height: '400px'
  },
  pantryImg: {
    height: '400px',
  },
  recipes: {
    backgroundColor: '#b3b3co',
    height: '40vh',
    width: '70vh'
  },
  recipeContainer: {
    marginTop: '5px',
    height: '400px'
  },
  recipeImg: {
    height: '400px',
  },
  Img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
}));

export default useStyles;