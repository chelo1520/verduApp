import { useForm } from "react-hook-form";
import { cargaProducto, editarProducto } from "../../api/CRUDproductos.js";
import { useLocation } from "react-router-dom";

export const CargaProducto = () => {
    const location = useLocation();
    const productoExistente = location.state?.producto || null;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: productoExistente
    });

    const cargaEditarProducto = (prod) => {
      if(productoExistente) return editarProducto(prod)
      cargaProducto(prod)
    }
  
    return (
        <div>
          <h2>Cargar Producto</h2>
          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit(cargaEditarProducto)}>
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
                <option value="verdura">Verdura</option>
                <option value="fruta">Fruta</option>
              </select>
              {errors.tipo && <div className="invalid-feedback">{errors.tipo.message}</div>}
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
    
            <div className="col-md-4">
              <label htmlFor="unidad" className="form-label">Unidad</label>
              <select className={`form-select ${errors.unidad ? "is-invalid" : ""}`} id="unidad" {...register("unidad", { required: "Selecciona una unidad" })}>
                <option value="">Seleccionar unidad</option>
                <option value="unidad">Unidad</option>
                <option value="atado">Atado</option>
                <option value="kg">Kg</option>
                <option value="1/2 kg">1/2 Kg</option>
                <option value="1/4 kg">1/4 Kg</option>
              </select>
              {errors.unidad && <div className="invalid-feedback">{errors.unidad.message}</div>}
            </div>
    
            <div className="col-md-4">
              <label htmlFor="stock" className="form-label">Stock</label>
              <input
                type="number"
                className={`form-control ${errors.stock ? "is-invalid" : ""}`}
                id="stock"
                {...register("stock", { required: "Coloca stock" })}
              />
              {errors.stock && <div className="invalid-feedback">{errors.stock.message}</div>}
            </div>
    
            <div className="col-md-6">
              <label htmlFor="temporada" className="form-label">Temporada</label>
              <select className={`form-select ${errors.unidad ? "is-invalid" : ""}`} id="temporada" {...register("temporada", { required: "Selecciona una temporada" })}>
                <option value="">Seleccionar temporada</option>
                <option value="otoño">Otoño</option>
                <option value="primavera">Primavera</option>
                <option value="invierno">Invierno</option>
                <option value="verano">Verano</option>
              </select>
              {errors.temporada && <div className="invalid-feedback">{errors.temporada.message}</div>}
            </div>
    
            <div className="col-md-6">
              <label htmlFor="descuento" className="form-label">Descuento (%) (En caso de estar en oferta)</label>
              <input type="number" className="form-control" id="descuento" {...register("descuento")} />
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
    
            <div className="col-12">
              <label htmlFor="descripcion" className="form-label">Descripción (no necesaria)</label>
              <textarea className="form-control" id="descripcion" rows="3" {...register("descripcion")}></textarea>
            </div>
    
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="oferta" {...register("oferta")} />
                <label className="form-check-label" htmlFor="oferta">En oferta</label>
              </div>
            </div>
    
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Guardar Producto</button>
            </div>
          </form>
        </div>
  )
}
