import { useState } from 'react'

export default function exampleSix() {
    const [version, setVersion] = useState()

    function handleReset() {
        setVersion(version + 1);
    }
    return (
        <>
            <button onClick={handleReset}>Reset</button>
            <Form key={version}/>
        </>
        
    )
}
//This is a component
function Form() {
    const [name, setName] = useState('');

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p>Hello, {name}</p>
        </>

    )
}