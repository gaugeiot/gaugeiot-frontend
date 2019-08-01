import React from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TemperatureCardContainer from './TemperatureCard/index';

const App = () => {
  return (
    <>
      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        <TemperatureCardContainer
          name='Sala de Jantar'
          temp={14.11}
          unit='C'
          conn={true}
        />
        <TemperatureCardContainer
          name='Quarto'
          temp={-10.02}
          unit='C'
          conn={false}
        />
        <TemperatureCardContainer
          name='Cozinha'
          temp={25}
          unit='C'
          conn={true}
        />
        <TemperatureCardContainer
          name='Varanda'
          temp={7}
          unit='C'
          conn={true}
        />
      </Box>
    </>
  );
};

export default App;
