import React from 'react';
import TemperatureCardContainer from '../TemperatureCard/index';
import Box from '@material-ui/core/Box';

export default function DashboardEx() {
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      alignItems='flex-start'
      // bgcolor={grey[900]}
      justifyContent='center'
    >
      <TemperatureCardContainer
        name='Sala de Jantar'
        temp={14.11}
        mintemp={1.0}
        maxtemp={19.0}
        unit='C'
        conn={true}
      />
      <TemperatureCardContainer
        name='Quarto'
        temp={-10.02}
        mintemp={-15.7}
        maxtemp={2}
        unit='C'
        conn={false}
      />
      <TemperatureCardContainer
        name='Cozinha'
        temp={25}
        mintemp={22}
        maxtemp={31}
        unit='C'
        conn={true}
      />
      <TemperatureCardContainer
        name='Varanda'
        temp={7}
        mintemp={5}
        maxtemp={12}
        unit='C'
        conn={true}
      />
      <TemperatureCardContainer
        name='Varanda'
        temp={7}
        mintemp={5}
        maxtemp={12}
        unit='C'
        conn={true}
      />
      <TemperatureCardContainer
        name='Varanda'
        temp={7}
        mintemp={5}
        maxtemp={12}
        unit='C'
        conn={true}
      />
      <TemperatureCardContainer
        name='Varanda'
        temp={7}
        mintemp={5}
        maxtemp={12}
        unit='C'
        conn={true}
      />
    </Box>
  );
}
