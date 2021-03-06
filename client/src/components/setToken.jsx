import axios from 'axios';

const setToken = (email, password) => {
  axios
    .post('/authAPI/getToken', {
      email: email,
      password: password
    })
    .then(res => {
      localStorage.setItem('local-jwt', res.data);
    });
};
export default setToken;
