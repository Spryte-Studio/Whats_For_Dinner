import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    border: '2px solid black',
    height: '10vh'
  },
  tab: {
    height: '50%'
  },
  inventoryContainer: {
    borderBottom: '2px solid black',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    justifyContent: 'space-evenly'
  },
  pantryAndFridgeContainer:{
    border: '2px solid black',
    height: '80vh'
  },
  fridgeHeader: {
    height: '10%'
  },
  items: {
    height: '80%'
  },
  addItemButton: {
    height: '100%',
    width: '100%'
  }
}));

export default useStyles;