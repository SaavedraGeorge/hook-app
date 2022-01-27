import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('test useForm', () => {
    const initialForm = {
        nombre: 'Jorge',
        email: 'asd@asd.com'
    }
    
    test('should ejecutar y mostrar useForm', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values, inputChange, reset] = result.current;
    
        expect(  values ).toEqual(initialForm);
        expect( typeof inputChange ).toBe('function');
        expect( typeof inputChange ).toBe('function');

    });
    test('Cambiar nombre', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, inputChange] = result.current;
        
       
       
        act( () => {
            inputChange({
                target: {
                    name: 'nombre',
                    value: 'pepe'
                }
            })
        });

        const [values] = result.current;
        expect(values).toEqual({...initialForm, nombre: 'pepe'});

    });
    test('reset', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, inputChange, reset] = result.current;
        
        act( () => {
            inputChange({
                target: {
                    name: 'nombre',
                    value: 'pepe'
                }
            })
        });
        act(() => {
            reset()
        })
        const [values] = result.current;
        expect(values).toEqual(initialForm);

    });
    
});
