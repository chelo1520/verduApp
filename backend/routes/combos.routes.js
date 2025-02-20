import { Router } from "express";
import { getCombo } from "../controllers/comboControllers.js";

const routeCombo = Router()

routeCombo.get("/", getCombo)



export default routeCombo;