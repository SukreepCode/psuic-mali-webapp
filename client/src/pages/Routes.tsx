import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from '../components/PrivateRoute';

import Home from './Home'
import Login from './Login';
import Evaluation from './Evaluation';
import Logout from './Logout';
import ValidatingToken from '../components/ValidatingToken';
import Page404 from './Page404';

export const LOGIN_PATH = '/login';
export const VALIDATING_TOKEN_PATH = '/validating-token';

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>

        <PrivateRoute exact path="/" component={Home} />
        <Route exact path={LOGIN_PATH} >
          <Login loginSuccessRoute="/evaluation" />
        </Route>

        <Route path="/logout" component={Logout} />

        <PrivateRoute exact path="/evaluation" component={Evaluation} />

        <Route path={VALIDATING_TOKEN_PATH} component={ValidatingToken} />

        {/* Catch all route */}
        <Route component={Page404} />
      </Switch>

    </Router>
  );
}
export default Routes;