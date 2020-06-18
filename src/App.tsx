import React from 'react';

import Cockpit from './components/Cockpit/Cockpit';
import Footer from './components/Footer/Footer';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

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
        <Cockpit />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
