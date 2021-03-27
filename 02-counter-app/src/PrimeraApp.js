import React from 'react';
import './index.css';
const PrimeraApp = (props)=>{
    console.log(props)
    const {nombre} = props
    return (
    <>
        <h1> Hola mundo {nombre}</h1>
        <h2> ¿Como estas?</h2>
    </>
    );
}
export default PrimeraApp;