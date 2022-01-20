import React, { useState } from 'react'

export const useCounter = (initialState = 10) => {
    
    const [state, setState] = useState(initialState);

    const increment = () => {
        setState(state + 1)
    }
    const decrecent = () => {
        setState(state - 1)
    }
    const reset = () => {
        setState(initialState)
    }

    return { 
        counter: state,
        increment,
        decrecent,
        reset
    }
}
