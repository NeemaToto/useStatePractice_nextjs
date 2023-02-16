import { useState } from 'react';

//In this example, we take what the user inputs in the input tag and show it back to the user
export default function exampleOne() {
    // When you go to local host, you can see the default value that is shown is
    // "name here"
    const [name, setName] = useState("Name here");

    return (
        <>
            {/* This input field is looking for whatever change is happening.
        onChange is going to be empty at first, but as user starts typing, its going to automatically 
        give setName whatever the user inputs. */}
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p>Hello, {name}</p>
        </>
    )
}