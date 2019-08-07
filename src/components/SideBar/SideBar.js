import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsRemote from '@material-ui/icons/SettingsRemote';
import Dashboard from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideBar({open,toogleSideBar}) {
  const classes = useStyles();

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={()=>toogleSideBar(false)}
      onKeyDown={()=>toogleSideBar(false)}
    >
      <List>
        {['Devices'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><SettingsRemote/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div>
      <SwipeableDrawer
        open={open}
        onClose={()=>toogleSideBar(false)}
        onOpen={()=> toogleSideBar(true)}
      >
        {/* {sideList('left')} */}
        <div
          className={classes.list}
          role="presentation"
          onClick={()=>toogleSideBar(false)}
          onKeyDown={()=>toogleSideBar(false)}
        >
          <List> 
            <ListItem button key='Dashboard'>
              <ListItemIcon><Dashboard/></ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
          </List>
          <List> 
            <ListItem button key='New Device'>
              <ListItemIcon><SettingsRemote/></ListItemIcon>
              <ListItemText primary='New Device' />
            </ListItem>
          </List>
       </div>
      </SwipeableDrawer>
    </div>
  );
}