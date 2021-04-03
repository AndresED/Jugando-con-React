import React from 'react';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
describe('Pruebas sobre PrimeraApp',()=>{
    test("debe de mostrar el mensaje 'Hola, soy Goku'",()=>{
        const saludo = 'Hola, soy Goku';
        const nombre = 'Goku';
        const wrapper = render(<PrimeraApp nombre={nombre}/>);
        expect(wrapper.getByText(saludo)).toBeInTheDocument();
    });
});