import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css'

export const Layout = () => {
    const {counter, increment  } = useCounter(1);

    const { data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { quote } = !!data && data[0];  

    const tag = useRef();

    useLayoutEffect(() => {
        console.log(tag.current.getBoundingClientRect().width);
    }, [quote])

     



    return (
        <div>
            <h1>Layout</h1>
            <hr />

            <div>
                <blockquote
                     
                    className='blockquote text-right'>
                    <p className='mb-1' ref={ tag }> { quote }</p>
                   
                </blockquote>
                <button 
                    className='btn btn-primary'
                    onClick={ increment }
                > Siguiente Quote</button>
            </div>
                    
            

            
            

        </div>
    )
}
