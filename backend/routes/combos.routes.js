import { Router } from "express";
import { actualizarCombo, cargaCombo, eliminarCombo, getCombo } from "../controllers/comboControllers.js";

const routeCombo = Router()

routeCombo.post("/", cargaCombo)
routeCombo.get("/", getCombo)
routeCombo.delete("/:id", eliminarCombo)
routeCombo.patch("/:id", actualizarCombo)


export default routeCombo;