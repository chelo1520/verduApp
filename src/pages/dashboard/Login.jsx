import { useForm } from "react-hook-form";
import { login } from "../../api/login.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../context/AuthProvider.jsx";


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const {loginAdmin, userAutenticado} = useContext(useAuth)

  useEffect(() => {
    if(userAutenticado) navigate("/dashboard")
  }, [userAutenticado])
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit(loginAdmin)}>
              {/* Nombre de usuario */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Nombre de Usuario</label>
                <input 
                  type="text"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Ingrese su nombre de usuario"
                  {...register("email", { required: "Por favor ingresa tu nombre de usuario!" })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              {/* Contraseña */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input 
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder="Ingrese su contraseña"
                  {...register("password", { required: "Contraseña requerida" })}
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              {/* Botón de envío */}
              <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
