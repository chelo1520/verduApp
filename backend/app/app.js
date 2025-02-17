import "dotenv/config"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import routeProducto from "../routes/productos.routes.js"
import routeCombo from "../routes/combos.routes.js"

const app = express()

//Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())



//Rutas
app.use("/productos", routeProducto)
app.use("/combos", routeCombo)


export default app;