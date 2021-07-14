import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    backgroundColor: '#B3B3C0',
    fontFamily: 'Oswald',
    color: '#E6E6EA'
  },
}));

export default useStyles;