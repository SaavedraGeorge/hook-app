import React from 'react';
import { shallow } from "enzyme";
import { TodoListItem } from '../../../component/useReducer/TodoListItem';
import { demoTodo } from '../../fixtures/demoTodo';



describe('pruebas a <TodoReducer />', () => {
    const handleDelete = jest.fn();
    const toggle = jest.fn(); 
    
    const wrapper = shallow(
        <TodoListItem
            todo = {demoTodo[0]} 
            i = {0}
            handleDelete = {handleDelete}
            toggle = {toggle} 
        />
    );

    test('should snapshot ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('handDelete tests', () => {
      wrapper.find('button').simulate('click');
      //entrega el id del elemento a borrar
      expect( handleDelete ).toHaveBeenCalledWith(demoTodo[0].id);
    });
    test('handDelete toggle', () => {
        wrapper.find('p').simulate('click');
        //entrega el id del elemento a borrar
        expect( toggle ).toHaveBeenCalledWith(demoTodo[0].id);
      });
      test('should show the text', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodo[0].desc}`)
      });
      test('should show complete class', () => {
        const todo = demoTodo[0];
        //le asignamos done true al elemento 0 del arreclo
        todo.done = true;

        //llamamos al wrapper con el nuevo todo
        const wrapper = shallow(<TodoListItem
            todo = {todo} />)
        
        //buscamos el parrafo
        const p = wrapper.find('p');

        // vemos si el parrafo tiene la clase 'complete'
        expect(p.hasClass('complete')).toBe(true);
      });
      
      
    


});
