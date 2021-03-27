import React from 'react';
import CounterApp from './CounterApp';
import ReactDOM from 'react-dom';
const divRoot = document.querySelector("#root");
ReactDOM.render(<CounterApp value={123}/>,divRoot);