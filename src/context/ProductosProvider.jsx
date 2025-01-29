import { useState, useEffect} from "react"
import { createContext } from "react"

export const productosContext = createContext()


export const ProductosProvider = ({children}) => {

  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  const agregarCarrito = (product, kilos) => {
    
    setCart((cart) => {
      const productoExistente = cart.find((item) => item.nombre === product.nombre);

      if(productoExistente){
        return cart.map((item) => 
                  item.nombre === product.nombre ? {...item , kilos: item.kilos + kilos } : item
                )
      }else{
        return [...cart, {...product, kilos}];
      }
     
    })
  }
  
  const eliminarProducto = (product) => {
    setCart((cart) => cart.filter((item) => item.nombre !== product.nombre))
  }

  const incrementarKilos = (nombre) => {
    setCart((cart) =>
      cart.map((item) =>
        item.nombre === nombre ? { ...item, kilos: item.kilos + 1 } : item
      )
    );
  };

  const restarKilos = (nombre) => {
    setCart((cart) => cart.map((item) => 
      item.nombre === nombre ? item.kilos > 1 ? {...item, kilos: item.kilos - 1} : item : item))
  }


  useEffect(() => {

    const fetchProductos = async () => {
      try {
        const resultado = await fetch("../public/data/productos.json");
        const data = await resultado.json();
        setProductos(data)
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductos();
  
  }, [])
  

  return (
    <productosContext.Provider value={{
        productos, 
        agregarCarrito, 
        cart, 
        eliminarProducto, 
        incrementarKilos, 
        restarKilos
      }}>

      {children}
    </productosContext.Provider>
  )
}
