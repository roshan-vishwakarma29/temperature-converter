import React, { useState } from 'react'
import './Prack.css'

const Prack = () => {
    const [celsius, setcelsius] = useState('')
    const [display, setDisplay] = useState('')

    const eventhandler = () => {
        let celsiusconverted = (celsius * (9 / 5)) + 32
        console.log(celsiusconverted + "celsius")
        setDisplay(celsiusconverted)
    }

    return (
        <>
            <div className='parent'>
                <div className='main_container'>
                    <div className='Celsius_div'>
                        <label>Celsius:</label>&nbsp;
                        <input type="number" id='celsius' onChange={(e) => setcelsius(e.target.value)} />
                    </div>
                    <div className='button'>
                        <button type="button" className="btn btn-success" onClick={eventhandler}> Change</button>
                    </div>
                </div>
            </div>
            {
                display !== "" && <h2 style={{ textAlign: "center" }}>Coverted Value: {display}F</h2>
            }
            {/* x */}
        </>
    )
}

export default Prack
