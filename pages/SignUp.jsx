import React from 'react';
import Layout from '../components/layout/Layout';

const SignUp = () => {
    return ( 
        <>
        {/* <!-- SingUp page  --> */}
        {/* <!-- ============================================================== --> */}
        <Layout>
            <form className="splash-container mt-5">
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-1">Formulario de Registro</h3>
                        <p>Por favor ingrese su información de usuario.</p>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input className="form-control form-control-lg" type="text" name="nick" required="" placeholder="Username" autoComplete="off"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="E-mail" autoComplete="off"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-lg" id="pass1" type="password" required="" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-lg" required="" placeholder="Confirm"/>
                        </div>
                        <div className="form-group pt-2">
                            <button className="btn btn-block btn-primary" type="submit">Registrar Mi Cuenta</button>
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox"/><span className="custom-control-label">Al crear una cuenta, <a href="#!"> acepta los términos y condiciones</a></span>
                            </label>
                        </div>
                        <div className="form-group row pt-0">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                <button className="btn btn-block btn-social btn-facebook " type="button">Facebook</button>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <button className="btn  btn-block btn-social btn-twitter" type="button">Twitter</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white">
                        <p>¿Ya eres miembro? <a href="#" className="text-secondary">Entre aquí.</a></p>
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
            </form>
        </Layout>
        {/* <!-- ============================================================== --> */}
        {/* <!-- end login page  --> */}
        </>
     );
}
 
export default SignUp;