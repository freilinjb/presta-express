import React from 'react';
import Layout from '../../components/layout/Layout';
import Navegacion from '../../components/layout/Navegacion';


const Cliente = () => {
    return ( 

        <Layout>
            <Navegacion>
            <div classNameName="row">
            {/* <!-- ============================================================== --> */}
            {/* <!-- validation form --> */}
            {/* <!-- ============================================================== --> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Registro de Cliente</h5>
                    <div className="card-body">
                        <form className="needs-validation" novalidate>
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <label htmlFor="validationCustom01">Nombre</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <label htmlFor="validationCustom02">Apellido</label>
                                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <label htmlFor="validationCustomUsername">Correo electronico</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div>
                                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <label htmlFor="telefono">Telefono</label>
                                    <input type="text" className="form-control" id="telefono" name="telefono" placeholder="Ejemplo (849)-888-9999" required/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="form-group">
                                    <label htmlFor="sector">Sector</label>
                                      <select className="form-control" name="sector" id="sector">
                                        <option>--Seleccione el sector</option>
                                      </select>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                    <label htmlFor="validationCustom04">State</label>
                                    <input type="text" className="form-control" id="validationCustom04" placeholder="State" required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                    <label htmlFor="validationCustom05">Zip</label>
                                    <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </div>
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