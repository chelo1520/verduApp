import app from "../app/app.js";
import conectDB from "../config/db.js";

const PORT = process.env.PORT || 3000;


conectDB()
app.listen(PORT , () => {
    console.log(`Servidor corriendo en localhost:${PORT}`)
})