import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';
;


describe('pruebas useFetch', () => {
  test('should send data default', () => {
    const { result } = renderHook( () => useFetch());

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
    
    
  });

  //creo una funcion asincrona
  test('should delive data, loading false and error null', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    //hace una pausa mientras llegan los datos, se le asigna 3 segundos extras para que no se caiga la prueba con timeout
    await waitForNextUpdate({timeout:3000});

    const { data, loading, error } = result.current;
    
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null)


  });
  test('should delive error', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/apis/quotes/1'));
    await waitForNextUpdate({timeout:3000});

    const { data, loading, error } = result.current;
    
    expect(data).toBe(null);
    expect(loading).toBe(false);
    
    expect(error).toBe('sin datos')


  });
  
  
});
