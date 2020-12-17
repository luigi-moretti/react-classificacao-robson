import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import Routes from './Routes';
import Menu from './components/Menu';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e4753d',
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Menu />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
