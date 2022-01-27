import { todoReducer } from "../../../component/useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodo";


//creamos un initial state, lo importamos desde fixtures/demoTodo los valores por defecto
const initialState = demoTodo;


describe('Pruebas en todoReducer', () => {
   test('should return default state', () => {
    
    const state = todoReducer(initialState, {});
    expect(state).toEqual(initialState);
   });

   test('add new ToDo', () => {
    const newText = {
        id: 3,
        desc: 'Aprender React nuevamente',
        done: false
    }
    const action = {
        type: 'add',
        payload: newText
    }
    const state = todoReducer(initialState, action);
    
    expect(state.length).toBe(3);
    expect(state).toEqual([...initialState, newText]);


   });
   test('delete ToDo', () => {
    
    const action = {
        type: 'delete',
        payload: 2
    }
    const state = todoReducer(initialState, action);
    
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodo[0]])
   });
   test('toggle', () => {
    
    const action = {
        type: 'toggle',
        payload: 2
    }
    const state = todoReducer(initialState, action);
    
    //el segundo elemento de mi arreclo en la parte de done esta en true
    expect(state[1].done).toBe(true);
    
   });
});
