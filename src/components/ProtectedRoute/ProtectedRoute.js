import React from 'react';
import { StateContext } from '../StateProvider/StateProvider';
import { RedirectRoute, RouterConsumer } from '../Router/index';

const ProtectedRoute = ({ path, Component, ...rest }) => {
  return (
    <RouterConsumer>
      {(state, dispatch) => {
        let route = state.route;
        if (route === path) {
          return (
            <StateContext.Consumer>
              {([state, dispatch]) => {
                let userAuth = state.user.isAuthenticated;
                if (userAuth) return <Component />;
                else return <RedirectRoute to='/signin' />;
              }}
            </StateContext.Consumer>
          );
        } else return null;
      }}
    </RouterConsumer>
  );
};

export default ProtectedRoute;
