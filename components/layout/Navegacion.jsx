import React from 'react';
import Footer from './Footer';
import Link from 'next/link';
import {useRouter} from 'next/router';
import BreadCrumbs from './BreadCrumbs';

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
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">
                                Menu
                            </li>
                            <Link href="/"> 
                            <li className="nav-item ">
                                <a className={`nav-link ${router.pathname == '/' ? 'active' : ''}`}>
                                    <i className="fa fa-fw fa-user-circle"></i>
                                    Dashboard 
                                </a>
                            </li>
                            </Link>
                            <Link href="/Clientes"> 
                            <li className="nav-item">
                                
                                    <div className={`nav-link ${router.pathname == '/Clientes' ? 'active' : ''}`}>
                                        <i className="fas fa-user"></i>
                                        Clientes
                                    </div>
                            </li>
                            </Link>

                            <Link href="/Prestamos"> 
                            <li className="nav-item">
                                
                                    <div className={`nav-link ${router.pathname == '/Prestamos' ? 'active' : ''}`}>
                                        <i className="far fa-money-bill-alt"></i>
                                        Prestamos
                                    </div>
                            </li>
                            </Link>
                            <Link href="/Pagos">
                            <li className="nav-item">
                                
                                <div className={`nav-link ${router.pathname == '/Pagos' ? 'active' : ''}`}>
                                    <i className="far fa-money-bill-alt"></i>
                                    Pagos
                                </div>
                            </li>
                            </Link>
                            <Link href="/Sectores">
                            <li className="nav-item">
                                
                                <div className={`nav-link ${router.pathname == '/Sectores' ? 'active' : ''}`}>
                                    <i className="fas fa-map"></i>
                                    Sectores
                                </div>
                            </li>
                            </Link>
                            <li className="nav-item ">
                                <a className="nav-link" href="#!" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms"></i>Forms</a>
                                <div id="submenu-4" className="collapse submenu" >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-elements.html">Form Elements</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="form-validation.html">Parsely Validations</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="multiselect.html">Multiselect</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table"></i>Tables</a>
                                <div id="submenu-5" className="collapse submenu" >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="general-table.html">General Tables</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="data-tables.html">Data Tables</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-divider">
                                Features
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i className="fas fa-fw fa-columns"></i>Icons</a>
                                <div id="submenu-8" className="collapse submenu" >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="icon-fontawesome.html">FontAwesome Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icon-material.html">Material Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icon-simple-lineicon.html">Simpleline Icon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icon-themify.html">Themify Icon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icon-flag.html">Flag Icons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icon-weather.html">Weather Icon</a>
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
                <BreadCrumbs titulo={props.titulo}/>
                {/* <!-- ============================================================== --> */}
                {/* <!-- end pageheader --> */}
                {/* <!-- ============================================================== --> */}
                {/* <div className="row"> */}
                    {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"> */}
                        {/* <h3 className="text-center">Content goes here!</h3> */}
                    {/* </div> */}
                {/* </div> */}
                {props.children}
                <Footer/>

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
}
 
export default Navegacion;