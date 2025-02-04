import { useState } from "react";

export const Filtros = ({ setTiposFiltros, tiposFiltros }) => {
  return (
    <div className="container d-flex justify-content-evenly mt-2">
      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "todo" ? "#c0f2d3" : "white",
        }}
        onClick={() => setTiposFiltros("todo")}
      >
        <img width={"50px"} src="../public/filtros/todo.png" alt="icono-todo" />
        Todo
      </button>

      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "verdura" ? "#c0f2d3" : "white",
        }}
        onClick={() => setTiposFiltros("verdura")}
      >
        <img width={"50px"} src="../public/filtros/verduras.png" alt="icono-verduras" />
        Verduras
      </button>

      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "fruta" ? "#c0f2d3" : "white",
        }}
        onClick={() => setTiposFiltros("fruta")}
      >
        <img width={"50px"} src="../public/filtros/frutas.png" alt="icono-frutas" />
        Frutas
      </button>

      <button
        className="btn d-flex flex-column filtros"
        style={{
          backgroundColor: tiposFiltros === "fruta" ? "#c0f2d3" : "white",
        }}
        onClick={() => setTiposFiltros("fruta")}
      >
        <img width={"50px"} src="../public/filtros/frutas.png" alt="icono-frutas" />
        Frutas
      </button>
    </div>
  );
};