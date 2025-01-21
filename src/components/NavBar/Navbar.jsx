import { NavLink } from "react-router-dom"


export const Navbar = () => {
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
            <i className="bi bi-cart2"></i>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-question-circle"></i>
          </NavLink>
        </li>

      </ul>
    </div>
  )
}
