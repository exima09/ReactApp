import * as React from 'react';
import './App.css';

import logo from './logo.svg';

const test = [1, 2,
  3, 4, 5,
  6, 7, 8
];

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {console.log(test
        )}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
