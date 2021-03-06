import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  background: {
    height: '100vh',
    backgroundColor: '#666782'
  },
  logo: {
    height: '200px',
    backgroundColor: '#666782'
  },
  mainGrid: {
    textAlign: 'center',
    color: '#e6e6ea'

  },
  loginHomeButton: {
    border: '2px solid #E6E6EA',
    backgroundColor: '#B3B3EA',
    width: '150px',
    top: '10px',
    left: '30px'
  },
  loginForm: {
    height: '50vh',
    width: '75vh',
    left: '100px'
  }
}));

export default useStyles;
