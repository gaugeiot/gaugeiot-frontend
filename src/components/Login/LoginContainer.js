import React, { useState } from 'react';
import { getState } from '../StateProvider/StateProvider';
import authUtils from '../../utils/auth';
import Login from './Login';



const LoginContainer = ({redirectTo = '/'}) => {
  const [{ user }, dispatch] = getState();  
  const [error, setError] = useState(false);

  const authenticate = (email, password) => {
    //get token from server
    authUtils.getNewToken({ email, password }).then(status => {
      if (status === true) {
        // if user was authenticaded, update global state
        dispatch({
          type: 'LOGIN',
          payload: {
            token: authUtils.getSessionStorageToken()
          }
        });
      } else {
        setError(true);
        console.log('User not authenticate, please check email and password!');
      }
    });
  };

  return <Login onSubmit={authenticate} error={error} />

};

LoginContainer.propTypes = {};

export default LoginContainer;
