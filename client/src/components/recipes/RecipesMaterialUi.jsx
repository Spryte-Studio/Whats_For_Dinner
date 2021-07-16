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
  tabContainer: {
    height: '200px',
    width: '100%',
    backgroundColor: '#666782',
    textAlign: 'end'
  },
  logoutButton: {
    border: '2px solid #E6E6EA',
    backgroundColor: '#B3B3EA',
    width: '150px',
    margin: '5px'
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
    height: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: '#666782',
    textAlign: 'start'
  },
  filter: {
    height: '100%',
    justifyContent: 'left',
    backgroundColor: '#666782',
    width: '100%'
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
