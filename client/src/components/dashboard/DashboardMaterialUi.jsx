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
    backgroundColor: '#666782',
    height: '40vh',
    width: '70vh'
  },
  pantryContainer: {
    backgroundColor: '#666782',
    marginTop: '5px',
    height: '400px'
  },
  pantryImg: {
    backgroundColor: '#666782',
    height: '300px',
  },
  recipes: {
    backgroundColor: '#666782',
    height: '40vh',
    width: '70vh'
  },
  recipeContainer: {
    backgroundColor: '#666782',
    marginTop: '5px',
    height: '400px'
  },
  recipeImg: {
    backgroundColor: '#666782',
    height: '400px',
  },
  Img: {
    backgroundColor: '#666782',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
}));

export default useStyles;