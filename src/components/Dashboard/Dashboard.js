import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import NavBar from '../NavBar/NavBar';
import SideBar from "../SideBar/SideBar";
import TemperatureCardContainer from '../TemperatureCard/index';

const useStyles = makeStyles(theme => ({
  dashboard: {
    paddingTop: '4rem'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [openSideBar, setOpenSideBar] = useState(false); 
  const toogleSideBar = (state) =>{
    console.log(state)
      setOpenSideBar(state);
  }
  return (
    <div className={classes.dashboard}>
      <NavBar onMenuClick={toogleSideBar} menuState={openSideBar} />
      <SideBar open={openSideBar} toogleSideBar={toogleSideBar}/>
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
    </div>
  );
};

export default Dashboard;
