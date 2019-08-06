import axios from 'axios';

//get token from session storage
const getSessionStorageToken = () => {
  let token = sessionStorage.getItem('token');
  if (token) return token;
  else return false;
};

//verifies if a given token is valid by calling /api/auth/verify
const verifyTokenValidation = async token => {
  const response = await axios.get('/api/auth/verify', {
    headers: { Authorization: 'bearer ' + token }
  });
  const verified = response.data.verified;
  if (verified === 'true') {
    return true;
  } else {
    return false;
  }
};

//verifies if token saved in session storage is still valide and so it can
// be used as the user token to make server api resquests
const isSessionTokenValid = async () => {
  const token = exportedFunctions.getSessionStorageToken();
  if (token) return await exportedFunctions.verifyTokenValidation(token);
  return false;
};

//gets a new token to authenticate current user
const getNewToken = async data => {
  //get token from server
  const response = await axios.post('/api/auth', data);
  const msg = response.data.msg;
  if (msg === 'user-not-registered') return false;
  else {
    //save token in session storage for future use
    sessionStorage.setItem('token', msg);
    return true;
  }
};

//trick to enable test with jest framework
const exportedFunctions = {
  getSessionStorageToken,
  verifyTokenValidation,
  isSessionTokenValid,
  getNewToken
};

export default exportedFunctions;
