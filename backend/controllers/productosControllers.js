import Productos from "../models/Producto.js"

export const getProduct = async(req, res) => {

    try {

        const data = await Productos.find()
        
        res.json(data)

        console.log("Get de productos exitoso")
    } catch (error) {
        res.status(500).json({mensaje: `Error al obtener productos ${error}`})
    }

}

export const cargaProducto = async(req, res) => {

    try {
        const producto = req.body

        if (Object.keys(producto).length === 0) {
            return res.status(400).json({ mensaje: "Error, llene todos los campos del producto antes de subirlo" });
        }

        const productoSave = await new Productos(producto)

        await productoSave.save();

        res.status(201).json(productoSave)

    } catch (error) {
        res.status(500).json({mensaje: `Error al cargar producto ${error}`})
    }

}

export const eliminarProducto = async(req, res) => {
    try {

        const {id} = req.params;

        const producto = await Productos.findById(id)

        if(!producto){
            return res.status(404).json({mensaje: `El producto que quiere eliminar no existe`})
        }

        await Productos.findByIdAndDelete(producto)

        res.status(200).json({mensaje: `El siguiete producto fue eliminado => ${producto.nombre}`})

    } catch (error) {
        res.status(500).json({mensaje: `Error al eliminar producto : ${error}`})
    }
}

export const actualizarProducto = async(req, res) => {
    try {
        const {id} = req.params;
        const actualizar = req.body;

        const producto = await Productos.findById(id)

        if(!producto){
            return res.status(404).json({mensaje: `El producto que quiere actualizar no existe`})
        }



        await Productos.findByIdAndUpdate(id, actualizar, {new: true})

        res.status(200).json({mensaje: `El siguiete producto fue actualizado => ${producto.nombre}`})

    } catch (error) {
        res.status(500).json({mensaje: `Error al actualizar producto : ${error}`})
    }
}