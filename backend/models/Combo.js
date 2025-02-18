import mongoose from "mongoose";

const ComboSchema = new mongoose.Schema({
    "nombre": {type: String, required: true},
    "tipo": {type: String, required: true},
    "productos": [
      { "nombre": {type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true},
        "peso": {type: String, required: true} 
      }
    ],
    "descripcion": String,
    "precio": {type: Number, required: true},
    "imagen": {type: String, required: true}
  },)

export default mongoose.model("Combo", ComboSchema)