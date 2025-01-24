import { useContext, useState } from "react"
import { productosContext } from "../../context/ProductosProvider";
import { Modal } from "../modal/Modal";

export const Productos = () => {

    const { productos } = useContext(productosContext);
    const [isProduct, setIsProduct] = useState(false)
    const [productoSeleccionado, setProductoSeleccionado] = useState(null)

    const mostrarProducto = (prod) => {
        setProductoSeleccionado(prod)
        setIsProduct(true)
    }

    const cancelarCarrito = () =>{
        setIsProduct(false)
    }

  return (
    <div className="container mt-2">
        <div>
            <h4>Productos</h4>
        </div>
        <div id="productos-lista">
                {productos ? productos.map((indice, index) => 
                    <li className="card" key={index}>
                        <img src={indice.imagen} className="card-img-top" alt={indice.nombre}/>
                        <div className="card-body">
                            <h6 className="card-title">{indice.nombre}</h6>
                            <p className="oferta">{indice.unidad}</p>
                            <div className="precio-button">
                                <p className="precio">{indice.precio}</p>
                                <button onClick={() => mostrarProducto(indice)} href="#" className="btn button-add"><i className="bi bi-plus-lg"></i></button>
                            </div>
                        </div>
                    </li>
            
                )

                
                : <p>Cargando...</p>

                }
        </div>

       
        {isProduct ?  <Modal productoSelect={productoSeleccionado} cancelarCarrito={cancelarCarrito}/> : ""}
    </div>
  )
}
