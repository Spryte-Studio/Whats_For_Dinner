const Axios = require('axios');

export const endSession = () => {
  window.history.pushState({}, null, '/');
  Axios.get('/logout')
    .then(() => {
      window.location.reload();
    })
}

export const getAuth = () => {
  console.log('HIT IN GETAUTH HELPER')
  Axios.get('/auth/google', { crossdomain: true })
    .then((response) => {
      console.log(response)
    })
}