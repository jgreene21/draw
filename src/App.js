import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Pictionary  
      </header>
      <hr />
    <h3>Use the interactive canvas to draw your picture. 
      <br/>But be quick. Your friends only have one minute 
      <br/>to guess what you're drawing!</h3>
    <Timer/>
    </div>
  ); 
}

export default App;
