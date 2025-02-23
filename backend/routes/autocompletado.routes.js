import { Router } from "express";
import autocompletado from "../controllers/autocompletado.js";


const routeDireccion = Router()

routeDireccion.get("/", autocompletado)

export default routeDireccion;