import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const RouterContext = createContext();

const initialState = {
  route: '/signup'
};

const routerReducer = (state, action) => {
  switch (action.type) {
    case 'GOTO':
      return { ...state, route: action.payload };
    default:
      return { ...state };
  }
};

const Router = ({ children }) => (
  <RouterContext.Provider value={useReducer(routerReducer, initialState)}>
    {children}
  </RouterContext.Provider>
);

const RouterConsumer = ({children})=>(
  <RouterContext.Consumer>
    {([state, dispatch]) => children(state,dispatch) }
  </RouterContext.Consumer>
);

RouterConsumer.propTypes = {
  children: PropTypes.func.isRequired
};

Router.propTypes = {
  children: PropTypes.node.isRequired
};

export { Router as default, RouterConsumer };
