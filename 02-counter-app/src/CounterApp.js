import PropTypes from 'prop-types';
import './index.css';
import React,{useState} from 'react';

const CounterApp = ({value}) =>{
    const [counter, setCounter] = useState(value);
    const handleAdd = ()=>{
        setCounter(counter+1);
    }
    const handleSubstration = ()=>{
        setCounter(counter-1);
    }
    const handleReset = ()=>{
        setCounter(value);
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2 id="contador">{counter}</h2>
        <button id="btnAdd" onClick={handleAdd}>+</button>
        <button id="btnReset" onClick={handleReset}>Reset</button>
        <button id="btnRemove" onClick={handleSubstration}>-</button>
        </>
    );
}
CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}
export default CounterApp;