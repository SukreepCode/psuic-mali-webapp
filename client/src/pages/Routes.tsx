import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home'
import Login from './Login';
import Evaluation from './Evaluation';

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" >
          <Login loginSuccessRoute="/evaluation" />
        </Route>
        <Route exact path="/evaluation" component={Evaluation} />

      </Switch>
    </Router>
  );
}
export default Routes;