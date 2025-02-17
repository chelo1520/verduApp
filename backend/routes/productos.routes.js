import { Router } from "express";
import { cargaProducto, getProduct } from "../controllers/productosControllers.js";


const routeProducto = Router()

routeProducto.post("/", cargaProducto)

routeProducto.get("/" , getProduct)

export default routeProducto;