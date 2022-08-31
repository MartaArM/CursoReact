import { retornaArreglo }  from '../../src/base-pruebas/07-deses-arr';

describe('07-deses-arr', () => { 
    
    test('Prueba de retornaArreglo' , () => {
        const [letras, numeros] = retornaArreglo();

        expect(typeof letras).toBe("string");
        expect(typeof numeros).toBe("number");

        expect( letras ).toEqual( expect.any(String)); // Tambien compara el tipo
        expect( numeros ).toEqual( expect.any(Number));
    })


})