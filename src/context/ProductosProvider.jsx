import { useState, useEffect} from "react"
import { createContext } from "react"

export const productosContext = createContext()


export const ProductosProvider = ({children}) => {

  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(null)

  const agregarCarrito = (product, kilos) => {
    
    setCart((cart) => {
      
      const productoExistente = cart.find((item) => item.nombre === product.nombre);

      const nuevoCart = productoExistente ?
        cart.map((item) => 
                  item.nombre === product.nombre ? {...item , kilos: item.kilos + kilos, sumaPrecio: item.precio * (item.kilos + 1)} : item
                )
      :
        [...cart, {...product, kilos, sumaPrecio: product.precio * kilos  }];
      
        const sumador = nuevoCart.reduce((acumulador, item) => acumulador + item.sumaPrecio, 0)
        setTotal(sumador)
    
        return nuevoCart;
    })

  }

  const eliminarProducto = (product) => {
    setCart((cart) => cart.filter((item) => item.nombre !== product.nombre))
  }

  const incrementarKilos = (producto) => {
    setCart((cart) =>
      cart.map((item) =>
        item.nombre === producto.nombre ? { ...item, kilos: item.kilos + 1, sumaPrecio: item.precio * (item.kilos + 1)} : item
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
        const resultado = await fetch("../public/data/productosLista.json");
        const data = await resultado.json();
        setProductos(data)
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
        restarKilos,
        total
      }}>

      {children}
    </productosContext.Provider>
  )
}
