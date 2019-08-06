import React, { useEffect, useState } from 'react';
import Dashaboard from './Dashboard/Dashboard';
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
      default:
        return state;
    }
  };

  return loadingToken ? (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <ProtectedRouter exact path='/' component={Dashaboard} />
        <Route exact path='/login' component={LoginContainer} />
      </Router>
    </StateProvider>
  ) : null;
};

export default App;
