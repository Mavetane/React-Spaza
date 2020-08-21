import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './containers/SignUp';
import Shopping from './containers/Shopping';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        React Spaza
      </header>
      <Shopping />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
