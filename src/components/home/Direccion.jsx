import { useState } from "react"

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
          <div className="container input-group flex-nowrap" id='buscador-direccion-container'>
          <span className="input-group-text" id="addon-wrapping"><i className="bi bi-geo-alt-fill"></i></span>
          <input type="text" id='buscador-direccion' className="form-control" placeholder="Colocá tu dirección" aria-label="Buscar" aria-describedby="addon-wrapping"/>
          </div>
      }
    </>
  )
}
