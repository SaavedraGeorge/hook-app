import React from 'react';

export const TodoListItem = ({todo, i, handleDelete, toggle }) => {
  
  return (
    <li
    className='list-group-item'
    key={todo.id}
    >
        <p 
            onClick={ () => toggle(todo.id)}
            className={`${ todo.done ? 'complete': ''}`}
        >
            {i+1}. { todo.desc }
        </p>
        <button 
            className='btn btn-danger'
            onClick={ () => handleDelete(todo.id) }
        >Eliminar</button>
    </li>
  );
};
