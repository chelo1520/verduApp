import { Logo } from '../components/home/Logo';
import { Direccion } from '../components/home/Direccion';
import { Banner } from '../components/home/Banner';
import { Buscador } from '../components/home/Buscador';
import { Productos } from '../components/productos/Productos';


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
