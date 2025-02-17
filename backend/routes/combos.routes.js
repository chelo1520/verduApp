import { Router } from "express";
import { cargaCombo, getCombo } from "../controllers/comboControllers.js";

const routeCombo = Router()

routeCombo.post("/", cargaCombo)
routeCombo.get("/", getCombo)

export default routeCombo;