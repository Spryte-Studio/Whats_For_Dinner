import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  background: {
    height: '100vh',
    border: '2px solid black'
  },
  logo: {
    height: '200px'
  },
  mainGrid: {
    textAlign: 'center',
    borderBottom: '2px solid black'
  },
  loginHomeButton: {
    border: '2px solid black'
  },
  loginForm: {
    height: '50vh',
    width: '75vh',
    left: '100px'
  }
}));

export default useStyles;
