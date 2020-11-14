import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from '../components/PrivateRoute';

import Home from './Home'
import Login from './Login';
import Evaluation from './Evaluation';
import Logout from './Logout';
import ValidatingToken from '../components/ValidatingToken';

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
        <Route path={VALIDATING_TOKEN_PATH} component={ValidatingToken} />
        <Route path="/logout" component={Logout} />

        <PrivateRoute exact path="/evaluation" component={Evaluation} />


      </Switch>
    </Router>
  );
}
export default Routes;