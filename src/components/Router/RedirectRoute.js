import React from 'react';
import PropTypes from 'prop-types';
import { RouterConsumer } from './Router';

const RedirectRoute = ({ to }) => {
  return (
    <RouterConsumer>
      {(state, dispatch) => dispatch({ type: 'GOTO', payload: to })}
    </RouterConsumer>
  );
};

RedirectRoute.propTypes = {
  to: PropTypes.string.isRequired
};

export default RedirectRoute;
