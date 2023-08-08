import React, { useState } from 'react'

const Temprature = () => {
    const [celsius, setcelsius] = useState('');
    const [fahrenheit, setfahrenheit] = useState('');
    const handleconvert = () =>{
        console.log(celsius,fahrenheit)
        if(fahrenheit){
            let converted = (fahrenheit * 9/5) + 32
            console.log(converted,"Fahrenheit")
        }
        else{
            let celsiusconverted = (celsius - 32) * 5/9
            console.log("Celsius: ", celsiusconverted)
        }
    }

    return (
        <>
            <div>
                <input type="number" id='celsius' onChange={(e) => setcelsius(e.target.value)} />
                <input type="number" id='fahrenheit' onChange={(e) => setfahrenheit(e.target.value)} />
                <button type='submit' onClick={handleconvert}>convert</button>
                <div></div>

            </div>
        </>
    )
}

export default Temprature