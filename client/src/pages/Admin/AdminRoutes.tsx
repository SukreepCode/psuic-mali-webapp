import React from 'react';
import { Button, Divider } from '@material-ui/core';
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import { MainLayout } from '../../layouts';

import NotFound from '../Error/NotFound';

import DataTable from './DataTable';

import { Home } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

/**
 * This componet will handle all path in admin
 */

const AdminRoutes = () => {
  let { path, url } = useRouteMatch();

  const navbarItems = [
    {
      title: 'Home',
      href: `${path}`,
      icon: <Home />
    },
    {
      title: 'Criteria',
      href: `${path}/data/criteria`,
      icon: <DashboardIcon />
    },
    {
      title: 'Users',
      href: `${path}/data/user`,
      icon: <PeopleIcon />
    },
    {
      title: 'Account',
      href: `${path}/account`,
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: `${path}/settings`,
      icon: <SettingsIcon />
    }
  ];

  return (
    <MainLayout
      navbarItems={navbarItems}
    >

      <Switch>
        <Route path={`${path}/data/:name`}>
          <DataTable />
        </Route>

        <Route component={NotFound} />
      </Switch>

    </MainLayout>
  );
}

export default AdminRoutes;
