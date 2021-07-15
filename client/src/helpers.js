const Axios = require('axios');

export const endSession = () => {
  window.history.pushState({}, null, '/');
  Axios.get('/logout')
    .then(() => {
      window.location.reload();
    })
}