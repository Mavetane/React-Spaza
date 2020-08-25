import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loadRoutes } from './routes/index';

function App () {
  return (
    <div className="App">
      {loadRoutes()}
    </div>
  );
}

export default App;
