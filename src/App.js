import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Pictionary  
      </header>
      <hr /> 
      <canvas id='myCanvas'></canvas>
    <Timer/>
    </div>
  ); 
}

export default App;
