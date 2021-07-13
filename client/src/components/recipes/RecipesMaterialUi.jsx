import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    height: '100%',
    backgroundColor: '#666782'
  },
  logo: {
    height: '200px',
    width: '100%',
    backgroundColor: '#666782',
  },
  logoutButton: {
    border: '2px solid #E6E6EA',
    backgroundColor: '#B3B3EA',
    width: '150px',
  },
  header: {
    border: '2px solid black',
    height: '300px',
    textAlign: 'center',
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
