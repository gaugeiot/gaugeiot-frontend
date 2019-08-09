import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Route } from '../Router/index';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import DashboardEx from './DashboardEx';

import AddDevice from '../AddDevice/AddDevice';

const useStyles = makeStyles(theme => ({
  dashboard: {
    paddingTop: '4rem'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openAddDevice, setAddDevice] = useState(false);
  const toogleSideBar = state => {
    console.log(state);
    setOpenSideBar(state);
  };
  return (
    <div className={classes.dashboard}>
      <>
        <NavBar onMenuClick={toogleSideBar} menuState={openSideBar} />
        <SideBar open={openSideBar} toogleSideBar={toogleSideBar} />
        <Route path='/' component={<DashboardEx />} />
        <Route path='/dashboard' component={<DashboardEx />} />
        <Route path='/add-device' component={<AddDevice />} />
      </>
    </div>
  );
};

export default Dashboard;
