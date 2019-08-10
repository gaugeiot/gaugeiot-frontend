import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route } from './Router/index';
import { StateProvider, StateContext } from './StateProvider/StateProvider';
import Dashboard from './Dashboard/Dashboard';
import LoginContainer from './Login/index';
import authUtils from '../utils/auth';
import SignUp from './SignUp/SignUp';

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

  return loadingToken ? (
    <Router>
      <CssBaseline />
      <StateProvider initialState={initialState}>
        <StateContext.Consumer>
          {([state,dispatch]) =>
           (state.user.isAuthenticated === false? <Dashboard/>:
           <Route path='/signin' component={<LoginContainer/>}/>)
          }
        </StateContext.Consumer>
      </StateProvider>
      <Route path='/signup' component={<SignUp />} />
    </Router>
  ) : null;
};

export default App;
