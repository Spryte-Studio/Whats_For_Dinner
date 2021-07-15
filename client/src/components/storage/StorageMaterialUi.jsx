import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  background: {
    height: '100%',
    backgroundColor: '#666782'
  },
  logo: {
    height: '200px',
    width: '100%',
    backgroundColor: '#666782',
    textAlign: 'center'
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
    height: '300px',
    textAlign: 'center'
  },
  tab: {
    height: '50%'
  },
  inventoryContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: '#666782',
    padding: '30px',
  },
  pantryAndFridgeContainer: {
    border: '2px solid #E6E6EA',
    height: '80vh',
    backgroundColor: '#B3B3EA'
  },
  fridgeHeader: {
    height: '10%',
    borderBottom: '2px solid black'
  },
  items: {
    height: '80%',
    backgroundColor: '#B3B3C0',
    overflow: 'overlay'
  },
  addItemButton: {
    height: '100%',
    width: '100%'
  },
  ingredient: {
    border: '1px solid #E6E6EA',
    backgroundColor: '#B3B3EA',
    margin: '5px'
  }
}));

export default useStyles;