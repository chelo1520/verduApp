
import { useEffect, useState } from "react"
import { DireccionesSugeridas } from "./DireccionesSugeridas"

export const AutocompletadoInput = () => {

    const [query, setQuery] = useState("")
    const [sugerencias, setSugerencias] = useState([])

    const handleInputChange = async(e) => {
        setQuery(e.target.value)
    }

    //Get de direcciones sugeridas
    useEffect(() => {

      if (!query.trim()) return;
      async function querySend(){
          try {
            const response = await fetch(`http://localhost:3000/autocompletado?query=${query}`)
            const data = await response.json()
    
            setSugerencias(data.features)
          
        } catch (error) {
            console.log("Error al obtener direcciones ", error)
        }
      }

      querySend()

    }, [query])
    

    
  return (
    <div>

    <div className="container input-group flex-nowrap" id='buscador-direccion-container'>
        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-geo-alt-fill"></i></span>
        <input value={query} onChange={handleInputChange} type="text" id='buscador-direccion' className="form-control" placeholder="Colocá tu dirección" aria-label="Buscar" aria-describedby="addon-wrapping"/>
    </div>

    <DireccionesSugeridas direcciones={sugerencias}/>
    

    </div>
  )
}
