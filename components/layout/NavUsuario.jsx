import React, { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { FirebaseContext } from "../../firebase";

const NavUsuario = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

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
            src="/static/assets/images/avatar-1.jpg"
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
          <Link href="/usuario/configuracion/[id]" as={`/usuario/configuracion/${usuario.uid}`}>
            <a className={`dropdown-item ${Router.pathname == `/usuario/configuracion/${usuario.uid}` ? 'active' : ''}`}>
              <i className="fas fa-cog mr-2"></i>Configuracion
            </a>
          </Link>
          <a className="dropdown-item" href="#!">
            <span
              className="fas fa-power-off mr-2"
              onClick={() => cerrarSession()}
            ></span>
            Cerrar Sesion
          </a>
        </div>
      </li>
    </>
  );
};

export default NavUsuario;
