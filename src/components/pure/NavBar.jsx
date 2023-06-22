import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "btn-primary" : "btn-danger"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crearregistro"
          className={({ isActive }) =>
            `${isActive ? "btn-primary" : "btn-danger"}`
          }
        >
          Registro
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/updateregistro"
          className={({ isActive }) =>
            `${isActive ? "btn-primary" : "btn-danger"}`
          }
        >
          Editar Registro
        </NavLink>
      </li>
    </ul>
  )
}

export default NavBar
