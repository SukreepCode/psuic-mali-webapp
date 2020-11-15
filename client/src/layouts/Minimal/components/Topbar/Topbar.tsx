import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Box, Popover, ListItemText, ListItemIcon, Divider, ListItem, Backdrop } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Profile } from './components';

import { LOGOUT_PATH } from '../../../../pages/Routes';

const useStyles = makeStyles((theme: any) => ({
  root: {
    // boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  popover: {
    width: "240px"
  },
  logo: {
    height: 35
  }
}));

// interface PropsType {
//   className?: any;
//   isAuthentication?: boolean;
// }

export const Topbar = (props: any) => {
  const { className, isAuthentication, ...rest } = props;

  const classes = useStyles();

  // Popup
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const user = {
    name: 'Shen Zhi',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director'
  };


  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            className={classes.logo}
            alt="Logo"
            src="/images/logo-blue.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />

        {isAuthentication &&
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
        }

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box p={3} className={classes.popover}>
            <Profile user={user} />
          </Box>
          <Divider />
          <ListItem button component="a" href="#">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
            />
          </ListItem>
          <ListItem button component="a" href={LOGOUT_PATH}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sign Out"
            />
          </ListItem>

        </Popover>

        <Hidden lgUp>
          <Backdrop open={open} onClick={handleClose} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
