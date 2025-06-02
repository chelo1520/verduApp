import { SeleccionKilos } from "../../seleccionPesoKilos/SeleccionKilos";

export const SelectorDeCantidad = ({ producto, setKilos, kilos }) => {

  const agregarKilosHome = (value) => {
    const numeroKilos = parseInt(value);

    if (!isNaN(numeroKilos)) {
      setKilos(numeroKilos); // Actualizamos el estado si es un número válido
    } else {
      setKilos(1); // Valor por defecto si es NaN
    }
  };

  const handleFocus = (e) => e.target.select();


  return (
    <div className="row mb-2">
      <p className="col-4 m-0 text-center align-text-center fs-6 fw-bold p-0">
        ${producto.precio}
      </p>
      <div className="col-8 d-flex align-items-start justify-content-start">
        <label htmlFor="input-add" className="text-secondary"></label>

        {producto.unidad === "unidad" ||
        producto.unidad === "atado" ? (
          ""
        ) : (
          <SeleccionKilos setKilos={setKilos} kilos={kilos} />
        )}

        {kilos === 0.25 || kilos === 0.5 ? (
          ""
        ) : (
          <input
            onFocus={handleFocus}
            value={kilos}
            onChange={(e) => agregarKilosHome(e.target.value)}
            type="number"
            min={1}
            className="ms-1"
            id="input-add"
            aria-valuemax={16}
          />
        )}
      </div>
    </div>
  );
};
