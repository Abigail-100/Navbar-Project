import React from 'react';
import Header from './components/Header';
import Arvid from './components/Arvid';
import State from './components/State';
import Change from './components/Change'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Arvid/>
      <State/>
      <Change/>

    </div>
  );
}

export default App;
