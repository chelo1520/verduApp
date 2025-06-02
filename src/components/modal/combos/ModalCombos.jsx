import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { carritoContext } from "../../../context/CarritoProvider";

export const ModalCombos = ({combo, setComboSelect}) => {

  const {agregarCarrito} = useContext(carritoContext)

  return (
    <div id="combo-background">
      <div id="combo-container">
        <img src={combo.imagen} alt={combo.nombre} />
        <div>
            <h2>{combo.nombre}</h2>
            <div>
                {combo.productos.map((prod) => 
                  <li key={uuidv4()}>
                      {prod.nombre} - {prod.peso}
                  </li>
                )}
            </div>
        </div>
        <div id="agregar-combo">
          <button className="btn" onClick={() => {
            agregarCarrito(combo)
            setComboSelect(null)
          }}>Agregar</button>
          <button className="btn btn-danger" onClick={() => setComboSelect(null)}>X</button>
        </div>
      </div>
    </div>
  )
}
