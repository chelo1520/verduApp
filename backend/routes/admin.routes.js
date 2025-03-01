import { Router } from "express";
import { actualizarProducto, cargaProducto, eliminarProducto } from "../controllers/productosControllers.js";
import { actualizarCombo, cargaCombo, eliminarCombo } from "../controllers/comboControllers.js";
import { login, logout } from "../controllers/adminControllers.js";
import verificarToken from "../middlewares/verificarToken.js";


const routeAdmin = Router()

//cuenta admin
routeAdmin.post("/login", login)
routeAdmin.post("/logout", logout)

//dashboard
routeAdmin.get("/", verificarToken, (req, res) => {
    res.send("Estas en el dashboard")
})

//productos
routeAdmin.post("/productos", verificarToken, cargaProducto)
routeAdmin.delete("/productos/:id", verificarToken, eliminarProducto)
routeAdmin.patch("/productos/:id", verificarToken, actualizarProducto)

//combos
routeAdmin.post("/combos", verificarToken, cargaCombo)
routeAdmin.delete("/combos/:id", verificarToken, eliminarCombo)
routeAdmin.patch("/combos/:id", verificarToken, actualizarCombo)

export default routeAdmin;