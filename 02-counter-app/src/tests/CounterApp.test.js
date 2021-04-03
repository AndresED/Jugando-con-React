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

    test('Debe de incrementar con el boton +1',()=>{
        const contador = 100;
        const wrapper = shallow(<CounterApp value={contador} />);
        expect(wrapper).toMatchSnapshot();
        const btnAdd = wrapper.find("#btnAdd").simulate('click');
        const textCounter = wrapper.find("#contador").text().trim();
        expect(textCounter).toBe((parseInt(contador)+1)+'');
    })


    test('Debe de disminuir con el boton -1',()=>{
        const contador = 100;
        const wrapper = shallow(<CounterApp value={contador} />);
        expect(wrapper).toMatchSnapshot();
        const btnRemove = wrapper.find("#btnRemove").simulate('click');
        const textCounter = wrapper.find("#contador").text().trim();
        // const btnReset = wrapper.find("#btnReset").text();
        expect(textCounter).toBe((parseInt(contador)-1)+'');
    })

    test('Debe de disminuir con el boton -1',()=>{
        const contador = 100;
        const wrapper = shallow(<CounterApp value={contador} />);
        expect(wrapper).toMatchSnapshot();
        const btnRemove = wrapper.find("#btnRemove").simulate('click');
        const textCounter = wrapper.find("#contador").text().trim();
        // const btnReset = wrapper.find("#btnReset").text();
        expect(textCounter).toBe((parseInt(contador)-1)+'');
    })
    test('Debe de restablecer el valor por defecto con el boton reset',()=>{
        const contador = 100;
        const wrapper = shallow(<CounterApp value={contador} />);
        expect(wrapper).toMatchSnapshot();
        const btnRemove = wrapper.find("#btnRemove").simulate('click');
        const btnReset = wrapper.find("#btnReset").simulate('click');
        const textCounter = wrapper.find("#contador").text().trim();
        
        expect(contador+'').toBe(textCounter+'');
    })
})