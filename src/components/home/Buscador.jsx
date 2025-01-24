export const Buscador = () => {
  return (
    <div className="container input-group flex-nowrap" id='buscador-container'>
        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
        <input type="text" id='buscador' className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="addon-wrapping"/>
    </div>
  )
}
