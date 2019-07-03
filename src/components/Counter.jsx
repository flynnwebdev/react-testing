import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const incCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incCount}>Increment</button>
        </div>
    )
}
