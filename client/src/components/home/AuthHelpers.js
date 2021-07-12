import Axios from 'axios';

export const getAuth = (callback) => {
  Axios.get('/auth/google')
    .then((response) => {
      console.log(response);
      // callback()
    })
    .catch((err) => {
      console.log(err);
    })
}