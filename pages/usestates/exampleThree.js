import { useState } from 'react';

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
            <div style={{backgroundColor: `${color}`, inlineHeight: 10, padding: 20}}>Box</div>
        </div>
    )
}