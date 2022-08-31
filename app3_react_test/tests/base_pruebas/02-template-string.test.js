import { getSaludo }  from '../../src/base-pruebas/02-template-string';

describe('02-template-string', () => { // Esto es un grupo para meter las pruebas
    
    test('Prueba de getNombre' , () => {
        const mensaje = getSaludo('Marta');     
        expect ( mensaje ).toBe('Hola Marta'); 
    })


})