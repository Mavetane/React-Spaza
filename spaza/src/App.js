import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loadRoutes } from './routes/index';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        React Spaza
      </header>
      {loadRoutes()}
    </div>
  );
}

export default App;
