import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import React,{useState} from 'react';
function App() {
  const anio = new Date().getFullYear();
  // Crear listado de productos
  const [productos,setProductos] = useState([
    {id: 1, nombre: 'Camisa react',precio: 50},
    {id: 2, nombre: 'Camisa angular',precio: 30},
    {id: 3, nombre: 'Camisa vuejs',precio: 20},
  ]);
  // State para un carrito de compra
  const [carrito,setCarrito] = useState([]);
  return (
    <>
      <Header></Header>
        {
          productos.map(item=>{
            return <Producto 
            producto={item} 
            key={item.id}
            carrito={carrito}
            setCarrito={setCarrito}
            productos = {productos}
            setProductos = {setProductos}
            ></Producto>
          })
        }
        <Carrito carrito={carrito} setCarrito={setCarrito}></Carrito>
      <Footer anio={anio}></Footer>
    </>
  );
}

export default App;
