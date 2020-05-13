import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Navegacion from '../../components/layout/Navegacion';
import useCliente from '../../hooks/useCliente';


const Prestamo = () => {
    // const {firebase} = useContext(FirebaseContext);
    const {clientes} = useCliente("creado");

    useEffect(() => {
        console.log(clientes);
        console.log('listo');
        
    },[]);
    
    console.log('listo');


    // const {prestamo,setPrestamo} = useState({

    // });
    return ( 
        <>
        <Layout>
            <Navegacion titulo={"Registro"}>
                    <div className="row">
                        <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-lg-12 col-xl-8 col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-header">Registro de Prestamo <span className="fas fa-donate"></span></h5>
                                        </div>
                                        <div className="card-body">
                                            <form className="needs-validation" noValidate="">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                          <label htmlFor="">Cliente</label>
                                                          <select className="form-control" name="cliente" id="cliente">
                                                            <option selected value="">Seleccione un cliente</option>
                                                          </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="fechaentrega">Fecha de Entrega</label>
                                                        <input type="date" className="form-control" id="fechaentrega" value="" required=""/>
                                                        <div className="invalid-feedback">
                                                            Fecha de Entrega
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="monto">Monto</label>
                                                            <input type="number" className="form-control" id="monto" value="" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="cuotas">Cantidad de Cuotas</label>
                                                            <input type="number" className="form-control" id="cuotas" value="" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="tipotasa">Tipo de Tasa</label>
                                                            <select className="form-control" name="tipotasa" id="tipotasa">
                                                                <option selected value="">Seleccione un cliente</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="cuotas">Cantidad de Cuotas</label>
                                                            <input type="number" className="form-control" id="cuotas" value="" required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="periodopago">Periodo de Pagos</label>
                                                            <select className="form-control" name="periodopago" id="periodopago">
                                                                <option selected value="">Seleccione</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="same-address"/>
                                                            <label className="custom-control-label" htmlFor="same-address">Incuir gastos de operacion</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="save-info"/>
                                                            <label className="custom-control-label" htmlFor="save-info">Interes generados por mora</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4 col-lg-4 col-xl-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="d-flex justify-content-between align-items-center mb-0">
                                                        <span className="text-muted">Tabla amortizada</span>
                                          <span className="badge badge-secondary badge-pill">num cuotas</span>
                                                 </h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group mb-3">
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Product name</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$12</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Second product</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$8</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="my-0">Third item</h6>
                                                        <small className="text-muted">Brief description</small>
                                                    </div>
                                                    <span className="text-muted">$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between bg-light">
                                                    <div className="text-success">
                                                        <h6 className="my-0">Promo code</h6>
                                                        <small>EXAMPLECODE</small>
                                                    </div>
                                                    <span className="text-success">-$5</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between">
                                                    <span>Total (USD)</span>
                                                    <strong>$20</strong>
                                                </li>
                                            </ul>
                                                <button type="submit" className="btn btn-secondary">Imprimir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </Navegacion>
        </Layout>
        </>
     );
}
 
export default Prestamo;