import { useForm } from "react-hook-form"

export const Login = () => {

    const {register, handleSubmit, formState: {errors} } = useForm()

    const login = (values) => {
        console.log(values)
    }

  return (
    <div>
        <h1>Inicie Sesion</h1>
        <form onSubmit={handleSubmit(login)}>
            <label htmlFor="username">Nombre de Usuario</label>
            <input 
                type="text"
                name="username"
                id="username"
                placeholder="Ingrese nombre de usuario"
                {...register("username", {required: "Por favor ingresa tu nombre de usuario !"})}
            />
            {errors.username && <p>{errors.username.message}</p>}


            <label htmlFor="password">Contraseña</label>
            <input 
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese nombre de usuario"
                {...register("password", {required: "Contraseña requerida"})}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Iniciar Sesion</button>
        </form>
    </div>
  )
}
