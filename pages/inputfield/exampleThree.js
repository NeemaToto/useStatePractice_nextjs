import { useState } from 'react';

//This example we're gonna use a ternary operator which will check to see the length of whatever the user inputs,
//and depending on the length of that, it will display something that is either on the true or false side.
export default function exampleThree() {
    const [name, setName] = useState('')
    const placeholderText = "Your first name"

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type='text'
                placeholder={placeholderText}
            />
            {
                //All this is saying is that is the length of name is greater than 2, display "hello "name"
                //and if it's not, display an empty tag
                name.length > 2 ? <p>Hello {name}</p> : <></>
            }
        </>
    )
}