import React,{useContext} from 'react';
import Link from 'next/link';
import Navegacion from './Navegacion';
import { FirebaseContext } from '../../firebase';


const Header = (props) => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return ( 
        <>
            <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <a className="navbar-brand" href="../index.html">PRESTA-EXPRESS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-right-top">
                        <li className="nav-item">
                            

                        </li>
                        {/* NOTIFICACION */}
                        {/* CONECCION */}
                        {usuario ? 
                        (
                            <>
                                <div id="custom-search" className="top-search-bar form-inline">
                                    <input className="form-control" type="text" placeholder="Search.."/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </div>
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
                        
                    </ul>
                </div>
            </nav>
        </div>
        </>
     );
}
 
export default Header;