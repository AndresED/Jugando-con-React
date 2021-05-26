import React from 'react'

const Cita = ({cita,eliminarCita}) => {
    return (
        <>
         <div className="cita">
            <p>
                <span>Mascota:{cita.mascota}</span>
            </p>
            <p>
                <span>Dueño: {cita.propietario}</span>
            </p>
            <p>
                <span>Fecha:{cita.fecha}</span>
            </p>
            <p>
                <span>Hora:{cita.hora}</span>
            </p>
            <p>
                <span>Síntomas:{cita.sintomas}</span>
            </p>
            <button
                className="button eliminar u-full-width"
                onClick={()=>{eliminarCita(cita.id)}}
            >
                Eliminar
            </button>
         </div>
        </>
    )
}
export default Cita;