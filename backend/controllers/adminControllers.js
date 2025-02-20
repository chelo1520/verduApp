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

    const user = await Admin.findOne({email})

    if(!user){
        return res.status(400).json({mensaje: `Email no registrado o incorrecto!`})
    }

    const passwordVerify = await bcrypt.compare(password, user.password)

    if(!passwordVerify){
        return res.status(400).json({mensaje: `Contraseña incorrecta`})
    }

    
    
    const userSinPassword = {
        "email": user.email,
        "id": user._id
    }
    
    const token = await Jwt.sign({
        "_id": userSinPassword.id,
        "email": userSinPassword.email
    }, JWT_SECRET , {
        expiresIn: "1d"
    })


    res.cookie("token", token, {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
        sameSite: "strict", 
    })

    res.json({userSinPassword})

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
