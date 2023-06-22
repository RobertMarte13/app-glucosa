import { NavLink } from "react-router-dom";
import { oneResponse } from "../../service/service";

const NavBar = () => {

  function getRespOne(id) {
    oneResponse(id).then((res) => console.log(res));
  }

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
          onClick={() => getRespOne(2)}
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
  );
};

export default NavBar;
