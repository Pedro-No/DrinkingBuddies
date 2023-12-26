import React from 'react';

import './App.css'

import Clock from './components/clock'
import Buddies from './components/buddies'

function App() {

  return (
    <div className="app">
      <Clock/>
      <h1 className='title_banner'>🍻 Drinking Buddies 🍻</h1>
      <Buddies/>
    </div>
  );
}

export default App
