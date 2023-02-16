import { useState, useEffect } from 'react'
//In this example we're going to be updating what we're setting so we can add to the array
//instead of resetting it.
export default function exampleThree(){
    const [item, setItem] = useState([]);

    console.log(item)

    useEffect(() =>{
        console.log(item);
    },{item})

    return(
        <>
            <button onClick={() => {
                //the triple dots means just add on to whatever items we have in item
                setItem(["adding ", ...item])
                }}>Adding</button>

                {item}
        </>
    )
}