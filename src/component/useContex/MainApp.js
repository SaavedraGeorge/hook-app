import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UseContext';

export const MainApp = () => {
    
    const [user, setUser] = useState({
        id: 1,
        name: 'jorge'
    });
    
    return (
            <UserContext.Provider value={{
                user,
                setUser
                
            }}>
                <AppRouter />
            </UserContext.Provider>
       
    );
};
