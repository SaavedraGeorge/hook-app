import React from 'react';
import { useForm } from '../../hooks/useForm';

export const AddTodo = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] = useForm({ 
        description: ''
     });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false 
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar To Do</h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="add To Do" 
                    autoComplete='off'
                    className='form-control'
                    value={ description }
                    onChange={ handleInputChange }
                />
                <button 
                    className='btn btn-outline-primary col-12 mt-1'
                    type='submit'
                >Agregar</button>
            </form>
        </>
    );
};
