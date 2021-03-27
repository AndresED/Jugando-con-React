import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
const PrimeraApp = ({nombre})=>{
    return (
    <>
        <h1> Hola mundo {nombre}</h1>
        <h2> ¿Como estas?</h2>
    </>
    );
}
PrimeraApp.propTypes ={
    nombre: PropTypes.string.isRequired,
}
export default PrimeraApp;