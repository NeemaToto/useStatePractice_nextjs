import { useState, useEffect } from 'react'

//In this example we will take exampleFive and add a couple logic handling to fix the previous issue with the number not changing colour at 2, but three.
export default function exampleSix() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray")
    const [trigger, setTrigger] = useState(false)
    //Handle is like another function. Only when you actually click on the button 
    //then we're gonna set a color change on the text and background color.
    //Also remember ()=>{} is another way to write a function
    const HandleChange = () => {
        if (number == 1) {
            setColor("orange")
        }
    }
    
    useEffect(()=>{
        let interval;
        
        //This is saying if trigger is true, proceed
        if(trigger){
            interval = setInterval(()=>{
                HandleChange()
                setTrigger(false)
            }, 3000); //This means in 3 seconds, do something
        }
        return()=> clearInterval(interval) //We do this so it doesn't get confused and keep running
    }, [trigger])

    return (
        <div>
            {/* Adding an extra curly brace brackets after the arrow because this onClick is
            going to have extra functionalities. If there was only one, then the curly brackets
            would not be necessary.  */}
            <button onClick={() => {
                //This runs so fast it lags the number behind. Thats why we have to click on it three times for orange to appear.
                //We need to set a timer so it fixes.
                setNumber(number + 1)
                //We are replacing handleChange with setTrigger and giving it a true parameter so it goes up to the if statement above and runs trigger.
                setTrigger(true)
            }}>
                Add number
            </button>
            <h1 style={{ color }}>Change the text color</h1>
            {
                //color is in quotes because we need it to be in quotes since useState at the top is also in quotes
                number > 1 && <div style={{ backgroundColor: `${color}`, lineHeight: 10, padding: 20 }}>
                    Box
                </div>
            }
            {number}
        </div>
    )
}