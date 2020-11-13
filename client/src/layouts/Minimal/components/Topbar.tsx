import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './logo-blue.png';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    // boxShadow: 'none'
  },
  logo:{
    height: 35
  }
}));

const Topbar = (props: any) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="white"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/">
          <img className={classes.logo} src={Logo} />{' '}
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
