import React from 'react'
import Heart from '../../assets/heart.png'

import './style.css'

function Lovometro() {
    return (
        <main id="lovometro">
            <div>
                <div className="title">
                    <h1>Lovometro</h1>
                    <h2>Descubra o quanto você e a pessoa amada se combinam!</h2>
                </div>
                <form>
                    <input type="text" name="fname" placeholder="Seu nome"/>
                    <input type="text" name="sname" placeholder="Nome da pessoa amada"/>
                    <input type="submit" value="calcular"/>
                </form>
            </div>
            <div>
                <h3 className="result">43%</h3>
                <img src={Heart} alt="Heart"/>
            </div>
        </main>
    )
}

export default Lovometro
