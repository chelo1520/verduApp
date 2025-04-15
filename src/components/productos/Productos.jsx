import { useContext, useState} from "react"
import { productosContext } from "../../context/ProductosProvider";
import { ModalProductos } from "../modal/ModalProductos";
import { useAuth } from "../../context/AuthProvider"
import { useNavigate } from "react-router-dom";
import { eliminarProducto } from "../../api/CRUDproductos";

export const Productos = ({productosFiltrados}) => {

    const { userAutenticado } = useContext(useAuth)
    const { productos } = useContext(productosContext);
    const [isProduct, setIsProduct] = useState(false)
    const [productoSeleccionado, setProductoSeleccionado] = useState(null)
    const navigate = useNavigate()

    const mostrarProducto = (prod) => {
        setProductoSeleccionado(prod)
        setIsProduct(true)
    }
    
    const cancelarCarrito = () =>{
        setIsProduct(false)
    }

    const editarProducto = (producto) => {
        navigate("/dashboard", { state: { producto } });
    };

    

    const mostrarProductos = productosFiltrados?.length > 0 
    ? productosFiltrados
    : productos

  return (
    <div className="container mt-2">
        <div>
            <h4>Productos</h4>
        </div>
        <div id="productos-lista">

                {mostrarProductos && mostrarProductos.length > 0 
                    ? 
                        mostrarProductos.map((producto) =>
                            <li className="card card-productos" key={producto._id}>
                                <img src={producto.imagen} className="card-img-top" alt={producto.nombre}/>
                                <div className="card-body">
                                    <h6 className="card-title">{producto.nombre}</h6>
                                    <p className="oferta">{producto.unidad}</p>
                                    { userAutenticado? 
                                        <div className="botonesAdmin">
                                            <button onClick={() => editarProducto(producto)} className="btn btn-warning">
                                                Editar
                                            </button>
                                            <button onClick={() => eliminarProducto(producto._id)} className="btn btn-danger">
                                                Eliminar
                                            </button>
                                        </div>
                                        :
                                        <div className="precio-button">
                                        <p className="precio">$ {producto.precio}</p>
                                        <button onClick={() => mostrarProducto(producto)} className="btn button-add">
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                        </div>
                                    }
                                </div>
                            </li>)
                    : <p>Cargando...</p> 

                }
        </div>

        
        {isProduct ?  <ModalProductos productoSelect={productoSeleccionado} setIsProduct={setIsProduct} cancelarCarrito={cancelarCarrito}/> : ""}
    </div>
  )
}
