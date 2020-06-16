import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Cockpit from './components/Cockpit/Cockpit';

import AppBar from '@material-ui/core/AppBar';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          <AppBar position="fixed">
            Opifex
          </AppBar>
        </div>
        <Cockpit />
      </ThemeProvider>
    </div>
  );
}

export default App;
