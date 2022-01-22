import React, { useMemo, useState } from 'react';
import { bigProccess } from '../../helpers/bigProccess';
import { useCounter } from '../../hooks/useCounter';


import '../useEffect/effect.css'

export const Memo = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoBigProccess = useMemo(() => bigProccess(counter), [counter]);

    return (
        <div>
            <h1>useMemo</h1>
            <h3>Counter { counter }</h3>
            <hr />

            <p> {memoBigProccess} </p>
            
            <button 
                className='btn btn-outline-primary'
                onClick={ increment }
            > 
                Aumentar 
            </button>
            <button
                className='btn btn-primary ms-1'
                onClick={ () => {
                    setShow(!show)
                } }
            > 
                { JSON.stringify(show) }
            </button>
        </div>
    )
}
