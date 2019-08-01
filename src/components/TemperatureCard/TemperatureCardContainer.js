import React from 'react';
import PropTypes from 'prop-types';
import TemperatureCard from './TemperatureCard';

const defaultProps = {
  name: 'No Name',
  conn: false,
  temp: 0.0,
  unit: 'C'
};

const TemperatureCardContainer = ({ name, conn, temp, unit, ...others }) => {
  return (
    <TemperatureCard
      name={name}
      conn={conn}
      temp={temp}
      unit={unit}
      {...others}
    />
  );
};

TemperatureCardContainer.propTypes = {
  name: PropTypes.string.isRequired,
  conn: PropTypes.bool.isRequired,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.oneOf(['F', 'C']).isRequired
};
TemperatureCardContainer.defaultProps = defaultProps;

export default TemperatureCardContainer;
