import React from 'react';
import PropTypes from 'prop-types';
import { RouterConsumer} from './Router';

const Route = ({ path, component }) => {
  return(
    <RouterConsumer>
      {(state,dispatch) => {
        if (path === state.route) return component;
        else return;
      }}
    </RouterConsumer>
  );
};

Route.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.node
};

export default Route;
