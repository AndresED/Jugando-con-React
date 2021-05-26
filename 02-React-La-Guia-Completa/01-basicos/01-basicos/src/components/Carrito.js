import React from 'react'
import './carrito.css';
const Carrito = ({carrito,setCarrito}) => {
    const eliminarProducto = (id) =>{
        const nuevoCarrito = carrito.filter((itemCarrito) => itemCarrito.id !== id);
        setCarrito(nuevoCarrito);
    }
    return (
        <>
            <div className="carrito">
                <h2>Tu carrito de compras</h2>
                <ul>
                    {
                        carrito.length === 0 ?
                            <p> No hay productos en el carrito</p> : 
                            carrito.map(item=>{
                                return <li key={item.id}>
                                    {item.nombre} - $ {item.precio} - 
                                    <button
                                     type="button"
                                     onClick={()=> eliminarProducto(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            })
                    }
                </ul>
            </div>
        </>
    )
}
export default Carrito;
