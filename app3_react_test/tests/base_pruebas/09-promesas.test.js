import { getHeroeByIdAsync }  from '../../src/base-pruebas/09-promesas';

describe('09-promesas', () => { 
    
    test('Prueba de getHeroeByIdAsync correcto' , (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then( (hero) => {
            expect(hero.id).toBe(1);
            done(); //Se llama para que el test espere a que se ejecute para dar el error o el acierto
        });
        
    })

    test('Prueba de getHeroeByIdAsync incorrecto' , (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch( (error) => {
            expect(error).toBe('No se pudo encontrar el heroe');
            done(); //Se llama para que el test espere a que se ejecute para dar el error o el acierto
        });
        
    })

})