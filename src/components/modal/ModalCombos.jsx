import { v4 as uuidv4 } from "uuid";

export const ModalCombos = ({combo, setIsCombo}) => {
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
          <button className="btn">Agregar</button>
          <button className="btn btn-danger" onClick={() => setIsCombo(false)}>X</button>
        </div>
      </div>
    </div>
  )
}
