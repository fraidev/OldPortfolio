import React, { Component } from 'react';
import Home from './pages/home/home';
import Header from './components/header/header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink 
  },
});

class App extends React.Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
        <Header/>
        <Home/>
    </MuiThemeProvider>
    );
  }
}

export default App;