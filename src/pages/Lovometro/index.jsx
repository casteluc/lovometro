import React, { useEffect, useState } from 'react'
import Heart from '../../assets/heart.png'
import { get_percentage } from '../../services/loveApi'

import './style.css'

function Lovometro() {
    const [fname, setFname] = useState("")
    const [sname, setSname] = useState("")
    const [percentage, setPercentage] = useState("")
    const [display, setDisplay] = useState("0")

    useEffect(() => {
        let goal = parseInt(percentage)
        let current = parseInt(display)

        if  (goal !== current && percentage !== "") {
            setTimeout(() => {
                if (current < goal) {
                    setDisplay(current + 1)
                } else {
                    setDisplay(current - 1)
                }
            }, 30)
        }
    }, [percentage, display])
    const handleSubmit = (e) => {
        e.preventDefault()
        get_percentage(fname, sname, setPercentage)
    }

    return (
        <main id="lovometro">
            <div>
                <div className="title">
                    <h1>Lovometro</h1>
                    <h2>Descubra o quanto você e a pessoa amada se combinam!</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Seu nome" onChange={e => setFname(e.target.value)}/>
                    <input type="text" placeholder="Nome da pessoa amada" onChange={e => setSname(e.target.value)}/>
                    <input type="submit" value="calcular"/>
                </form>
            </div>
            <div>
                <h3 className="result">{display}{display && "%"}</h3>
                <img src={Heart} alt="Heart"/>
            </div>
        </main>
    )
}

export default Lovometro
