import React,{ useState} from 'react'
import Error from './Error';
import PropTypes from 'prop-types';
const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {
    const [cantidad,guardarCantidad] = useState(0);
    const [error,actualizarError] = useState(false);
    const definirPresupuesto = (e)=>{
        guardarCantidad(parseFloat(e.target.value));
    };
    const agregarPresupuesto = (e)=>{
        e.preventDefault();
        // Validar
        if(cantidad<1 || isNaN(cantidad)){
            actualizarError(true);
            return;
        }
        actualizarError(false);
        // Si pasa la validación
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
  
    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            {error === true ? <Error mensaje="El presupuesto es incorrecto" /> : null};
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                    value={cantidad}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="Definir presupuesto"
                />
            </form>
        </>
    )
}
// guardarPresupuesto,guardarRestante,actualizarPregunta
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}
export default Pregunta;