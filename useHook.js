import {useState, useRef, useEffect} from 'react'

function useHook() {
    const STARTING_TIME = 5
    const [ time, setTime ] = useState(5)
    const [ text, setText ] = useState('')
    const [ start, setStart ] = useState(false)
    const [ count, setCount ] = useState(0)

    const usingRef = useRef(null)

    function handleStartGame() {
        console.log('Timer');
        setStart(true)
        setCount(0)
        setText('')
        usingRef.current.disabled = false
        usingRef.current.focus()
    }
    
    // Handle textarea change
    function handleChange(e) {
        setText(e.target.value);
    }

    // Counting words
    function handleStart(text) { 
        const words = text.trim().split(' ');
        const filteredWord = words.filter(word => word != '')
        const wordLength = filteredWord.length;
        return  wordLength
    }

    // Use effect
    useEffect(() => {
        if (start && time > 0) {
            setTimeout(() => setTime(prev => { return prev - 1 }), 1000)
        } else if (time === 0) {
            setStart(false)
            setCount(handleStart(text))
            setTime(5)
        } 
    }, [time, start, count])

    
    return [text, time, start, count, handleStartGame, handleChange, usingRef]
}

export default useHook