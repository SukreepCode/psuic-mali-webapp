import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles((theme: any) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  main: {
    height: '100%'
  },
  content: {
    marginTop: 50,
    marginLeft: 50
  }
}));


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

const Main = (props: any) => {
  const { children } = props;

  const classes = useStyles();
  const theme: any = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        pages={pages}
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.main}>
        <div className={classes.content}> {children}</div>

        <Footer />
      </main>
    </div>
  );
};

export default Main;
