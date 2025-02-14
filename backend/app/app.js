import "dotenv/config"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import route from "../routes/productos.routes.js"

const app = express()

//Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())



//Rutas
app.use("/",route)


export default app;