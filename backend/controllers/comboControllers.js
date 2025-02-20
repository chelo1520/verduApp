import Combo from "../models/Combo.js"

export const getCombo = async(req, res) => {
    try {
        const data = await Combo.find()

        if(Object.keys(data).length === 0 ){
            return res.status(200).json({mensaje: `No hay combos existentes`})
        }

        res.json(data)
        console.log("Get de combos!")
    } catch (error) {
        res.status(500).json({mensaje: `Error al obtener combo : ${error}`})
    }
}

export const cargaCombo = async(req, res) => {
    try {
       const {nombre , tipo , productos, descripcion, precio, imagen} = req.body;

        // Verificar que se llenen los campos obligatorios
        if (!nombre || !tipo || !productos || productos.length === 0 || !precio || !imagen) {
            return res.status(400).json({ mensaje: "Error, llene todos los campos del combo antes de subirlo" });
        }
           
       const nuevoCombo = new Combo({
        nombre,
        tipo,
        productos,
        descripcion,
        precio,
        imagen
       })

       await nuevoCombo.save()

       res.status(201).json({mensaje : `Se cargo el combo : ${nuevoCombo}`})
    } catch (error) {
        res.status(500).json({mensaje: `Error al cargar combo : ${error}`})
    }
}

export const eliminarCombo = async(req,res) => {
    try {
        const {id} = req.params;

        const combo = await Combo.findById(id);

        if(!combo){
            res.status(404).json({mensaje: `El combo que quiere eliminar no existe!`})
        }

        await Combo.findByIdAndDelete(combo);

        res.status(200).json({mensaje: `Combo ${combo.nombre} eliminado !`})
    } catch (error) {
        res.status(500).json({mensaje: `Error del servidor al emininar el producto; ${error}`})
    }
}

export const actualizarCombo = async(req, res) => {
    try {
        const actualizacion = req.body
        const {id} = req.params;

        const comboActualizado = await Combo.findByIdAndUpdate(id, actualizacion , {new: true})

        if(!comboActualizado){
            res.status(404).json({mensaje: `El combo que quiere actualizar no existe!`})
        }


        res.status(202).json({mensaje: `Combo ${comboActualizado.nombre} actualizado!`})


    } catch (error) {
        res.status(500).json({mensaje: `Error en el servidor al actualizar combo: ${error}`})
    }
}
