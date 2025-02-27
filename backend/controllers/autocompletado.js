import axios from "axios";


const autocompletado = async(req, res) =>{
    const { query } = req.query;
    const key = process.env.MAPBOX_TOKEN_KEY

    if(!query){
        return res.status(400).json({mensaje: "No hay query !"})
    }

    try {
        const direccionCompleta = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`, {
            params: {
                access_token: key,
                autocomplete: true,
                limit: 1
            }
        })

        console.log(key)
        res.json(direccionCompleta.data)

    } catch (error) {
        res.status(500).json({mensaje: `Error en el servidor: ${error}`})
    }
}

export default autocompletado;