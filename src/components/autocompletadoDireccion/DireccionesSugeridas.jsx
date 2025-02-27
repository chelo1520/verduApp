import { useEffect, useRef, useState } from "react"

export const DireccionesSugeridas = ({direcciones, query, setQuery, etiquetaSugerencia, active, setActive, setSeleccionManual}) => {

  return (
    <div >
        
        <ul className={`list-group ${active === true ? "" : "desactivado"}`}  id="direcciones-container" ref={etiquetaSugerencia}>
                    {      
                    direcciones.map((sugerencia, index) => (
                        <li onClick={() =>  {
                          setQuery(sugerencia.place_name)
                          setActive(false)
                          setSeleccionManual(true)
                          }} key={index} className="list-group-item" >
                            {sugerencia.place_name}
                        </li>
                    ))
                    }
        </ul>
            
    </div>
  )
}
