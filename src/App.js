import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome";
import WelcomeObserver from "./WelcomeObserver";
import ShareprocProcesses from "./ShareprocProcesses";
import { inject, observer } from 'mobx-react';
import {Router, Route} from "react-router";


class App extends Component {
  render() {
    const { location, push, goBack } = this.props.routing;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <span>Current pathname: {location.pathname}</span>
          <button onClick={() => push('/processes')}>Processes</button>
          <button onClick={() => goBack()}>Go Back</button>
        </div>
          <Welcome/>
          <WelcomeObserver/>
          {/*<ShareprocProcesses/>*/}
        <Route path="/processes" component={ShareprocProcesses}/>
      </div>
    );
  }
}

// export default App;
export default inject('routing')(observer(App))
