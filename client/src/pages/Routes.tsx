import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from './Auth/PrivateRoute';

import Home from './Home'
import Login from './Auth/Login';
import Logout from './Auth/Logout';

import ValidatingToken from './Auth/ValidatingToken';
import NotFound from './NotFound';
import PermissionDenied from './PermissionDenied';
import Unauthorized from './Unauthorized';

import Admin from './Admin/Admin';
import Evaluation from './Evaluation/Evaluation';

export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const VALIDATING_TOKEN_PATH = '/validating-token';
export const PERMISSION_DENIED = '/permission-denied';
export const UNAUTHORIZED = '/unauthorized';

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>

        <PrivateRoute unauthorizedPath={LOGIN_PATH} exact path="/" component={Home} />
        <Route exact path={LOGIN_PATH} >
          <Login loginSuccessRoute="/evaluation" />
        </Route>
        <Route path={PERMISSION_DENIED} component={PermissionDenied} />
        <Route path={UNAUTHORIZED} component={Unauthorized} />
        <Route path={LOGOUT_PATH} component={Logout} />
        
        <Route path={VALIDATING_TOKEN_PATH} component={ValidatingToken} />

        <PrivateRoute path={`/admin`} component={Admin} />
        <PrivateRoute roles={['teacher']} path={`/evaluation`} component={Evaluation} />

        {/* Catch all route */}
        <Route component={NotFound} />
      </Switch>

    </Router>
  );
}
export default Routes;