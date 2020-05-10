import React,{useState} from 'react';
import Layout from '../components/layout/Layout';


import firebase from '../firebase';

const SignIn = () => {

    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    });


    const onChange =e=> {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const { email, password} = usuario;




    async function inisiarSesion() {
        try{
            const usuario = await firebase.login(email, password);

            Router.push('/');

       } catch (error) {
            console.log('Hubo un error al autenticar el usuario ',error.message);
       }
    }

    const onSubmit =e=> {
        e.preventDefault();
        inisiarSesion();
    }

    return ( 
        <>
        <Layout>
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="index.html">
                                {/* <img className="align-content" src="/static/images/logo.png" alt="Logo"/> */}
                            </a>
                        </div>
                        <div className="login-form">
                            <form className="needs-validation" noValidate
                                onSubmit={onSubmit}
                            
                            >
                                <div className="form-group">
                                    <label>Correo</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control" 
                                        placeholder="Ingrese su Correo" 
                                        value={email}
                                        onChange={onChange}
                                        required/>
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="form-control" 
                                        placeholder="Ingrerse su Contrasena" 
                                        value={password}
                                        onChange={onChange}
                                        required/>
                                    
                                    
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> Remember Me
                                    </label>
                                    <label className="pull-right">
                                        <a href="#">Olvidó su contraseña?</a>
                                    </label>

                                </div>
                                <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                <div className="social-login-content">
                                    <div className="social-button">
                                        <button type="button" className="btn social facebook btn-flat btn-addon mb-3"><i className="ti-facebook"></i>Iniciar sesión usando Facebook</button>
                                        <button type="button" className="btn social twitter btn-flat btn-addon mt-2"><i className="ti-twitter"></i>Iniciar sesión usando Twitter</button>
                                    </div>
                                </div>
                                <div className="register-link m-t-15 text-center">
                                    <p>¿No tienes cuenta? <a href="#">Registrate aquí</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <style jsx global>{`
                    body {
                        background-color: #494747;
                    }
                `}</style>
            </div>
        </Layout>
        </>
     );
}
 
export default SignIn;