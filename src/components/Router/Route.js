import React from 'react';
import PropTypes from 'prop-types';
import { RouterContext } from './Router';

const Route = ({ path, component }) => {
  return (
    <RouterContext.Consumer>
      {([state, dispatch]) => {
        if (path === state.route) return component;
        else return;
      }}
    </RouterContext.Consumer>
  );
};

Route.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.node
};

export default Route;
