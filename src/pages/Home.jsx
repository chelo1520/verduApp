import { Logo } from '../components/home/Logo';
import { Direccion } from '../components/home/Direccion';
import { Banner } from '../components/home/Banner';
import { Buscador } from '../components/home/Buscador';
import { Productos } from '../components/productos/Productos';
import { useState } from 'react';


export const Home = () => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  return (
    <div>

      <Logo/>

      <Direccion/>

      <Banner/>

      <Buscador setProductosFiltrados={setProductosFiltrados}/>

      <Productos productosFiltrados={productosFiltrados}/>
      
    </div>
  )
}
