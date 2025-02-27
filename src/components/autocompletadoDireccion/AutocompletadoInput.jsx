
import { useAutoCompletado } from "../../hooks/useAutoCompletado"
import { DireccionesSugeridas } from "./DireccionesSugeridas"
import { InputBusqueda } from "./InputBusqueda"

export const AutocompletadoInput = () => {

  const { query,
    sugerencias,
    active,
    etiquetaSugerencia,
    setQuery,
    setActive,
    setSeleccionManual,
  } = useAutoCompletado()
    
  return (
    <div className="position-relative">

    <InputBusqueda query={query} setQuery={setQuery} setSeleccionManual={setSeleccionManual}/>

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
