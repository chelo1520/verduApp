import { useState } from "react"
import {AutocompletadoInput} from "../autocompletadoDireccion/AutocompletadoInput"

export const Direccion = () => {

    const [direccion, setDireccion] = useState(false)

  return (
    <>
    { direccion ? 
          <div id="direccion-container">
            <div>
            <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div>
              <p>Coronel Aguirre 2566</p>
            </div>
          </div>
          :
          <AutocompletadoInput/>
      }
    </>
  )
}
