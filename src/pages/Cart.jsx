import { useState } from "react"

export const Cart = () => {

  const [productsCarritos, setProductsCarritos] = useState(null)
  const [cont, setCont] = useState(0);

  const contadorKilos = (bool) => {
    if(bool){
      setCont(cont + 1)
    }
    if(!bool && cont > 0){
      setCont(cont - 1)
    }
  }

  return (
    <div>
      <h2>My Carrito</h2>

      <div className="card row d-flex justify-content-center card-carrito">
        <div className="col-4">
          <img src="../public/img-verduras/tomate.webp" className="img-carrito" alt="" />
        </div>
        <div className="col-4 sumador-y-titulo d-flex justify-content-center">
          
          <div className="titulo-sub">
            <h3>Titulo</h3>
            <h5>subtitulo</h5>
          </div>

          <div className="botonesCantidad d-flex justify-content-center align-items-center row">
            <button className="boton-sumar bg-danger col" onClick={() => contadorKilos(false)}>-</button>
            <p className="contador-kg col">{cont}</p>
            <button className="boton-sumar col" onClick={() => contadorKilos(true)}>+</button>
          </div>

        </div>
        <div className="col-4 precio-carrito m-0 d-flex flex-column align-items-end justify-content-between">
          <button className="boton-quitar btn btn-secondary">X</button>
          <p className="precio">$1500</p>
        </div>
      </div>

    </div>
  )
}
