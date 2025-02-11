import { useContext, useState } from "react"
import { SeleccionKilos } from "../seleccionPesoKilos/SeleccionKilos";
import { carritoContext } from "../../context/CarritoProvider";

export const ModalProductos = ({productoSelect, setIsProduct ,cancelarCarrito}) => {

  const {agregarCarrito} = useContext(carritoContext);
  const [kilos, setKilos] = useState(1)

  const x = (producto, kilos) => {
    agregarCarrito(producto, kilos)
    setIsProduct(false)
  }

  const agregarKilosHome = (value) => {

    const numeroKilos = parseInt(value)

    if (!isNaN(numeroKilos)) {
      setKilos(numeroKilos); // Actualizamos el estado si es un número válido
    } else {
      setKilos(1); // Valor por defecto si es NaN
    }
  }

  const handleFocus = (event) => {
    event.target.select(); // Seleccionar todo el contenido al enfocar
  }

  return (
    <div id="producto-seleccion">
      <div className="card row d-flex align-items-center justify-content-center" id="producto-seleccion-id">
          <div className="col-6 d-flex align-items-center">
              <img src={productoSelect.imagen} className="card-img-top" alt="ajo"/>
          </div>
          <div className="card-body justify-content-evenly col-6 h-100">
                      <h6 className="card-title fw-bold fs-2">{productoSelect.nombre}</h6>
                      <p className="oferta fs-2">{productoSelect.unidad}</p>
                      <div className="precio-button row">
                          <div className="row mb-2">
                              <p className="col-4 m-0 text-center align-text-center fs-6 fw-bold p-0">${productoSelect.precio}</p>
                              <div className="col-8 d-flex align-items-start justify-content-start">
                                  <label htmlFor="input-add" className="text-secondary">
                                  </label>
                                  
                                    {productoSelect.unidad === "unidad" || productoSelect.unidad === "atado" 

                                      ?"" 
                                      : <SeleccionKilos setKilos={setKilos} kilos={kilos}/>
                                    }

                                    {kilos === 0.25 || kilos === 0.5 ? "" : 
                                    <input
                                      onFocus={handleFocus}
                                      value={kilos}
                                      onChange={(e) => agregarKilosHome(e.target.value)}
                                      type="number"
                                      min={1}
                                      className="ms-1"
                                      id="input-add"
                                      aria-valuemax={16}
                                    />}
                                  
                              </div>
                          </div>
                          <div className="d-flex justify-content-between ">
                              <button href="#" className="btn"  id="button-add" onClick={() => x(productoSelect, kilos)}>Agregar</button>
                              <button href="#" className="btn btn-danger"  id="button-cancelar" onClick={cancelarCarrito}>X</button>
                          </div>
                      </div>
          </div>
      </div>
    </div>
  )
}

