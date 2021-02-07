import React from 'react'

import Lovometro from './pages/Lovometro'
import Heart from './assets/heart.png'

import './App.css';

function App() {
  return (
    <div className="app">
        <Lovometro/>
        <img src={Heart} alt="Heart" className="heart1"/>
        <img src={Heart} alt="Heart" className="heart2"/>
        <img src={Heart} alt="Heart" className="heart3"/>
        <img src={Heart} alt="Heart" className="heart4"/>
    </div>
  );
}

export default App;
