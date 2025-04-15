import Jwt from "jsonwebtoken"
import Admin from "../models/Admin.js";


const verificarToken = async(req, res, next) =>{

    try {
        const JWT_SECRET = process.env.JWT_SECRET
        const token = req.cookies.token;

        if(!token){
            console.log("no hay token ", token)
            return res.status(401).json({mensaje: "Accion no valida"})
        }

        const extraer = await Jwt.verify(token, JWT_SECRET)

        if(!extraer){
            return res.status(401).json({mensaje: "Accion no valida"})
        }

        const user = await Admin.findById(extraer._id).select("-password")

        if(!user){
            console.log("usuario no encontrado")
            return res.status(401).json({mensaje: "Accion no valida"})
        }

        req.usuario = user;

        next()
    } catch (error) {
        res.status(500).json({mensaje: error.message})
    }
}

export default verificarToken;