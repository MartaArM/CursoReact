import { render } from '@testing-library/react'
import FirstApp from '../src/FirstApp'

describe('Prueba con FirstApp', () => { 
    
    test('Primera prueba' , () => {

            const { container } = render (<FirstApp name='Hola'/>);

            expect( container ).toMatchSnapshot();
 
    })


})