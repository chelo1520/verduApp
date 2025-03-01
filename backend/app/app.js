import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"
import routeProducto from "../routes/productos.routes.js"
import routeCombo from "../routes/combos.routes.js"
import routeAdmin from "../routes/admin.routes.js"
import routeDireccion from "../routes/autocompletado.routes.js"
import verificarToken from "../middlewares/verificarToken.js"

const app = express()

//Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser());

//Rutas
app.use("/productos", routeProducto)
app.use("/combos", routeCombo)
app.use("/autocompletado", routeDireccion)
app.use("/dashboard", routeAdmin)


export default app;