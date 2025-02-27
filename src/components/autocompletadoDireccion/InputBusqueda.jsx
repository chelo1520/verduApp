export const InputBusqueda = ({query,setQuery,setSeleccionManual}) => {
  return (
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
        />
    </div>
  )
}
