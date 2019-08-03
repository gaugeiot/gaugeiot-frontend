import React from 'react';
import Dashaboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtectedRouter from './ProtectedRouter/ProtectedRouter';
import Login from './Login/Login';
import { StateProvider } from './StateProvider/StateProvider';

const App = () => {
  const initialState = {
    user: {
      isAuthenticated: false
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'AuthenticateUser':
        return {
          ...state,
          user: { ...state.user, isAuthenticated: true }
        };
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <ProtectedRouter exact path='/' component={Dashaboard} />
        <Route exact path='/login' component={Login} />
      </Router>
    </StateProvider>
  );
};

export default App;
