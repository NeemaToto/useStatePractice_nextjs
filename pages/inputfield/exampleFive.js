import { useState } from 'react'

//In this example we will create an input field and then use a button to reset the input to a default(empty state)
export default function exampleFive() {
    const [name, setName] = useState('')

    //This function resets the value of setName to '' whenever it is ran
    function handleReset() {
        setName('');
    }

    return (
        <>
            {/* pressing the button runs the handleReset function */}
            <button onClick={handleReset}>Reset</button>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p>{name}</p>
        </>
    )
}