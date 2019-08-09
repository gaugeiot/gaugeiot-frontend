import React from 'react';
import PropTypes from 'prop-types';
import { RouterConsumer} from './Router';

const RouteLink = ({ to, children }) => {
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

RouteLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default RouteLink;
