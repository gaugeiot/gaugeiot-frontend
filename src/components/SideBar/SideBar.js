import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsRemote from '@material-ui/icons/SettingsRemote';
import Dashboard from '@material-ui/icons/Dashboard';
import { Link } from '../Router/index';

const useStyles = makeStyles({
  list: {
    width: 200
  },
  fullList: {
    width: 'auto'
  }
});

export default function SideBar({ open, toogleSideBar }) {
  const classes = useStyles();

  return (
    <div>
      <SwipeableDrawer
        open={open}
        onClose={() => toogleSideBar(false)}
        onOpen={() => toogleSideBar(true)}
      >
        <div
          className={classes.list}
          role='presentation'
          onClick={() => toogleSideBar(false)}
          onKeyDown={() => toogleSideBar(false)}
        >
          <List>
            <Link to='/dashboard'>
              <ListItem button key='Dashboard'>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link to='/add-device'>
              <ListItem button key='New Device'>
                <ListItemIcon>
                  <SettingsRemote />
                </ListItemIcon>
                <ListItemText primary='New Device' />
              </ListItem>
            </Link>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
