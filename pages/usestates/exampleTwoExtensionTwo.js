import { useState } from 'react';

//In this example we will make buttons that increment more than once.
export default function exampleTwoextensionOne() {
    const [number, setNumber] = useState(0);

    //If this is true, then number will increment by 1. if it is false, it will decrement.
    //It doesn't have enough time to render all the increments or decrements at once so
    //we need to modify this function (add number => number+1) to check for what its current number state is at 
    //so it can process the multiple increments/decrements at once.
    function handleClick(change) {
        if (change) {
            setNumber(number => number + 1);
        } else {
            setNumber(number => number - 1);
        }
    }

    return (
        <div>
            {/* HandleClick is going to be the function used to increment
            boolean statement means if its true, then it will increment.
            if its not, then nothing will happen.
            If we do not put the brackets with the arrow function, it will crash the program*/}
            <button onClick={() => handleClick(true)}>Increment</button>
            {/* Adding squigly bracket because we are using multiple functions */}
            <button onClick={() => {
                handleClick(true)
                handleClick(true)
                handleClick(true)
            }}>Increment by 3</button>
            <button onClick={() => handleClick(false)}>Decrement</button>
            <button onClick={() => {
                handleClick(false)
                handleClick(false)
                handleClick(false)
            }}>Decrement by 3</button>
            {number}
        </div>

    )
}