import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LowerCase} from './Greet';
import {Leet} from './Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <LowerCase name={"SEIL"}/>
          <Leet leet={"You are so leet"} />
      </header>
    </div>
  );
}

export default App;
