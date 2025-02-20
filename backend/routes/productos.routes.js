import { Router } from "express";
import { getProduct } from "../controllers/productosControllers.js";


const routeProducto = Router()

routeProducto.get("/" , getProduct)



export default routeProducto;