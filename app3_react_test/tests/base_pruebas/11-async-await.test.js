import { getImagen }  from '../../src/base-pruebas/11-async-await';

describe('11-async-await', () => { 
    
    test('Prueba de getImagen' , async() => {
        const url = await getImagen();

        expect (typeof url).toBe('string');
        
    })

})