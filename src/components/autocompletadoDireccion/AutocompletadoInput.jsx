
import { useEffect, useRef, useState } from "react"
import { DireccionesSugeridas } from "./DireccionesSugeridas"

export const AutocompletadoInput = () => {

    const [query, setQuery] = useState("")
    const [sugerencias, setSugerencias] = useState([])
    const [active, setActive] = useState(false)
    const [seleccionManual, setSeleccionManual] = useState(false) //sirve para que setee a false al estado active cuando cambia el estado query pero cuando elejimos sugerencia y no cuando escribimos
    const etiquetaSugerencia = useRef(null)
    const inputRef = useRef(null)


    useEffect(() => {
      function handleClickOutside(e){

        if(etiquetaSugerencia && !etiquetaSugerencia.current.contains(e.target)){
          setActive(false)
          console.log(active)
        }

      }


      function scrollOff(){
        setActive(false)
      }

      document.addEventListener("click", handleClickOutside)
      window.addEventListener("scroll", scrollOff)

      return () => {
        document.removeEventListener("click", handleClickOutside)
        window.removeEventListener("scroll", scrollOff);
      }
    }, [])
    
    
    //Get de direcciones sugeridas
    useEffect(() => {

      if (!query.trim()) return;
      async function obtenerQuery(){
          try {
            const response = await fetch(`http://localhost:3000/autocompletado?query=${query}`)
            const data = await response.json()
    
            setSugerencias(data.features)

            setActive(true)

            if (seleccionManual) {
              setActive(false);
            }
            

        } catch (error) {
            console.log("Error al obtener direcciones ", error)
        }
      }

      obtenerQuery()

    }, [query])
    

    
  return (
    <div className="position-relative">

    <div className="container input-group flex-nowrap" id='buscador-direccion-container'>
        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-geo-alt-fill"></i></span>
        <input 
        value={query} 
        onChange={(e) => {
          setQuery(e.target.value)
          setSeleccionManual(false)
        }} 
        type="text" id='buscador-direccion' 
        className="form-control" 
        placeholder="Colocá tu dirección" 
        aria-label="Buscar" 
        aria-describedby="addon-wrapping"
        ref={inputRef}
        />
    </div>

    <DireccionesSugeridas 
    direcciones={sugerencias} 
    query={query} setQuery={setQuery} 
    etiquetaSugerencia={etiquetaSugerencia} 
    active={active}
    setActive={setActive}
    setSeleccionManual={setSeleccionManual}
    />
    

    </div>
  )
}
