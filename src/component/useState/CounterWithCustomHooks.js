import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHooks = () => {
    
    const {state, increment, decrecent, reset } = useCounter(1110);
    return (
        <>
           <h1>Counter {state} </h1> 
           <br></br>
           <button
            className='btn'
            onClick={ () => increment(2) }
           >+ 1</button>

           <button
            className='btn'
            onClick={ reset }
           > reset</button>

            <button
            className='btn'
            onClick={ () => decrecent(2) }
           >- 1</button>
           
        </>
    )
}
