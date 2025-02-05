import { useContext, useEffect, useState } from "react"
import { Filtros } from "../filtrosBuscador/Filtros"
import { productosContext } from "../../context/ProductosProvider";


export const Buscador = ({setProductosFiltrados}) => {

  const { productos } = useContext(productosContext);
  const [busco, setBusco] = useState("");
  const [tiposFiltros, setTiposFiltros] = useState("todo");
  const [ofertas, setOfertas] = useState(false)





  useEffect(() => {
    const debounce = setTimeout(() => {
      const resultado = productos.filter((prod) => {
          // Filtro por nombre (solo si `busco` no está vacío)
          const nombreCoincide = busco
            ? prod.nombre.toLowerCase().includes(busco.toLowerCase())
            : true;

          // Filtro por tipo (solo si `tiposFiltros` no es "todo")
          const tipoCoincide = tiposFiltros === "todo"
            ? true
            : prod.tipo === tiposFiltros;
            
            const ofertaCoincide = ofertas ? prod.oferta : true
  
          // Combinar ambos filtros
          return nombreCoincide && tipoCoincide && ofertaCoincide;
        });
  
      setProductosFiltrados(resultado);
      console.log(resultado)
    }, 400);
  
    return () => clearTimeout(debounce);
  }, [busco, productos, tiposFiltros, ofertas, setProductosFiltrados]);

  const buscar = (e) => {
    setBusco(e.target.value); // Actualiza el input
  };



  return (
    <>
    <div className="container input-group flex-nowrap" id='buscador-container'>
        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
        <input value={busco} onChange={buscar} type="text" id='buscador' className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="addon-wrapping"/>
    </div>
    <Filtros setTiposFiltros={setTiposFiltros} tiposFiltros={tiposFiltros} setOfertas={setOfertas} ofertas={ofertas}/>
    </>
  )
}
