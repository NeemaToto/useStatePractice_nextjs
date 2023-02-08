import { useState } from 'react'

//In this example we will change the colour depending on number. If number is greater than 1, make div visible. if equal to 2, make orange
export default function exampleFive() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray")
    //Handle is like another function. Only when you actually click on the button 
    //then we're gonna set a color change on the text and background color.
    //Also remember this is another way to write a function
    const HandleChange = () => {
        if (number == 2) {
            setColor("orange")
        }
    }
    return (
        <div>
            {/* Adding an extra curly brace brackets after the arrow because this onClick is
            going to have extra functionalities. If there was only one, then the curly brackets
            would not be necessary.  */}
            <button onClick={() => {
                //This runs so fast it lags the number behind. Thats why we have to click on it three times for orange to appear.
                //We need to set a timer so it fixes.
                setNumber(number + 1)
                //This HandleChange makes it callback to the function above to make it check the if statement.
                HandleChange()
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