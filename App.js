import React, { useEffect, useRef, useState } from 'react'
import useHook from './useHook'

function App() {
    const [text, time, start, count, handleStartGame, handleChange, usingRef] = useHook()
    
    return (
        <>
            <h1>Type Speeding</h1>
            <textarea ref={usingRef} onChange={handleChange} value={text} disabled={!start} rows='4'/>
            <h4>Time remaining {time}</h4>
            <button onClick={handleStartGame} disabled={start}>Start</button>
            <h1>Word Count: {count}</h1>
        </>
    )
}

export default App