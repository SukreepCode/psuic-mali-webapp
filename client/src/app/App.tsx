import React from 'react';
import './App.css';
import validate from 'validate.js';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import validators from '../common/validators';
import Routes from '../pages/Router';
import theme from '../theme';

const browserHistory = createBrowserHistory();

validate.validators = {
  ...validate.validators,
  ...validators
};

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes /> 
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
