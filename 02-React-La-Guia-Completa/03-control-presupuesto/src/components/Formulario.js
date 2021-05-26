import React,{useState} from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';
const Formulario = ({guardarGasto,guardarCrearGasto}) => {
    const [nombre,guardarNombre] = useState('');
    const [cantidad,guardarCantidad] = useState(0);
    const [error,guardarError] = useState(false);
    const agregarGasto = (e)=>{
        e.preventDefault();
        // validar
        if(cantidad<1 || isNaN(cantidad)||nombre.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
         // Pasar el gasto al principal
        guardarGasto(gasto);
        guardarNombre('');
        guardarCantidad(0);
        guardarCrearGasto(true);
       // Listar gastos
    }

    return (
        <>
            <form onSubmit={agregarGasto}>
                <h2>Agrega tus gastos aquí</h2>
                {error === true ? <Error mensaje="Ambos son obligatorio o presupuesto incorrecto" /> : null};
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Cantidad Gasto</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={e => guardarCantidad(parseFloat(e.target.value))}
                    />
                </div>
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar Gasto"
                />
            </form>
        </>
    )
}
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
}
export default Formulario;