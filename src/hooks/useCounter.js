import React, { useState } from 'react'

export const useCounter = (initialState = 10) => {
    
    const [state, setState] = useState(initialState);

    const increment = (factor) => {
        setState(state + factor)
    }
    const decrecent = (factor) => {
        setState(state - factor)
    }
    const reset = () => {
        setState(initialState)
    }

    return { 
        state,
        increment,
        decrecent,
        reset
    }
}
