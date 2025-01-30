import { useContext, useState } from "react"
import { productosContext } from "../context/ProductosProvider";
import {v4 as uuidv4} from "uuid";

export const Cart = ({producto}) => {

  const [productsCarritos, setProductsCarritos] = useState(null)
  const {cart, eliminarProducto, incrementarKilos, restarKilos} = useContext(productosContext); 


  return (
    <div>
      <h2>Mi Carrito</h2>


      {cart && cart.length > 0 ? cart.map((prod) => (
            <li key={uuidv4()} className="card row d-flex justify-content-center card-carrito">
              <div className="col-4 h-100">
                <img src={prod.imagen} className="img-carrito" alt="" />
              </div>
              <div className="col-4 sumador-y-titulo d-flex justify-content-between pt-2 pb-2">
                
                <div className="titulo-sub">
                  <h3>{prod.nombre}</h3>
                  <h5>{prod.unidad}</h5>
                </div>
      
                <div className="botonesCantidad d-flex justify-content-center align-items-center row">
                  <button className="boton-sumar bg-danger col" onClick={() => restarKilos(prod.nombre)}>-</button>
                  <p className="contador-kg col">{prod.kilos}</p>
                  <button className="boton-sumar col" onClick={() => incrementarKilos(prod.nombre)}>+</button>
                </div>
      
              </div>
              <div className="col-4 precio-carrito m-0 d-flex flex-column align-items-end justify-content-between">
                <button className="boton-quitar btn btn-secondary" onClick={() => eliminarProducto(prod)}>X</button>
                <p className="precio">${prod.precio}</p>
              </div>
            </li>
      )) :
        <h3 className="agregarProductos">Agrega productos!</h3>
      }

    </div>
  )
}
