import React, { useEffect, useState } from 'react';
import "./effect.css";

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const {name, email} = formState;

    useEffect(() => {
     console.log('cargo la pagina!');   
    },[]);
    useEffect(() => {
        console.log('cargo la name!');   
    },[name]);
    useEffect(() => {
        console.log('cargo la email!');   
    },[email]);

    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name] : target.value
        })
    }
    return (
        <>
          <h1>UseEffect</h1>
          <br></br>

          <div className='form-group'>
              <input
                type="text"
                name="name"
                autoComplete='false'
                className='form-control'
                placeholder='Nombre'
                value={ name }
                onChange={ handleInputChange }  
              />
              <input
                type="text"
                name="email"
                autoComplete='false'
                className='form-control'
                placeholder='correo electronico'
                value={ email }
                onChange={ handleInputChange }  
              />

          </div>

        </  >
    )
}
