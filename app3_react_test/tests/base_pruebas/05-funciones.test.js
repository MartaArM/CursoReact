import { getUser }  from '../../src/base-pruebas/05-funciones';

describe('05-funciones', () => { 
    
    test('Prueba de getUser' , () => {
        const user = getUser();
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        //expect( user ).toBeDefined();
        expect( user ).toEqual(userTest); // Se utiliza para comparar objetos. 
    })


})