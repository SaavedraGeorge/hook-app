import React from 'react';
//configure se llama para llamar mount en reat 17
import {mount, shallow, configure} from "enzyme";
//adaptaer es para llamar mount en reat 17
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { TodoApp } from '../../../component/useReducer/TodoApp';
import { demoTodo } from '../../fixtures/demoTodo';
import { act } from '@testing-library/react';

configure({adapter: new Adapter()});

describe('Pruebas en <TodoApp />', () => {

    //montamos TODOAPP con shallow
    const wrapper = shallow( <TodoApp />);

    //ejecutamos el Storage
    Storage.prototype.setItem = jest.fn(()=> {});

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de agregar un TODO', () => {

        
        //se monta el wrapper en mount, es como shallow pero te permite mas opciones
        const wrapper = mount( <TodoApp /> );
        
        //se ejecuta la propiedad (funcion en este paso) handADDTodo desde AddTodo
        //se agregan dos elementos desde demoTodo
         act( () => {
             wrapper.find('AddTodo').prop('handleAddTodo')( demoTodo[0] );
             wrapper.find('AddTodo').prop('handleAddTodo')( demoTodo[1] );
         });

         //venos si los cambios se hicieton primero viendo si el contados que esta en el H1 cambio, en este paso dos veces
         expect( wrapper.find('h1').text().trim() ).toBe('To Do App 2');
         //y se cuenta cuantas veces se llamo al localstorage
         expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        
    });

    test('debe de eliminar un todo', () => {
        /// la consola nos dira si es neecsario agregar un act

        //se ejecuta la accion handleAddTodo para gregar un elemento
        wrapper.find('AddTodo').prop('handleAddTodo')( demoTodo[0] );
        //se ejecupa ha desde handleDelete desde TodoList
        wrapper.find('TodoList').prop('handleDelete')( demoTodo[0].id );

        //comprobamos con el contador del h1 si el registro se elimino
        expect( wrapper.find('h1').text().trim() ).toBe('To Do App 0');

    });
    
    
    
    
})
