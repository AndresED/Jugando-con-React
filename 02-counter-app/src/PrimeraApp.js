import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
const PrimeraApp = ({nombre,subtitulo})=>{
    return (
    <>
        <h1> Hola mundo {nombre}</h1>
        <h2> ¿Como estas?</h2>
        <p>{subtitulo}</p>
    </>
    );
}
PrimeraApp.propTypes ={
    nombre: PropTypes.string.isRequired,
}
PrimeraApp.defaultProps ={
    subtitulo: 'Soy un subtitulo',
}
export default PrimeraApp;