import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import "./effect.css";

export const FormWithCustomHooks = () => {
    
    const [values, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const {name, email, password} = values;


    useEffect(() => {   
        console.log('cambio Email');
        
    }, [ email ])

    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={ handlesubmit }>
          <h1>Form With Custom Hooks</h1>
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
              <input
                type="password"
                name="password"
                className='form-control'
                placeholder='*****'
                value={ password }
                onChange={ handleInputChange }  
              />

          </div>
            <button type='submit' className='btn'> Guardar </button>
        </form  >
    )
}
