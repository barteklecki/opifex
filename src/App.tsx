import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Cockpit from './components/Cockpit/Cockpit';
import Footer from './components/Footer/Footer';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6ad6ff',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Cockpit />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
