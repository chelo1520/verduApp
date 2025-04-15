import axios from "axios";

export const cargaProducto = async(prod) => {
    try {
        await axios.post("http://localhost:3000/dashboard/productos", prod, { withCredentials: true })

        console.log(`${prod.nombre} cargado correctamente`)
    } catch (error) {
        console.log(error)
    }
}

export const editarProducto = async(prod) => {
    try {
        await axios.patch(
            `http://localhost:3000/dashboard/productos/${prod._id}`,
            prod,
            { withCredentials: true }
        );

        console.log(prod)
    } catch (error) {
        console.log(error)
    }
}

export const eliminarProducto = async(id) => {
    try {
        await axios.delete(
            `http://localhost:3000/dashboard/productos/${id}`,
            { withCredentials: true }
        );
    } catch (error) {
        console.log(error)
    }
}