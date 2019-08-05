import axios from 'axios';

//get token from session storage
export const getSessionStorageToken = () => {
  let token = sessionStorage.getItem('token');
  if (token) return token;
  else return false;
};

//verifies if a given token is valid by calling /api/auth/verify
export const verifyTokenValidation = async token => {
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
export const isSessionTokenValid = async () => {
  const token = getSessionStorageToken();
  if (token) return await verifyTokenValidation(token);
  return false;
};
