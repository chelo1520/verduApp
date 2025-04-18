import { Logo } from '../components/home/Logo';
import { Direccion } from '../components/home/Direccion';
import { Banner } from '../components/home/Banner';
import { Buscador } from '../components/home/Buscador';
import { Productos } from '../components/productos/Productos';
import { useContext, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { BotonDashboard } from './dashboard/BotonDashboard';


export const Home = () => {

  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const {userAutenticado} = useContext(useAuth)

  return (
    <div>

      {userAutenticado? <BotonDashboard/> : ""}

      <Logo/>

      <Direccion/>

      <Banner/>

      <Buscador setProductosFiltrados={setProductosFiltrados}/>

      <Productos productosFiltrados={productosFiltrados}/>
      
    </div>
  )
}
