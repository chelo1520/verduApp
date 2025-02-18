import { Router } from "express";
import { actualizarProducto, cargaProducto, eliminarProducto, getProduct } from "../controllers/productosControllers.js";


const routeProducto = Router()

routeProducto.post("/", cargaProducto)

routeProducto.get("/" , getProduct)

routeProducto.delete("/:id", eliminarProducto)

routeProducto.patch("/:id", actualizarProducto)

export default routeProducto;