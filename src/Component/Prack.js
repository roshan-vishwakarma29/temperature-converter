import React, { useState } from 'react'
import './Prack.css'

const Prack = () => {
    const [celsius, setcelsius] = useState('')
    const [fahrenheit, setfahrenheit] = useState('')

    const [display, setDisplay] = useState('')

    const eventhandler = () => {
        if (fahrenheit) {
            let converted = (fahrenheit * 9 / 5) + 32
            console.log(converted, "Fahrenheit")
            setDisplay(converted)
        }
        else {
            let celsiusconverted = (celsius - 32) * 5 / 9
            console.log(celsiusconverted + "celsius")
            setDisplay(celsiusconverted)
        }
    }

    return (
        <>
            <div className='parent'>
                <div className='main_container'>
                    <div className='Celsius_div'>
                        <label>Celsius:</label>
                        <input type="number" id='celsius' onChange={(e) => setcelsius(e.target.value)} />
                    </div>
                    <div className='Fahrenheit_div'>
                        <label>fahrenheit:</label>
                        <input type="number" id='Fahrenheit' onClick={(e) => setfahrenheit(e.target.value)} />
                    </div>
                    <div className='button'>
                        <button type="button" className="btn btn-success" onClick={eventhandler}> Change</button>
                    </div>
                </div>
            </div>
            <h2>{display}</h2>
        </>
    )
}

export default Prack
