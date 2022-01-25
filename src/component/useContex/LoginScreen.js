import React, { useContext } from 'react';
import { UserContext } from './UseContext';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);

    const cambio = () =>{
        setUser(
            {
                id: 456,
                name: 'alfa'
            }
        )
    }
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button className="btn btn-outline-primary" onClick={ cambio } >Cambio User</button>
        </div>
    );
};
