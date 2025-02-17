import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
    "nombre": {type: String, required: true},
    "oferta": {type: Boolean, required: true},
    "precio": {type: Number, required: true},
    "tipo": {type: String, required: true},
    "unidad": {type: String, required: true},
    "stock": Number,
    "imagen": {type: String, required: true},
    "descripcion": String,
    "temporada": String,
    "descuento": Number
})

export default mongoose.model("Producto", ProductoSchema)