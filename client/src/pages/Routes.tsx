import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from '../components/PrivateRoute';

import Home from './Home'
import Login from './Login';
import Evaluation from './Evaluation';
import Logout from './Logout';
import ValidatingToken from '../components/ValidatingToken';
import NotFound from './NotFound';
import PermissionDenied from './PermissionDenied';
import Unauthorized from './Unauthorized';
import { Unarchive } from '@material-ui/icons';

export const LOGIN_PATH = '/login';
export const VALIDATING_TOKEN_PATH = '/validating-token';
export const PERMISSION_DENIED = '/permission-denied';
export const UNAUTHORIZED = '/unauthorized';

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>

        <PrivateRoute exact path="/" component={Home} />
        <Route exact path={LOGIN_PATH} >
          <Login loginSuccessRoute="/evaluation" />
        </Route>
        <Route path={PERMISSION_DENIED} component={PermissionDenied} />
        <Route path={UNAUTHORIZED} component={Unauthorized} />
        <Route path="/logout" component={Logout} />

        <PrivateRoute exact path="/evaluation" component={Evaluation} />
        <Route path={VALIDATING_TOKEN_PATH} component={ValidatingToken} />

        {/* Catch all route */}
        <Route component={NotFound} />
      </Switch>

    </Router>
  );
}
export default Routes;