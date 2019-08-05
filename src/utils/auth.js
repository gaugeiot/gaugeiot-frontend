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
const getNewToken = async() => {
  //get token from server 
  const response = await axios.post('/api/auth');
  const token =  response.data.token;
  //save token in session storage for future use
  sessionStorage.setItem('token', token);
  return token;
}

const exportedFunctions = {
  getSessionStorageToken,
  verifyTokenValidation,
  isSessionTokenValid,
  getNewToken,
};

export default exportedFunctions;
