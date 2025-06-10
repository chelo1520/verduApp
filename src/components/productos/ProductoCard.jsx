import { useContext } from "react";
import { useAuth } from "../../context/AuthProvider";
import { combosContext} from "../../context/CombosProvider";

export const ProductoCard = ({
  producto,
  onEliminar,
  onEditar,
  onMostrar,
  modoAgregarCombo,
}) => {
  const { userAutenticado } = useContext(useAuth);
  const {setComboProducto} = useContext(combosContext)


  return (
    <li className="card card-productos" key={producto._id}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />
      <div className="card-body">
        <h6 className="card-title">{producto.nombre}</h6>
        <p className="oferta">{producto.unidad}</p>
        {userAutenticado && modoAgregarCombo ? (
          <div className="botonesAdmin">
            <button
              onClick={() => setComboProducto(item => [...item, producto])}
              className="btn btn-warning"
            >
              Agregar al combo
            </button>
          </div>
        ) : userAutenticado ? (
          <div className="botonesAdmin">
            <button
              onClick={() => onEditar(producto)}
              className="btn btn-warning"
            >
              Editar
            </button>
            <button
              onClick={() => onEliminar(producto)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
          </div>
        ) : (
          <div className="precio-button">
            <p className="precio">$ {producto.precio}</p>
            <button
              onClick={() => onMostrar(producto)}
              className="btn button-add"
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
