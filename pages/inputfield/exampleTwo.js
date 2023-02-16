import { useState } from 'react';

//In this example, we're going to have an empty usestate and we'll enter in a placeholder
//so it's easy to type something in the input field 
export default function exampleTwo() {
    //keep useState() empty because if you put something in there, it will be there on the page.
    //You can put a placeholder instead if you want to put a message in the placeholder.
    const [name, setName] = useState("");

    return (
        <>
            <input
                value={name}
                //e.target.value retrives whatever the user is inputting in the field and updates setName
                onChange={e => setName(e.target.value)}
                placeholder="Your first name"
            />
            <p>Hello, {name}</p>
        </>
    )
}