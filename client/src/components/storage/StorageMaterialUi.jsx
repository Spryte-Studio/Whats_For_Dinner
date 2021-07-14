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
  // header: {
  //   border: '2px solid black',
  //   height: '10vh',
  //   backgroundColor: '#666782'
  // },
  tab: {
    height: '50%'
  },
  inventoryContainer: {
    borderBottom: '2px solid black',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    justifyContent: 'space-evenly',
    backgroundColor: '#191B43'
  },
  pantryAndFridgeContainer:{
    border: '2px solid black',
    height: '80vh',
    backgroundColor: '#666782'
  },
  fridgeHeader: {
    height: '10%'
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