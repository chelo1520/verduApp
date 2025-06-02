import { useContext, useState, useEffect } from "react";
import { productosContext } from "../../context/ProductosProvider";
import { ModalProductos } from "../modal/productos/ModalProductos";
import { useNavigate } from "react-router-dom";
import { ProductoCard } from "./ProductoCard";

export const Productos = ({ productosFiltrados }) => {
  const { productos } = useContext(productosContext);
  const [isProduct, setIsProduct] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const navigate = useNavigate();
  const [selectEliminar, setSelectEliminar] = useState(null);
  const [modoAgregarCombo, setModoAgregarCombo] = useState(false);

  useEffect(() => {
    const modo = localStorage.getItem("modoAgregarCombo") === "true";
    setModoAgregarCombo(modo);
  }, []);

  const mostrarProducto = (prod) => {
    setProductoSeleccionado(prod);
    setIsProduct(true);
  };

  const cancelarCarrito = () => {
    setIsProduct(false);
  };

  const editarProducto = (producto) => {
    navigate("/dashboard", { state: { producto } });
  };

  const mensajeEliminar = (prod) => {
    setProductoSeleccionado(prod);
    setSelectEliminar(true);
    setIsProduct(true);
  };

  const mostrarProductos =
    productosFiltrados?.length > 0 ? productosFiltrados : productos;

  return (
    <div className="container mt-2">
      <div>
        <h4>Productos</h4>
      </div>
      <div id="productos-lista">
        {mostrarProductos && mostrarProductos.length > 0 ? (
          mostrarProductos.map((producto) => (
            <ProductoCard
              key={producto._id}
              producto={producto}
              onEliminar={mensajeEliminar}
              onEditar={editarProducto}
              onMostrar={mostrarProducto}
              modoAgregarCombo={modoAgregarCombo}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>

      {isProduct ? (
        <ModalProductos
          productoSelect={productoSeleccionado}
          setIsProduct={setIsProduct}
          cancelarCarrito={cancelarCarrito}
          selectEliminar={selectEliminar}
        />
      ) : (
        ""
      )}
    </div>
  );
};
