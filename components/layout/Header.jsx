import React,{useContext} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navegacion from './Navegacion';
import { FirebaseContext } from '../../firebase';
import NavUsuario from './NavUsuario';


const Header = (props) => {
    const router = useRouter();
    
    const { usuario, firebase } = useContext(FirebaseContext);

    return ( 
        <>
        <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">P - EXPRESS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${router.pathname == '/' ? 'active' : ''}`}>
                        <Link href="/">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className={`nav-item dropdown  ${router.pathname == '/add/Prestamo' ? 'active' : ''}`}>
                        <a className="nav-link dropdown-toggle" href="#" id="registrar" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Registrar
                        </a>
                        <div className="dropdown-menu" aria-labelledby="registrar">
                        <Link href="/add/Cliente">
                            <a className={`dropdown-item ${router.pathname == '/add/Cliente' ? 'active' : ''}`}>Cliente</a>
                        </Link>
                        <Link href="/add/Prestamo">
                            <a className={`dropdown-item ${router.pathname == '/add/Prestamo' ? 'active' : ''}`}>Prestamo</a>
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link href="/Sectores">
                            <a className={`dropdown-item ${router.pathname == '/Sectores' ? 'active' : ''}`}>Sector</a>
                        </Link>
                        </div>
                    </li>
                    </ul>
                    {/* NOTIFICACION */}
                    {/* CONECCION */}
                    {usuario ? 
                    (
                        <>
                            <div className="form-inline">
                            {/* <!-- Another variation with a button --> */}
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Buscar..."/>
                                <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                                </div>
                            </div>
                            </div>
                    
                            <NavUsuario/>
                        </>
                    ) 
                    :
                    (
                        <>
                            <form className="form-inline my-2 my-lg-0 p-3">
                                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                                <Link href="/SignIn"><a className="btn btn-outline-primary m-2 my-sm-0" href="#!">Iniciar Sesion</a></Link>
                                <Link href="/SignUp"><a className="btn btn-outline-secondary m-2 my-sm-0" href="#!">Registrarse</a></Link>
                            </form>
                        </>
                    )}
                </div>
            </nav>
        </div>
        </>
     );
}
 
export default Header;