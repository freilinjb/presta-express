import React from "react";
import Footer from "./Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import BreadCrumbs from "./BreadCrumbs";

const Navegacion = (props) => {
  const router = useRouter();
  return (
    <>
      {/* <!-- left sidebar --> */}
      {/* <!-- ============================================================== --> */}
      <div className="nav-left-sidebar sidebar-dark">
        <div className="menu-list">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="d-xl-none d-lg-none">Dashboard</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column">
                <li className="nav-divider">Menu</li>
                {/* <Link href="/">
                  <li className="nav-item ">
                    <a
                      className={`nav-link ${
                        router.pathname == "/" ? "active" : ""
                      }`}
                    >
                      <i className="fa fa-fw fa-user-circle"></i>
                      Dashboard
                    </a>
                  </li>
                </Link>
                <Link href="/Clientes">
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        router.pathname == "/Clientes" ? "active" : ""
                      }`}
                    >
                      <i className="fas fa-user"></i>
                      Clientes
                    </div>
                  </li>
                </Link>

                <Link href="/Solicitudes">
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        router.pathname == "/Solicitudes" ? "active" : ""
                      }`}
                    >
                      <i className="far fa-money-bill-alt"></i>
                      Solicitudes
                    </div>
                  </li>
                </Link>

                <Link href="/Prestamos">
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        router.pathname == "/Prestamos" ? "active" : ""
                      }`}
                    >
                      <i className="far fa-money-bill-alt"></i>
                      Prestamos
                    </div>
                  </li>
                </Link>
                <Link href="/Pagos">
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        router.pathname == "/Pagos" ? "active" : ""
                      }`}
                    >
                      <i className="fas fa-hand-holding-usd"></i>
                      Cuotas por cobrar
                    </div>
                  </li>
                </Link>
                <Link href="/Sectores">
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        router.pathname == "/Sectores" ? "active" : ""
                      }`}
                    >
                      <i className="fas fa-map"></i>
                      Sectores
                    </div>
                  </li>
                </Link>

                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="#!"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-4"
                    aria-controls="submenu-4"
                  >
                    <i className="fab fa-fw fa-wpforms"></i>Garantias
                  </a>
                  <div id="submenu-4" className="collapse submenu">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="form-elements.html">
                          Solidarias
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="form-validation.html">
                          Vehiculos
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="multiselect.html">
                          Hipotecarios
                        </a>
                      </li>
                    </ul>
                  </div>
                </li> */}

                <li className="nav-divider">Features</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    aria-expanded="true"
                    data-target="#entrada-datos"
                    aria-controls="entrada-datos"
                  >
                    <i className=" fas fa-parachute-box"></i>Entrada de datos
                  </a>
                  <div id="entrada-datos" className="submenu collapse show">
                    <ul className="nav flex-column">
                      <li className="nav-item show">
                        <Link href="/Clientes">
                          <a
                            className={`nav-link ${
                              router.pathname == "/Clientes" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="fas fa-user"></i>
                            Clientes{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/Solicitudes">
                          <a
                            className={`nav-link ${
                              router.pathname == "/Solicitudes" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="far fa-money-bill-alt"></i>
                            Solicitudes{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/Prestamos">
                          <a
                            className={`nav-link ${
                              router.pathname == "/Prestamos" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="far fa-money-bill-alt"></i>
                            Prestamos{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/Garantias">
                          <a
                            className={`nav-link ${
                              router.pathname == "/Garantias" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="fab fa-fw fa-wpforms"></i>
                            Garantias{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/Sectores">
                          <a
                            className={`nav-link ${
                              router.pathname == "/Sectores" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="fas fa-map"></i>
                            Sectores{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="icon-flag.html">
                          Cobrador
                        </a>
                      </li>
                      <li className="nav-item">
                      <Link href="/Bancos">
                          <a
                            className={`nav-link ${
                              router.pathname == "/Bancos" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="fas fa-map"></i>
                            Bancos{" "}
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                      <Link href="/Usuarios">
                          <a
                            className={`nav-link ${
                              router.pathname == "/Usuarios" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="far fa-money-bill-alt"></i>
                            Usuarios{" "}
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="icon-flag.html">
                          Gastos
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#!"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-5"
                    aria-controls="submenu-5"
                  >
                    <i className=" fas fa-map-signs"></i>Transacción
                  </a>
                  <div id="submenu-5" className="collapse submenu">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="data-tables.html">
                          Adjudicacion de bienes
                        </a>
                      </li>
                      <li className="nav-item">
                      <Link href="/pagos">
                          <a
                            className={`nav-link ${
                              router.pathname == "/pagos" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="far fa-money-bill-alt"></i>
                            Pagos de cuotas{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/ProcesamientoSolicitud">
                          <a
                            className={`nav-link ${
                              router.pathname == "/ProcesamientoSolicitud" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="far fa-money-bill-alt"></i>
                            Procesamiento de Solicitud{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/DesembolsoPrestamo">
                          <a
                            className={`nav-link ${
                              router.pathname == "/DesembolsoPrestamo" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="far fa-money-bill-alt"></i>
                            Desembolso de prestamos{" "}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#!"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-6"
                    aria-controls="submenu-6"
                  >
                    <i className="fab fa-algolia"></i>Controles
                  </a>
                  <div id="submenu-6" className="collapse submenu">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link href="/controles/Usuarios">
                          <a
                            className={`nav-link ${
                              router.pathname == "/controles/Usuarios" ? "active" : ""
                            }`}
                          >
                            {" "}
                            <i className="far fa-money-bill-alt"></i>
                            Controles de usuarios{" "}
                          </a>
                        </Link>

                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="data-tables.html">
                          Controles generales
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="data-tables.html">
                        Parámetros de préstamos generales
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#!"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-10"
                    aria-controls="submenu-10"
                  >
                    <i className="fas fa-fw fa-columns"></i>Consultas/Reportes
                  </a>
                  <div id="submenu-10" className="collapse submenu">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="icon-fontawesome.html">
                          Clientes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="icon-material.html">
                          Pagos
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="icon-simple-lineicon.html"
                        >
                          Solicitudes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="icon-themify.html">
                          Garantias
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="icon-flag.html">
                          Bienes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="icon-flag.html">
                        Transacciones 
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="icon-flag.html">
                         Préstamos
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="icon-flag.html">
                         Operaciones de usuarios
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#!"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#utilidad"
                    aria-controls="utilidad"
                  >
                    <i className="fas fa-fw fa-columns"></i>Utilidades
                  </a>
                  <div id="utilidad" className="collapse submenu">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="icon-fontawesome.html">
                          Calculadora de prestamos
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- ============================================================== --> */}
      {/* <!-- end left sidebar --> */}
      {/* <!-- wrapper  --> */}
      {/* <!-- ============================================================== --> */}
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          {/* <!-- ============================================================== --> */}
          {/* <!-- pageheader --> */}
          {/* <!-- ============================================================== --> */}
          <BreadCrumbs titulo={props.titulo} />
          {/* <!-- ============================================================== --> */}
          {/* <!-- end pageheader --> */}
          {/* <!-- ============================================================== --> */}
          {/* <div className="row"> */}
          {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"> */}
          {/* <h3 className="text-center">Content goes here!</h3> */}
          {/* </div> */}
          {/* </div> */}
          {props.children}
          <Footer />
        </div>
        {/* <!-- ============================================================== --> */}
        {/* <!-- footer --> */}
        {/* <!-- ============================================================== --> */}
        {/* <!-- ============================================================== --> */}
        {/* <!-- end footer --> */}
        {/* <!-- ============================================================== --> */}
      </div>
    </>
  );
};

export default Navegacion;
