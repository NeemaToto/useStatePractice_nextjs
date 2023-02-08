import { useState } from 'react'


//In this example we display a value that we can increment by 1 or decrement by 1 using useState and buttons
export default function exampleTwo(){
    const [number, setNumber] = useState(0);

    return(
        <div>
            {number}
            {/* We use "onClick" to add interaction with buttons. */}
            {/* () means only do the action if we click on it. We use arrow function to say
            when we click on button, setNumber(to value of number + or - 1.)
            setNumber comes from the useState above. */}
            <button onClick={()=> setNumber(number+1)}>Increment</button>
            <button onClick={()=> setNumber(number-1)}>Decrement</button>
        </div>
    )
}