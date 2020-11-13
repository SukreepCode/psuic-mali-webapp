import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home'
import Login from './Login';

export default function (){
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
    
        </Switch>
      </Router>
    );
  }
  