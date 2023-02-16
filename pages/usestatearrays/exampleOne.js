import { useState, useEffect } from 'react'

//In this example we just add the word "adding" repeatidely to an array every time we press the button
export default function exampleOne(){
    //since this is an array, we need to put an empty array in useState()
    const [item, setItem] = useState([])

    return(
        <>
            <button onClick={() => setItem(["adding"])}>Add to array</button>
            {item}
        </>
    )
}