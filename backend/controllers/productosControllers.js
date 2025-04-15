import Producto from "../models/Producto.js"

export const getProduct = async(req, res) => {

    try {

        const data = await Producto.find()

        
        if(Object.keys(data).length === 0 ){
            return res.status(200).json({mensaje: `No hay productos existentes`})
        }
        
        res.json(data)

        console.log("Get de productos exitoso")
    } catch (error) {
        res.status(500).json({mensaje: `Error al obtener productos ${error}`})
    }

}

export const cargaProducto = async(req, res) => {

    try {
        const {nombre , oferta, precio, tipo, unidad, imagen } = req.body

        if (!nombre || !tipo || !precio || !imagen) {
            return res.status(400).json({ mensaje: `Error, llene todos los campos del producto antes de subirlo`});
        }

        const productoSave = await new Producto({
            nombre,
            oferta,
            precio,
            tipo,
            unidad,
            imagen
        })

        await productoSave.save();

        res.status(201).json(productoSave)

    } catch (error) {
        res.status(500).json({mensaje: `Error al cargar producto ${error}`})
    }

}

export const eliminarProducto = async(req, res) => {
    try {

        const {id} = req.params;

        const producto = await Producto.findById(id)

        if(!producto){
            return res.status(404).json({mensaje: `El producto que quiere eliminar no existe`})
        }

        await Producto.findByIdAndDelete(producto)

        res.status(200).json({mensaje: `El siguiete producto fue eliminado => ${producto.nombre}`})

    } catch (error) {
        res.status(500).json({mensaje: `Error al eliminar producto : ${error}`})
    }
}

export const actualizarProducto = async(req, res) => {
    try {
        const {id} = req.params;
        const actualizar = req.body;

        const productoActualizado = await Producto.findByIdAndUpdate(id, actualizar, { new: true });

        if (!productoActualizado) {
            return res.status(404).json({ mensaje: `El producto que quiere actualizar no existe` });
        }

        res.status(200).json({ mensaje: `El siguiente producto fue actualizado => ${productoActualizado.nombre}` });

    } catch (error) {
        res.status(500).json({mensaje: `Error al actualizar producto : ${error}`})
    }
}