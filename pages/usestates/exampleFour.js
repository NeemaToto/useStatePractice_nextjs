import { useState } from 'react';

//In this example make a div that is only visible once number is greater than one.
export default function exampleFour() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            {number}
            <button onClick={() => {
                setNumber(number + 1)
            }}>Add number
            </button>

            {/* What this means is that if number is above 1, then the div after && will show. */}
            {/* Because the code below is not between a tag, it will only render when you put some time of logic
            if number is greater than 1, then display div */}
            {
                number > 1 && <div style={{
                    backgroundColor: "red",
                    lineHeight: 10,
                    padding: 20
                }}>
                    Box
                </div>
            }
        </div>
    )
}