import React from 'react';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow, mount, render } from 'enzyme';

describe('Pruebas sobre el componente CounterApp',()=>{
    test('Debe de generar un snatshop y mostrar sus valores por defecto',()=>{
        const wrapper = shallow(<CounterApp value={0} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100',()=>{
        const contador = 100;
        const wrapper = shallow(<CounterApp value={contador} />);
        expect(wrapper).toMatchSnapshot();
        const textCounter = wrapper.find("#contador").text();
        expect(textCounter).toBe(textCounter);
    })
})