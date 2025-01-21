import { Logo } from '../components/NavBar/home/Logo';
import { Direccion } from '../components/NavBar/home/Direccion';
import { Banner } from '../components/NavBar/home/Banner';
import { Buscador } from '../components/NavBar/home/Buscador';
import { Productos } from '../components/NavBar/home/productos/Productos';


export const Home = () => {

  return (
    <div>

      <Logo/>

      <Direccion/>

      <Banner/>

      <Buscador/>

      <Productos/>
      
    </div>
  )
}
