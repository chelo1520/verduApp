export const BotonesProducto = ({producto, onAgregar, cancelar, kilos}) => {
  return (
    <div className="d-flex justify-content-between ">
      <button
        href="#"
        className="btn"
        id="button-add"
        onClick={() => onAgregar(producto, kilos)}
      >
        Agregar
      </button>
      <button
        href="#"
        className="btn btn-danger"
        id="button-cancelar"
        onClick={cancelar}
      >
        X
      </button>
    </div>
  );
};
