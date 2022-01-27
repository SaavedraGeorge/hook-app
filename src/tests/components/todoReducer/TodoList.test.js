import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../component/useReducer/TodoList';
import {demoTodo} from '../../fixtures/demoTodo';

;


describe('pruebas a <TodoList />', () => {
    const handleDelete = jest.fn();
    const toggle = jest.fn();

    const wrapper = shallow( 
    <TodoList 
        todos = { demoTodo }
        handleDelete = { handleDelete }
        toggle = { toggle } 
    />); 

    test('should show correctly component', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('ver cuantos elementos se renderizan', () => {
        
        expect(wrapper.find('TodoListItem').length).toBe(2);
        //busca en la propiedad del elemento 0 de los todoListItem, si existe handdelete y si es una funcion
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
});
