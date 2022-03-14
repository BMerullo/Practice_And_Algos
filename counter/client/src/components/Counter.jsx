import React, { useState } from 'react';



const Counter = (props) => {

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const sub = () => {
        setCount(count -1)
    }



    return (
        <>
            <h1>{count}</h1>
            <button onClick={sub}>Subtract</button>
            <button onClick={add}>Add</button>
        </>
    )
}

export default Counter;