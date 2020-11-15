import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Box, IconButton, Hidden, Theme } from '@material-ui/core';


import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { SidebarNav } from './components';

const useStyles = makeStyles((theme:any) => ({
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

const Sidebar: React.FC<any> = (props:any) => {
  const { pages, open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

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
  
      </div>
    </Drawer>
  );
};

// // Sidebar.propTypes = {
// //   className: PropTypes.string,
// //   onClose: PropTypes.func,
// //   open: PropTypes.bool.isRequired,
// //   variant: PropTypes.string.isRequired
// // };

export default Sidebar;
