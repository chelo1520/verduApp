import { useContext, useState } from "react";
import { carritoContext } from "../../../context/CarritoProvider";
import { eliminarProducto } from "../../../api/CRUDproductos";
import { EliminarProductoConfirmacion } from "./EliminarProductoConfirmacion";
import { SelectorDeCantidad } from "./SelectorDeCantidad";
import { BotonesProducto } from "./BotonesProducto";

export const ModalProductos = ({
  productoSelect,
  setIsProduct,
  cancelarCarrito,
  selectEliminar,
}) => {
  const { agregarCarrito } = useContext(carritoContext);
  const [kilos, setKilos] = useState(1);

  const agregarProductoAlCarrito = (producto, kilos) => {
    agregarCarrito(producto, kilos);
    setIsProduct(false);
  };

  const eliminarProductoBD = (id) => {
    eliminarProducto(id);
    setIsProduct(false);
  };

  return (
    <div id="producto-seleccion">
      <div
        className="card row d-flex align-items-center justify-content-center"
        id="producto-seleccion-id"
      >
        <div className="col-6 d-flex align-items-center">
          <img src={productoSelect.imagen} className="card-img-top" alt="ajo" />
        </div>
        <div className="card-body justify-content-evenly col-6 h-100">
          {selectEliminar ? (
            <EliminarProductoConfirmacion
              producto={productoSelect}
              onEliminar={eliminarProductoBD}
              onCancelar={setIsProduct}
            />
          ) : (
            <div>
              <h6 className="card-title fw-bold fs-2">
                {productoSelect.nombre}
              </h6>
              <p className="oferta fs-2">{productoSelect.unidad}</p>
              <div className="precio-button row">
                <SelectorDeCantidad
                  producto={productoSelect}
                  setKilos={setKilos}
                  kilos={kilos}
                />
                <BotonesProducto
                  producto={productoSelect}
                  onAgregar={agregarProductoAlCarrito}
                  cancelar = {cancelarCarrito}
                  kilos
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
