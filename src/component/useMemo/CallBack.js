import React, { useCallback, useState } from 'react';
import '../useEffect/effect.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBack = () => {
    const [counter, setcounter] = useState( 1 );

    // const increment = () => {
    //     setcounter( counter + 1 )
    // }

    const increment = useCallback(
        () => {
            setcounter( c => c + 1 ) 
        },
        [setcounter]
    )
    return (
        <div>
            <h1>useCallBack { counter }</h1>
            <hr /> 
            <ShowIncrement increment={ increment } />       
        </div>
    )
}
