import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { Topbar, Footer } from './components';

import { useSelector, useDispatch } from "react-redux";
import * as Auth from '../../services/auth';


const useStyles = makeStyles((theme: any) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
 
  content: {
    height: '100%'
  }
}));

const Main = (props: any) => {
  const { children } = props;
  const dispatch = useDispatch();
  const auth: Auth.AuthType = useSelector(Auth.selector);
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <Topbar color="white" isAuthentication={auth.isAuthenticated}/>
    
      <main className={classes.content}>
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Main;
