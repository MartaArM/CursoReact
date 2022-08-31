import { getHeroeById, getHeroesByOwner }  from '../../src/base-pruebas/08-imp-exp';

describe('08-imp-exp', () => { 
    
    test('Prueba de getHeroeByOwner' , () => {
        const id = 1;
        const array_heroes = getHeroesByOwner('Marvel');

        expect (array_heroes.length).toBe(2);

        for (let i=0; i<array_heroes.length; i++) {
            expect (array_heroes.at(i).owner).toBe('Marvel');
        }
        
    })


})