import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


import './style.css'
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

const init = () =>{
    
    // llama lo que hay en el loca storrage y si es vacio devuelve []
    return JSON.parse(localStorage.getItem('todos')) || [];
    
} 

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init );

    
    
    
     useEffect(() => {
       localStorage.setItem('todos', JSON.stringify(todos));
     
     }, [todos]);
     

    const handleAddTodo = ( newTodo ) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    const handleDelete = (idItem) => {
        
        const action ={
            type: 'delete',
            payload: idItem
        }

        dispatch(action);

    }

    const toggle = (idItem) => {
        dispatch( {
            type: 'toggle',
            payload: idItem 
        } )
    }

    return (
        <div>
            <h1>To Do App <small>{todos.length}</small></h1>
            <hr />

  

            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos = {todos}
                        handleDelete = {handleDelete}
                        toggle = {toggle}
                    /> 
                </div>
                <div className='col-5'>
                    <AddTodo handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
