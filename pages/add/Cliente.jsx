import React from 'react';
import Router from 'next/router';
import Layout from '../../components/layout/Layout';
import Navegacion from '../../components/layout/Navegacion';


import firebase from '../firebase';

//Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';
//Copia todo del crear-cuenta
const Cliente = () => {
    return ( 

        <Layout>
            <Navegacion>
            <div className="row justify-content-center">
            {/* <!-- ============================================================== --> */}
            {/* <!-- validation form --> */}
            {/* <!-- ============================================================== --> */}
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                <div className="card">
                    <h5 className="card-header">Registro de Cliente</h5>
                    <div className="card-body">
                        <form 
                            className="needs-validation" 
                            noValidate
                            onSubmit={handleSubmit}
                            >
                            <fieldset>
                                <legend>Datos Personales</legend>
                                <div className="form-row">
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ingrese el nombre" required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" className="form-control" id="apellido" placeholder="Apellido" value="Otto" required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                    <label htmlFor="apodo">Apodo</label>
                                    <input type="text" className="form-control" id="apodo" placeholder=""/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="sexo">Sexo</label>
                                    <select className="form-control" name="sexo" id="sexo">
                                        <option>Hombre</option>
                                        <option>Mujer</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="cedula">Cedula de Identificaion</label>
                                <input type="text" className="form-control" id="cedula" placeholder="Identificacion"/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="foto">Foto de Perfil</label>

                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="foto"/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile04">Elegir archivo</label>
                                    </div>
                                    </div>
                                </div>
                            </div>                                

                            <legend>Ubicacion</legend>
                            <div className="form-row">
                                <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor="telefono">Telefono</label>
                                <input type="text" className="form-control" id="telefono" placeholder="Ejemplo (809-888-9999)" required/>
                                
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor="correo">Correo</label>
                                <input type="text" className="form-control" id="correo" placeholder="Ejemplo nombre@gmail.com" required/>
                                
                                </div>
                                
                                <div className="w-100"></div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor="sexo">Sector</label>
                                    <select className="form-control" name="sexo" id="sexo">
                                        <option>Hombre</option>
                                        <option>Mujer</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="validationCustom02">Direccion</label>
                                    <input type="text" className="form-control" id="cedula" placeholder="Identificacion"/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                      <label htmlFor="">Observacion</label>
                                      <textarea className="form-control" name="observacion" id="observacion" rows="2"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button 
                                className="btn btn-primary" 
                                type="submit">Guardar</button>
                                
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- ============================================================== --> */}
            {/* <!-- end validation form --> */}
            {/* <!-- ============================================================== --> */}
    </div> 
    </Navegacion>   
    </Layout>
     );
}
 
export default Cliente;