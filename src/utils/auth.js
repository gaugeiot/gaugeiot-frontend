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


const test = () =>{
  return false;
}

//verifies if token saved in session storage is still valide and so it can
// be used as the user token to make server api resquests
const isSessionTokenValid = async () => {
  const token = exportedFunctions.getSessionStorageToken();
  if (token) return await exportedFunctions.verifyTokenValidation(token);
  return false;
};

const exportedFunctions = {
  getSessionStorageToken,
  verifyTokenValidation,
  isSessionTokenValid,
  test
};

export default exportedFunctions;
