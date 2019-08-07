import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const StateContext = createContext();

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

const StateProvider = ({ initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Object containing initial state value.
   */
  initialState: PropTypes.shape({}).isRequired,
};


const getState = () => useContext(StateContext);

export {StateContext, StateProvider, getState}
