import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TemperatureCard from './TemperatureCard';

const defaultProps = {
  name: 'No Name',
  conn: false,
  temp: 0.0,
  unit: 'C'
};

const TemperatureCardContainer = ({
  name,
  conn,
  temp,
  mintemp,
  maxtemp,
  unit,
  ...others
}) => {
  const [cardName, setCardName] = useState(name);

  const saveCard = name => {
    if (name !== cardName && name !== '') {
      setCardName(name);
      //TODO: sabe changes in database
    }
  };

  return (
    <TemperatureCard
      name={cardName}
      conn={conn}
      temp={temp}
      unit={unit}
      mintemp={mintemp}
      maxtemp={maxtemp}
      onSave={saveCard}
      {...others}
    />
  );
};

TemperatureCardContainer.propTypes = {
  name: PropTypes.string.isRequired,
  conn: PropTypes.bool.isRequired,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  mintemp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxtemp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.oneOf(['F', 'C']).isRequired
};
TemperatureCardContainer.defaultProps = defaultProps;

export default TemperatureCardContainer;
