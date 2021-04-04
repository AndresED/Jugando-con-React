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
    test("debe de mostrar el subtitulo enviado por los props",()=>{
        const nombre = 'Hola, soy Goku'
        const subtitulo = 'Soy un pinche subtitulo';
        const wrapper = shallow(<PrimeraApp nombre={nombre} subtitulo={subtitulo}/>);
        const texto = wrapper.find('p').text();
        expect(texto).toBe(subtitulo);
        expect(wrapper).toMatchSnapshot();

    });
});