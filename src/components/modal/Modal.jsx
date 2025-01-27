export const Modal = ({productoSelect, cancelarCarrito}) => {

  const agregarCarrito = () => {
    console.log("agregar al carrito")
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
                              <p className="col-4 m-0 text-center align-text-center fs-6 fw-bold">${productoSelect.precio}</p>
                              <div className="col-8 d-flex align-items-center justify-content-start p-0">
                                  <label htmlFor="input-add" className="text-secondary">Kg.
                                  </label>
                                  <input type="number" className=""  id="input-add" aria-valuemin={1} aria-valuemax={16} defaultValue={1}/>
                              </div>
                          </div>
                          <div className="d-flex justify-content-between ">
                              <button href="#" className="btn"  id="button-add" onClick={() => agregarCarrito(productoSelect)}>Agregar</button>
                              <button href="#" className="btn btn-danger"  id="button-cancelar" onClick={cancelarCarrito}>X</button>
                          </div>
                      </div>
          </div>
      </div>
    </div>
  )
}


// Tengo que pasarle un onchange a el button para pasarlo al carrito