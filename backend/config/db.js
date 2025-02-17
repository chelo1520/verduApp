import {mongoose} from "mongoose";

const conectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Coneccion a BD exitosa ${mongoose.connection.name}`)
    } catch (error) {
        console.log(`Error al conectar base de datos : ${error}`)
        process.exit(1)
    }
}

export default conectDB;