import React from 'react';
import PropTypes from 'prop-types';
import { RouterConsumer} from './Router';

const Link = ({ to, children }) => {
  const changeRoute = dispatch => {
    dispatch({ type: 'GOTO', payload: to });
  };
  return (
    <RouterConsumer>
      {(state, dispatch) => {
        return <div onClick={() => changeRoute(dispatch)}>{children}</div>;
      }}
    </RouterConsumer>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Link;
