import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from "../../reducers/reducer";

const StateContext = createContext();

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
