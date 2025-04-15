import { useState, useEffect} from "react"
import { createContext } from "react"

export const productosContext = createContext()


export const ProductosProvider = ({children}) => {

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {

    const fetchProductos = async () => {
      try {
        const resultado = await fetch("http://localhost:3000/productos");
        const data = await resultado.json();
        setProductos(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductos();    
  }, [])

  

  return (
    <productosContext.Provider value={{productos}}>
      {children}
    </productosContext.Provider>
  )
}
