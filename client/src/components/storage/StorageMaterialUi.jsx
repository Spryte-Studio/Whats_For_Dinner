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
    padding: '10px'
  },
  pantryAndFridgeContainer:{
    border: '2px solid black',
    height: '80vh',
    backgroundColor: '#666782'
  },
  fridgeHeader: {
    height: '10%',
    borderBottom: '2px solid black'
  },
  items: {
    height: '80%',
    backgroundColor: '#B3B3C0'
  },
  addItemButton: {
    height: '100%',
    width: '100%'
  }
}));

export default useStyles;