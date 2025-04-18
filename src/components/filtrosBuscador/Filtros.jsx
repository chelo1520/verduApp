export const Filtros = ({ setTiposFiltros, tiposFiltros , setOfertas , ofertas}) => {

  const filtroBotones = (tipo) => {
    setTiposFiltros(tipo)
    setOfertas(false)
  }

  const filtrarOfertas = () => {
    setTiposFiltros("todo")
    setOfertas(true)
  }

  return (
    <div className="container d-flex justify-content-evenly mt-2">
      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "todo" && ofertas !== true ? "#53B175" : "white",
        }}
        onClick={() => filtroBotones("todo")}
      >
        <img width={"50px"} src="../public/filtros/todo.png" alt="icono-todo" />
        Todo
      </button>

      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "verdura" ? "#53B175" : "white",
        }}
        onClick={() => filtroBotones("verdura")}
      >
        <img width={"50px"} src="../public/filtros/verduras.png" alt="icono-verduras" />
        Verduras
      </button>

      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "fruta" ? "#53B175" : "white",
        }}
        onClick={() => filtroBotones("fruta")}
      >
        <img width={"50px"} src="../public/filtros/frutas.png" alt="icono-frutas" />
        Frutas
      </button>

      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "todo" && ofertas === true ? "#53B175" : "white",
        }}
        onClick={filtrarOfertas}
      >
        <img width={"50px"} src="../public/filtros/oferta-especial.png" alt="icono-frutas" />
        Ofertas
      </button>
    </div>
  );
};