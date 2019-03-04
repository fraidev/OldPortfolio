import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './home.css';
import logo from '../../assets/img/logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div class="container">
          <div class="fixed">
          <Typography variant="h1" color="primary" align="left">
            Felipe Cardozo, <br />
            FullStack Developer
            </Typography>
          <Typography variant="h5" color="primary" align="left">
            .Net / Asp Net Core / Angular / Ionic / React ¯\_(ツ)_/¯
            </Typography>
            </div>
          <div class="flex-item">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;