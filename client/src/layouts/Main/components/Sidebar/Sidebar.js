import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Box, IconButton, Hidden } from '@material-ui/core';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  logo:{
    height: 35
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/admin',
      icon: <HomeIcon />
    },
    {
      title: 'Criteria',
      href: '/admin/data/criteria',
      icon: <DashboardIcon />
    },
    {
      title: 'Users',
      href: '/admin/data/user',
      icon: <PeopleIcon />
    },
    // {
    //   title: 'Products',
    //   href: '/products',
    //   icon: <ShoppingBasketIcon />
    // },
    // {
    //   title: 'Authentication',
    //   href: '/sign-in',
    //   icon: <LockOpenIcon />
    // },
    // {
    //   title: 'Typography',
    //   href: '/typography',
    //   icon: <TextFieldsIcon />
    // },
    // {
    //   title: 'Icons',
    //   href: '/icons',
    //   icon: <ImageIcon />
    // },
    {
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        {/* <Profile /> */}
        <Hidden lgUp>
          <Box display="flex" >
            <Box component="span" mr={2}>
              <IconButton
                color="inherit"
                onClick={onClose}
              >
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Box component="span" mt={1}>
              <img
                className={classes.logo}
                alt="Logo"
                src="/images/logo-blue.png" 
              />
            </Box>
          </Box>
          <Divider className={classes.divider} />
        </Hidden>
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        {/* <UpgradePlan /> */}
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
