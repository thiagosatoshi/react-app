import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './Components/Checkbox/Checkbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Checkbox label='Click me' isChecked={true} onChange={()=>{console.log('Changed')}} />

        <Checkbox isChecked={false}/>

        <Checkbox disabled={true} />
      </div>
    );
  }
}

export default App;
