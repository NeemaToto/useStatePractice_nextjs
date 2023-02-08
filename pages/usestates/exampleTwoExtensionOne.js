import { useState } from 'react';

//in this example extension we will increment/decrement the number using functions
//instead of directly putting in number+1 inside of the onClick button.
export default function exampleTwoextensionOne(){
    const [number, setNumber]= useState(0);

    //If this is true, then number will increment by 1. if it is false, it will decrement.
    function handleClick(change){
        if(change){
            setNumber(number+1);
        }else{
            setNumber(number-1);
        }
    }

    return(
        <div>
            {/* HandleClick is going to be the function used to increment
            boolean statement means if its true, then it will increment.
            if its not, then nothing will happen.
            If we do not put the brackets with the arrow function, it will crash the program*/}
            <button onClick={()=> handleClick(true)}>Increment</button>
            <button onClick={()=> handleClick(false)}>Decrement</button>
        {number}
        </div>
        
    )
}