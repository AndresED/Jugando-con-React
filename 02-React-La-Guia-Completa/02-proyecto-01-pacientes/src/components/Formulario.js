import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
const Formulario = ({crearCita}) => {
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const [ error , actualizarError ] = useState(false);
    const actualizarState = (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value,
        })
    }
    const { mascota, propietario, fecha, hora, sintomas} = cita;
    const submitCita = (e)=>{
        e.preventDefault();
        // Validar
        if(
            mascota.trim() === '' || 
            propietario.trim() === '' || 
            fecha.trim() === '' || 
            hora.trim() === '' || 
            sintomas.trim() === ''
        ){
            actualizarError(true);
            return;
        }
        actualizarError(false);
        // Generar ID
        cita.id = uuidv4();
        // Creando cita
        crearCita(cita);
        // Formateando formulario
        actualizarCita({
            mascota:'',
            propietario: '',
            fecha:'',
            hora:'',
            sintomas:''
        })
        
    }
    return (
        <>
           <h2>Crear cita</h2>
           { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
           <form
                onSubmit={submitCita}
           >
               <label>Nombre de mascota</label>
               <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de mascota"
                    onChange={actualizarState}
                    value={mascota}
               />
               <label>Nombre del Dueño</label>
               <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
               />
               <label>Fecha</label>
               <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    placeholder=""
                    onChange={actualizarState}
                    value={fecha}
               />
               <label>Hora</label>
               <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    placeholder=""
                    onChange={actualizarState}
                    value={hora}
               />
               <label>Síntomas</label>
               <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
               ></textarea>
               <button
                    type="submit"
                    className="u-full-width button-primary"
               >
                   AGREGAR CITA
               </button>
           </form>
        </>
    )
}
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
}
export  default Formulario;