import React from 'react';
import PropTypes from 'prop-types';
import { RouterContext } from './Router';

const Link = ({ to, children }) => {
  const changeRoute = dispatch => {
    dispatch({ type: 'GOTO', payload: to });
  };
  return (
    <RouterContext.Consumer>
      {([state, dispatch]) => {
        return <div onClick={() => changeRoute(dispatch)}>{children}</div>;
      }}
    </RouterContext.Consumer>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Link;
