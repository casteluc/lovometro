import React from 'react'
import Heart from '../../assets/heart.png'

function Lovometro() {
    return (
        <main id="lovometro">
            <div>
                <div>
                    <h1>Lovometro</h1>
                    <h2>Descubra o quanto você e a pessoa amada se combinam</h2>
                </div>
                <form>
                    <input type="text" name="fname"/>
                    <input type="text" name="sname"/>
                    <input type="submit" value="calcular"/>
                </form>
            </div>
            <div>
                <img src={Heart} alt="Heart"/>
            </div>
        </main>
    )
}

export default Lovometro
