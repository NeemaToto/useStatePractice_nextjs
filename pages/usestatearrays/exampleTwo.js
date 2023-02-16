import { useState, useEffect } from 'react'
//in this example we're going to create an input field that automatically updates the array
//as the user types in the field.
export default function exampleTwo(){
    const [item, setItem] = useState([]);
    console.log(item)

    const placeholderText="Your first name"

    //This useEffect function makes it so the console log does not double render
    useEffect(() => {
        console.log(item)
    }, {item})

    return(
        <>
            <input
                value={item}
                onChange={e => setItem([e.target.value])}
                placeholder={placeholderText}
            />
            {item}
        </>
    )
}