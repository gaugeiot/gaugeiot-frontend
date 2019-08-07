import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './Dashboard/Dashboard';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRouter from './ProtectedRouter/ProtectedRouter';
import LoginContainer from './Login/index';
import { StateProvider } from './StateProvider/StateProvider';
import authUtils from '../utils/auth';

const initInvalidToken = {
  user: {
    isAuthenticated: false,
    token: ''
  }
};
const initValidToken = {
  user: {
    isAuthenticated: true,
    token: authUtils.getSessionStorageToken()
  }
};

const App = () => {
  const [loadingToken, setLoadingToken] = useState(false);
  const [initialState, setInitialState] = useState(initInvalidToken);

  useEffect(() => {
    //check if there is a token still valid in the session storage
    (async () => {
      const tokenIsValid = await authUtils.isSessionTokenValid();
      if (tokenIsValid) {
        setInitialState(initValidToken);
      }
      setLoadingToken(true);
    })();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'AuthenticateUser':
        return {
          ...state,
          user: {
            ...state.user,
            isAuthenticated: true,
            token: action.payload.token
          }
        };
      case 'LOGOUT':
        // remove token from session storage
        sessionStorage.removeItem('token');
        // update global state
        return {
          ...state,
          user: {
            ...state.user,
            isAuthenticated: false,
            token: ''
          }
        };
      default:
        return state;
    }
  };

  return loadingToken ? (
    <>
      <CssBaseline />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <ProtectedRouter exact path='/' component={Dashboard} />
          <Route exact path='/login' component={LoginContainer} />
        </Router>
      </StateProvider>
    </>
  ) : null;
};

export default App;
