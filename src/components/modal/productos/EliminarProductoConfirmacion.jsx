export const EliminarProductoConfirmacion = ({producto, onEliminar, onCancelar}) => {
  return (
    <div>
              <h6 className="card-title fw-bold fs-2">
                Seguro quiere eliminar {producto.nombre} ?
              </h6>
              <div className="d-flex justify-content-center gap-2">
                <button
                  href="#"
                  className="btn btn-danger"
                  onClick={() => onEliminar(producto._id)}
                >
                  Si
                </button>
                <button
                  href="#"
                  className="btn"
                  id="button-add"
                  onClick={() => onCancelar(false)}
                >
                  No
                </button>
              </div>
            </div>
  )
}
