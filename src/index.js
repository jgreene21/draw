import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CanvasDraw from "react-canvas-draw";
import { render } from 'react-dom';
import classNames from './index.css';



ReactDOM.render(<div><App/><CanvasDraw style={{ height:'700px', width: '1500px', border: '1px solid black'}} /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

