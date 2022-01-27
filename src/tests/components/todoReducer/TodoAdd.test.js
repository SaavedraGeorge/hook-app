import React from 'react';
import { shallow } from 'enzyme';
import { AddTodo } from '../../../component/useReducer/AddTodo';


describe('Pruebas en <AddTodo />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <AddTodo 
            handleAddTodo={ handleAddTodo }
        /> 
    )


    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('NO debe de llamar handleAddTodo', () => {
        
        //busca el onSubmit del form
        const formSubmit = wrapper.find('form').prop('onSubmit');

        //ejecuta la accion onSubmit y manda el default para que corra
        formSubmit({ preventDefault(){} });

        //se espera que no se ejecute la accion, ya que no pasa la validacion
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);


    });

    test('debe de llamar la función handleAddTodo', () => {
        
        //creo un nuevo value para agregar en mi simulacion
        const value = 'Aprender Firestore';
        //siulo el onchange y entrelo mi value en el input
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        //se busca y se ejecuta el onsubmit con los cambios anterios al input
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        //cuento cuantas veces el submit ah sido llamado, este vez es uno porque pasa la validacion
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);

        //el handAddTodo es llamado con un objeto, pero esto puede entregar uno vacio
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); // { }
        //aca le pido la validacion con un objeto con datos, donde en el id le digo que es un numero (cualquiera)
        //el que recibe
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        }); 

        //aca evaluo si despues de ejecutar el handleAddTodo se ejecuto el reset, deberia estar el input vacio
        expect( wrapper.find('input').prop('value') ).toBe('');




    })
    
    

    

    
})
