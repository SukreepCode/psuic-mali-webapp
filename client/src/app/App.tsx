import React from 'react';
import './App.css';

import { ThemeProvider } from '@material-ui/styles';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '../pages/Routes';
import theme from '../theme';

// for service
import { ClientContextProvider } from 'react-fetching-library';
import { Client } from '../services/config';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ClientContextProvider client={Client}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ClientContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
