import React from 'react'
import Gasto from './Gasto'
import PropTypes from 'prop-types';
const Listado = ({gastos}) => {
    return (
        <>
            <div className="gastos-realizados">
                <h2>Lista de Gastos</h2>
                {
                    gastos.map(gasto=>{
                        return <Gasto gasto={gasto} key={gasto.id} />
                    })
                }
            </div>
        </>
    )
}
Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
}
export default Listado;