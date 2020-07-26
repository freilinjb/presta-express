import React,{useState, useEffect, useContext} from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';

import firebase from '../firebase';
import { FirebaseContext } from '../firebase';

//Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';
//Copia todo del crear-cuenta

const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: ''
}


const SignIn = () => {

    const { usuario } = useContext(FirebaseContext);

    useEffect(() => {
        if (usuario !== null) {
            console.log('esta loqueado');
            return Router.push("/");
            firebase.cargando = false;
        }
    },[]);



    const [error, setError] = useState('');
    
    const STATE_INICIAL = {
         email: '',
        password: ''
    }

    const {valores,errores,handleSubmit,handleChange, handleBlur} = 
        useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

    const {email, password} = valores;

    async function iniciarSesion() {
       try {
           const usuario = await firebase.login(email,password);
        //    console.log(usuario);
           
           Router.push('/');
       } catch (error) {
            console.log('Hubo un error al autenticar el usuario ',error.message);
            setError(error.message);
       }
    }

    return ( 
        <>
        {/* <!-- login page  --> */}
        {/* <!-- ============================================================== --> */}
        <Layout title={"Registrarse"}>
            <div className="splash-container mt-5">
                <div className="card ">
                    <div className="card-header text-center">
                        <a href="../index.html">
                            <h1 className="text-primary">PRESTA EXPRESS</h1>
                            {/* <img className="logo-img" src="/static/assets/images/logo.png" alt="logo"/> */}
                        </a>
                            <span className="splash-description">Por favor ingrese su información de usuario.</span>
                    </div>
                    <div className="card-body">
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="form-group">
                                <label htmlFor="email">Correo</label>
                                <input 
                                    className="form-control form-control-lg" 
                                    id="email" 
                                    name="email" 
                                    type="text" 
                                    placeholder="Ingrerse su correo" 
                                    autoComplete="off"
                                    value={email}
                                    onChange={handleChange}
                                    />
                            </div>
                            {errores.email && <p className="alert alert-danger">{errores.email}</p>}

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input 
                                    className="form-control form-control-lg" 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    placeholder="Ingrerse su Contraseña" 
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={handleChange}
                                    />
                            </div>
                            {errores.password && <p className="alert alert-danger">{errores.password}</p>}

                            <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox"/><span className="custom-control-label">Recuérdame</span>
                                </label>
                            </div>
                            {/* <button type="submit" className="btn btn-primary btn-lg btn-block">Iniciar sesión</button> */}
                            <button 
                                className="btn btn-block btn-primary" 
                                disabled={firebase.cargando}
                                type="submit">
                                    {firebase.cargando ? 
                                    (<>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Cargando...
                                    </>
                                    )
                                    :
                                    (
                                        <>
                                        Iniciar sesión
                                        </>
                                    )
                                    }
                                </button>
                        </form>
                    </div>
                    <div className="card-footer bg-white p-0  ">
                        <div className="card-footer-item card-footer-item-bordered">
                            <a href="#!" className="footer-link">Crear una Cuenta</a></div>
                        <div className="card-footer-item card-footer-item-bordered">
                            <a href="#!" className="footer-link">Olvido su clave</a>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    html,
                    body {
                        height: 100%;}
                    
                    body {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        padding-top: 40px;
                        padding-bottom: 40px;
                    }
                `}</style>
            </div>
        </Layout>
        {/* <!-- ============================================================== --> */}
        {/* <!-- end login page  --> */}
        </>
     );
}
 
export default SignIn;