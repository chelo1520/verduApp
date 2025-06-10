import { createContext, useEffect, useState } from "react"

export const combosContext = createContext()


export const CombosProvider = ({children}) => {

  const [combos, setCombos] = useState(null)
  const [comboProducto, setComboProducto] = useState([])
  
  useEffect(() => {
    const getCombos = async () => {
      try {
        const resultado = await fetch("../public/data/combos.json")
        const data = await resultado.json()
        setCombos(data)
      } catch (error) {
        console.log(`Error al obtener combos : ${error}`)
      }
    }

    getCombos()
  }, [])


  

  return (
    <combosContext.Provider value={{combos, setComboProducto, comboProducto}}>
        {children}
    </combosContext.Provider>
  )
}
