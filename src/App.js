import React from 'react'

import Lovometro from './pages/Lovometro'
import Heart from './assets/heart.png'

import './App.css';

function App() {
  return (
    <div className="app">
        <Lovometro/>
        <img src={Heart} alt="Heart" className="background-heart heart1"/>
        <img src={Heart} alt="Heart" className="background-heart heart2"/>
        <img src={Heart} alt="Heart" className="background-heart heart3"/>
        <img src={Heart} alt="Heart" className="background-heart heart4"/>
    </div>
  );
}

export default App;
