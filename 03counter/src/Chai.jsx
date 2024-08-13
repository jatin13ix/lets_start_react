import { useState } from "react";

function Chai() {
    let[counter, setCounter] = useState(15)
    
    const update = () => {
        // console.log("clicked",counter);
        counter += 1;
        setCounter(counter)
    }
    
    const remove = () => {
        counter -= 1;
        setCounter(counter)
    }
    return (
        <>
        <h1>Chai with counter</h1>
            <h2>Counter Value:{counter }</h2>
            <button
            onClick={update}>Add Value</button>
            <button
            onClick={remove}>Remove Value</button>
            
            
        </>
    )
}
export default Chai