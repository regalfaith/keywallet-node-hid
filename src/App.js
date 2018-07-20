import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import isElectron from 'is-electron';

class App extends Component {

  componentDidMount() {
    console.log('componentDidMount');
    //var devices = HID.devices();
    /*
    if (isElectron()) {
			console.log(window.ipcRenderer);
			window.ipcRenderer.on('pong', (event, arg) => {
				this.setState({ipc: true})
			});
			window.ipcRenderer.send('ping');
    }
    */
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">
          Hello Electron!
        </p>
      </div>
    );
  }
}

export default App;
