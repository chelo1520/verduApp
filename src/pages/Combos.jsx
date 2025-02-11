import { useContext, useState } from "react"
import { CombosFrutas } from "../components/combos/CombosFrutas"
import { CombosVerduras } from "../components/combos/CombosVerduras"
import { ModalCombos } from "../components/modal/ModalCombos"
import { combosContext } from "../context/CombosProvider"

export const Combos = () => {

  const {combos} = useContext(combosContext)
  //const [isCombo, setIsCombo] = useState(false)


  return (
    <div>

    {combos && combos.length > 0 ? 
      combos.map((combo) => 
        <li key={combo.id} className="card mb-3 d-flex align-items-center justify-content-center p-0 combo-container" >
          <div className="row g-0 w-100 d-flex">
              <div className="col-5 img-combo">
                  <img src={combo.imagen} className="img-fluid rounded-start" alt={combo.nombre}/>
              </div>
              <div className="col-6 combo-descripcion">
                  <div className="card-body h-100 justify-content-between p-2">
                      <h5 className="text-start titulo-combo">{combo.nombre}</h5>
                      <p className="precio-combo m-0">$ {combo.precio}</p>
                  </div>
              </div>
              <div className="col-1 d-flex justify-content-end ">
                  <button className="boton-combo"><i className="bi bi-arrow-bar-right"></i></button>
          </div>
          </div>
        </li>
      )      
      : <p>Cargando...</p>
      }

    </div>
  )
}
