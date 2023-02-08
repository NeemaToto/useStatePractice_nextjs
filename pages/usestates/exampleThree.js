import { useState } from 'react';

//In this example we have 2 buttons and depending on which of the two you click, it will
//change the color of the button and text
export default function exampleThree(){
    //Default state for this color is grey
    const [color, changeColor] = useState("gray");

    return(
        <div>
            {/* () means dont execute until user clicks */}
            <button onClick={()=> changeColor("red")}>Change to red</button>
            <button onClick={()=> changeColor("blue")}>Change to blue</button>

            {/* The default color will be gray. But because of changeColor, when we press on red or blue button, useState will */}
            {/* change colors depending on what button we pressed */}
            <h1 style={{ color }}>Change the text color</h1>
            {/* in css it would be background-color but with Inline Styling, you get rid of the dash and
            type it camel case. The capitalized letter is the letter that follows the dash */}
            <div style={{backgroundColor: `${color}`, lineHeight: 10, padding: 20}}>Box</div>
        </div>
    )
}