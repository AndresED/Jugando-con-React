import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  // Arreglo de citas
  const [ citas, guardarCitas] = useState(citasIniciales);
  // Use Effect para realizar ciertas operaciones cuando cambia el state
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[citas])
  // función que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{
      guardarCitas(
       [
        ...citas,
        cita
       ]
      )
  }
  // funcion que elimina una cita por su ID
  const eliminarCita = citaId =>{
    const nuevasCitas = citas.filter(cita=>cita.id !== citaId);
    guardarCitas(nuevasCitas);
  }
  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas': 'Administra tus citas';
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map((cita) => {
                return <Cita cita={cita} eliminarCita={eliminarCita}  key={cita.id}/>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
