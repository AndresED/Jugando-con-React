import React from 'react'
import { revisarPresupuesto } from '../helper';
import PropTypes from 'prop-types';
const ControlPresupuesto = ({restante,presupuesto}) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante: $ {restante}
            </div>
        </>
    )
}
ControlPresupuesto.propTypes = {
    restante: PropTypes.number.isRequired,
    presupuesto: PropTypes.number.isRequired,
}
export default ControlPresupuesto;
