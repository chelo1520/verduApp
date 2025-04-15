import Admin from "../models/Admin.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";

export const login = async(req, res) => {

    try {
        const JWT_SECRET = process.env.JWT_SECRET
        const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({mensaje: `Llene todo los campos`})
    }

    const userData = await Admin.findOne({email})

    if(!userData){
        return res.status(400).json({mensaje: `Email no registrado o incorrecto!`})
    }

    const passwordVerify = await bcrypt.compare(password, userData.password)

    if(!passwordVerify){
        return res.status(400).json({mensaje: `Contraseña incorrecta`})
    }

    
    
    const user = {
        "email": userData.email,
        "id": userData._id
    }
    
    const token = await Jwt.sign({
        "_id": user.id,
        "email": user.email
    }, JWT_SECRET , {
        expiresIn: "1d"
    })


    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict"
    })

    res.json({user})

  } catch (error) {
    res.status(500).json({mensaje: `Error del servidor al iniciar sesion : ${error}`})
  }
}

export const logout = async(req, res) => {
    try {
        res.cookie("token", "", {maxAge: 0})
        res.send("Sesion cerrada")
    } catch (error) {
        res.status(500).json({mensaje: `Error del servidor al cerrar sesion : ${error}`})    
    }
}
