import React from 'react'

import Lovometro from './pages/Lovometro'
import Heart from './assets/heart.png'

import './App.css';

function App() {
  return (
    <div className="app">
        <Lovometro/>
        {/* <img src={Heart} alt="Heart" className="heart"/>
        <img src={Heart} alt="Heart" className="heart"/>
        <img src={Heart} alt="Heart" className="heart"/>
        <img src={Heart} alt="Heart" className="heart"/> */}
    </div>
  );
}

export default App;
