import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import HomePage from "./components/HomePage";
import HelloPage from "./components/HelloPage";
import HelloColorPage from "./components/HelloColorPage";


function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/home"/>
        <HelloPage path="/:id"/>
        <HelloColorPage path="/:id/:textColor/:bgColor"/>
      </Router>
      
    </div>
  );
}

export default App;
