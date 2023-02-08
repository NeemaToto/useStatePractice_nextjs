/*
This example teached you how to simply import useState into your page.
*/

import { useState } from 'react';

export default function exampleOne(){
    //parameters inside "useState() is just what value you want to initially set it as"
    //If you want to see what useState is set to, always use (in this case), {number}
    const [number, setNumber] = useState(0);

    return(
        <div>
            {number}
        </div>
    )
}