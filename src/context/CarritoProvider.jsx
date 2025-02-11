import { createContext, useState } from "react"

export const carritoContext = createContext()

export const CarritoProvider = ({children}) => {
    
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
        setCart((cart) => {
          const nuevoCart = cart.filter((item) => item.nombre !== product.nombre)
    
          const sumador = nuevoCart.reduce((acc, item) => acc + item.sumaPrecio,0)
          
          setTotal(sumador)
    
          return nuevoCart
        })
      }
    
      const incrementarKilos = (producto) => {
        setCart((cart) => {
          const nuevoCart = cart.map((item) =>
            item.nombre === producto.nombre
              ? { ...item, kilos: item.kilos + 1, sumaPrecio: item.precio * (item.kilos + 1) }
              : item
          );
      
          const sumador = nuevoCart.reduce((acumulador, item) => acumulador + item.sumaPrecio, 0);
          setTotal(sumador);
      
          return nuevoCart; 
        });
      };
      
      
    
      const restarKilos = (producto) => {
        setCart((cart) => {
          const nuevoCart = cart.map((item) =>
            item.nombre === producto.nombre
              ? item.kilos > 1
                ? { ...item, kilos: item.kilos - 1, sumaPrecio: item.precio * (item.kilos - 1) }
                : item
              : item
          );
          
          const sumador = nuevoCart.reduce((acc, item) => acc + item.sumaPrecio, 0)
          setTotal(sumador)
          return nuevoCart;
        });
      };

  return (
    <carritoContext.Provider value={{
        agregarCarrito, 
        cart, 
        eliminarProducto, 
        incrementarKilos, 
        restarKilos,
        total
    }}>
        {children}
    </carritoContext.Provider>
  )
}
