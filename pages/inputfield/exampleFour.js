import { useState } from 'react'
//We're going to set up a use state for an age and a name. Then we're gonna do some checking in order to display or hide information
export default function exampleFour() {
    const [age, setAge] = useState();
    const [name, setName] = useState('');

    const placeholderTextName = 'Please type your name';
    const placeholderTextAge = 'Please type your age';

    return (
        <>
            {/* This input field is grabbing the value of name and onChange its going to grab the value
        based on whatever is typed. Then the arrow function is passing the value to setName. We're grabbing
        that targeted value that the user typed in, and it'll be stored in useState, which we can call the "name" 
        variable. */}
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type='text'
                placeholder={placeholderTextName}
            />
            {
                //What we're doing here is if the length of name is greater than 3, we will display
                //<p> which greets the user, and displays an input field that asks the user for their name
                name.length > 3 ? <p>Hello, {name}. Please enter your age: 
                    <input
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        //This type number will only allow numbers in the input field
                        type="number"
                        placeholder={placeholderTextAge}
                    />
                </p> : <></>
            }
            {
                age > 20 ? <p>You may enter</p> : <></>
            }
        </>
    )
}