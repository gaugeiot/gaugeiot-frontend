import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getState } from '../StateProvider/StateProvider';



const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ user }, dispatch] = getState();
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
