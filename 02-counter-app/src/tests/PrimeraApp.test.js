import React from 'react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow, mount, render } from 'enzyme';
describe('Pruebas sobre PrimeraApp',()=>{
    test("debe de mostrar el mensaje 'Hola, soy Goku'",()=>{
        const saludo = 'Hola, soy Goku';
        const nombre = 'Goku';
        const wrapper = shallow(<PrimeraApp nombre={nombre}/>);
        expect(wrapper).toMatchSnapshot();
    });
});