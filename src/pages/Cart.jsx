import { useContext, useState } from "react"
import { productosContext } from "../context/ProductosProvider";

export const Cart = ({producto}) => {

  const {cart, eliminarProducto, incrementarKilos, restarKilos, total} = useContext(productosContext); 


  return (
    <div className="container" id="carrito-container">
      <h2>Mi Carrito</h2>

      <div id="productosListaCarrito">
        {cart && cart.length > 0 ? cart.map((prod) => (
              <li key={prod.id} className="card row d-flex justify-content-center card-carrito">
                <div className="col-3 h-100">
                  <img src={prod.imagen} className="img-carrito" alt="" />
                </div>
                <div className="col-7 sumador-y-titulo d-flex justify-content-between pt-2 pb-2">
                  
                  <div className="titulo-sub">
                    <h3>{prod.nombre}</h3>
                    <h5>{prod.unidad}</h5>
                  </div>
        
                  <div className="botonesCantidad d-flex justify-content-center align-items-center row">
                    <button className="boton-sumar bg-danger col-3" onClick={() => restarKilos(prod)}>-</button>
                    <p className="contador-kg col-4">{prod.kilos}</p>
                    <button className="boton-sumar col-3" onClick={() => incrementarKilos(prod)}>+</button>
                  </div>
        
                </div>
                <div className="col-2 precio-carrito m-0 d-flex flex-column align-items-end justify-content-between">
                  <button className="boton-quitar btn btn-secondary" onClick={() => eliminarProducto(prod)}>X</button>
                  <p className="precio">${prod.sumaPrecio ? prod.sumaPrecio : prod.precio}</p>
                </div>
              </li>
        )) :
          <h3 className="agregarProductos">Agrega productos!</h3>
        }
      </div>

      {cart && cart.length == 0 ? ""
      :    
        <div className="sumadorTotal fixed-bottom container">
          <p id="ordenar">Ordenar</p>
          <div id="totalContent">
            <p id="total" className="">Total: ${total}</p>
          </div>
        </div> 
      }

    </div>
  )
}
