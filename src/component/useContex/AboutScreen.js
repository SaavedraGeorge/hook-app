import React, { useContext } from 'react';
import { UserContext } from './UseContext';

export const AboutScreen = () => {
    const {setUser} = useContext(UserContext);
    const logOut = () =>{
        setUser({})
    }
    return (
        <div>
            <h1>About</h1>
            <hr />
            <button onClick={ logOut }> Logout</button>
        </div>
    );
};
