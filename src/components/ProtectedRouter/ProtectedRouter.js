import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getState } from '../StateProvider/StateProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ user }, dispatch] = getState();

  if (user.isAuthenticated === false) {
    // first checks if token is already in sessionStorage
    // if not, calls the login page to authenticate the user
    const token = sessionStorage.getItem('token');
    if (token) {
      // TODO: checks if token is still valid by calling the server api to verify
      let validToken = true;
      //  if session's storage token is istil valid, so athenticateS the user
      if (validToken) {
        dispatch({
          type: 'AuthenticateUser',
          payload: {
            token: token
          }
        });
      }
    }
  }
  return (
    <Route
      {...rest}
      render={props =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
