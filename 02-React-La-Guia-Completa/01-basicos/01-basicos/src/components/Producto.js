import React from 'react';
const Producto = ({producto,productos, carrito, setCarrito,setProductos}) => {
    const {nombre,precio,id} = producto;
    // Agregar producto al carrito
    const seleccionarProducto = (id) =>{
        const productoCarrito = productos.find(product => product.id === id);
        setCarrito([...carrito,productoCarrito]);
        console.log(carrito)
    }
    return (
        <>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        <button
            type="button"
            onClick={()=> seleccionarProducto(id)}
        >Comprar</button>
        </>
    )
}
export default Producto;