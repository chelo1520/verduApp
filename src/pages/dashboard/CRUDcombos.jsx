import { useContext } from "react";
import { useForm } from "react-hook-form";
import {useNavigate } from "react-router-dom";
import { combosContext } from "../../context/CombosProvider";

export const CRUDcombos = () => {
    const navigate = useNavigate();
    const {comboProducto} = useContext(combosContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const cargaEditarCombo = (combo) => {
      console.log(combo)
    }

    const agregarProductosAlCombo = () => {
      localStorage.setItem("modoAgregarCombo", "true");
      navigate("/");
    }
  
    return (
        <div>
          <h2>Cargar Combo</h2>
          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit(cargaEditarCombo)}>
            <div className="col-md-6">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                id="nombre"
                {...register("nombre", { required: "Ingresa el nombre" })}
              />
              {errors.nombre && <div className="invalid-feedback">{errors.nombre.message}</div>}
            </div>
    
            <div className="col-md-6">
              <label htmlFor="tipo" className="form-label">Tipo</label>
              <select className={`form-select ${errors.tipo ? "is-invalid" : ""}`} id="tipo" {...register("tipo", { required: "Selecciona el tipo" })}>
                <option value="">Seleccionar tipo</option>
                <option value="verdura">Verduras</option>
                <option value="fruta">Frutas</option>
              </select>
              {errors.tipo && <div className="invalid-feedback">{errors.tipo.message}</div>}
            </div>
    
            <div className="col-12">
              <label htmlFor="descripcion" className="form-label">Descripción (no necesaria)</label>
              <textarea className="form-control" id="descripcion" rows="3" {...register("descripcion")}></textarea>
            </div>

            <div className="col-md-4">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input
                type="number"
                className={`form-control ${errors.precio ? "is-invalid" : ""}`}
                id="precio"
                {...register("precio", { required: "Coloca un precio" })}
              />
              {errors.precio && <div className="invalid-feedback">{errors.precio.message}</div>}
            </div>
    
            <div className="col-md-6">
              <label htmlFor="imagen" className="form-label">Imagen (URL)</label>
              <input
                type="text"
                className={`form-control ${errors.imagen ? "is-invalid" : ""}`}
                id="imagen"
                {...register("imagen", { required: "Coloca una imagen" })}
              />
              {errors.imagen && <div className="invalid-feedback">{errors.imagen.message}</div>}
            </div>

            <div>
              <button className="btn btn-secondary" onClick={agregarProductosAlCombo}>Agregar productos</button>
              <h3>Productos en Combo</h3>
              <div>
                  {comboProducto && comboProducto.length > 0 ? 
                  comboProducto.map((prod) => 
                    <li key={prod._id}>
                        <h5>{prod.nombre}</h5>
                        <h5>{prod.precio}</h5>
                    </li>
                  ) 
                  : ""}
              </div>
            </div>
    
    
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Guardar Combo</button>
            </div>
          </form>
        </div>
  )
}
