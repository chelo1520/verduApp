import { Router } from "express";

const route = Router()

route.post("/", (req, res) => {
    console.log("post recibido")

    res.send("server iniciado")
})


route.get("/" , (req, res) => {
    console.log("visitado")
    res.send("Backend listo")
})

export default route;