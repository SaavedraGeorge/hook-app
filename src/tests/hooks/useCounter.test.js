import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';
;

describe('useCounter tests', () => {
  test('debe enviar datos por defecto', () => {
    const {result} = renderHook( () => useCounter());
    
    expect( result.current.counter).toBe(10);
    expect( typeof result.current.decrecent ).toBe('function');
    expect( typeof result.current.increment ).toBe('function');
    expect( typeof result.current.reset ).toBe('function');
  });

  test('should show the value sent', () => {
    const {result} = renderHook( () => useCounter(100));
    const {counter} = result.current;
    
    expect( counter ).toBe(100);
  });

  test('should increment value sent', () => {
    const {result} = renderHook( () => useCounter(100));
    const {increment} = result.current;
    

    
    act( () => {
        increment()
    });

    const {counter} = result.current;
    expect(counter).toBe(101);


  });

  test('should decrecent and reset value sent', () => {
    const {result} = renderHook( () => useCounter(100));
    const {decrecent} = result.current;
    
    
    act( () => {
        decrecent()
    });

    const {counter} = result.current;
    expect(counter).toBe(99);


  });

  test('should reset value sent', () => {
    const {result} = renderHook( () => useCounter(100));
    const {decrecent} = result.current;
    const {reset} = result.current;

    
    act( () => {
        decrecent();
        reset()
    });

    const {counter} = result.current;
    expect(counter).toBe(100);


  });
  
  
});
