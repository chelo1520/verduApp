import { useEffect, useRef, useState } from "react"

export const useAutoCompletado = () => {
    
        const [query, setQuery] = useState("")
        const [sugerencias, setSugerencias] = useState([])
        const [active, setActive] = useState(false)
        const [seleccionManual, setSeleccionManual] = useState(false) //sirve para que setee a false al estado active cuando cambia el estado query pero cuando elejimos sugerencia y no cuando escribimos
        const etiquetaSugerencia = useRef(null)
    
    
        useEffect(() => {
          function handleClickOutside(e){
    
            if(etiquetaSugerencia && !etiquetaSugerencia.current.contains(e.target)){
              setActive(false)
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
        
  return {
    query,
    sugerencias,
    active,
    etiquetaSugerencia,
    setQuery,
    setActive,
    setSeleccionManual,
  }
}
