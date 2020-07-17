import React, { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { FirebaseContext } from "../../firebase";
import useParametrosUsuario from "../../hooks/useParametrosUsuario";

const NavUsuario = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
  const { parametrosNegocios } = useParametrosUsuario();

  const cerrarSession = () => {
    firebase.cerrarSesion();
    Router.push("/SignIn");
  };

  return (
    <>
      {/* Elimina el icono de la barra de navegacion */}
      <style jsx>{`
        li {
          list-style-type: none;
        }
      `}</style>
      <li className="nav-item dropdown nav-user">
        <a
          className="nav-link nav-user-img"
          href="#!"
          id="navbarDropdownMenuLink2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={parametrosNegocios.length > 0 && parametrosNegocios[0].urlLogo ? parametrosNegocios[0].urlLogo : "/static/assets/images/avatar-1.jpg"}
            alt=""
            className="user-avatar-md rounded-circle"
          />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right nav-user-dropdown"
          aria-labelledby="navbarDropdownMenuLink2"
        >
          <div className="nav-user-info">
            <h5 className="mb-0 text-white nav-user-name">
              {usuario.displayName}
            </h5>
          </div>
          <a className="dropdown-item" href="#!">
            <i className="fas fa-user mr-2"></i>Cuenta
          </a>
          <Link
            href="/Configuracion">
            <a
              className={`dropdown-item ${
                Router.pathname == `/Configuracion`
                  ? "active"
                  : ""
              }`}
            >
              <i className="fas fa-cog mr-2"></i>Configuracion
            </a>
          </Link>

            <a className="dropdown-item" onClick={() => cerrarSession()}>
              <span className="fas fa-power-off mr-2"></span>
              Cerrar Sesion
            </a>
        </div>
      </li>
    </>
  );
};

export default NavUsuario;
