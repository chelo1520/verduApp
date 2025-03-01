import { NavLink } from "react-router-dom"
import { carritoContext } from "../../context/CarritoProvider"
import { useContext } from "react"


export const Navbar = () => {

  const { cart } = useContext(carritoContext)

  return (
    <div className="conatiner nav-container">
      <ul className="nav">

        <li className="nav-item">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-shop"></i>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/cart" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
            <div className="position-relative">
              <i className="bi bi-cart2"></i>
              <div className={cart?.length > 0 ? "punto-rojo-carrito" : ""}></div>
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/combos" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
          <i className="bi bi-fire"></i>
          </NavLink>
        </li>

      </ul>
    </div>
  )
}
