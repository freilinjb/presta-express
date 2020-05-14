import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import Navegacion from '../../components/layout/Navegacion';
import useCliente from '../../hooks/useCliente';
import useCalculadora from '../../hooks/useCalculadora';
import { FirebaseContext } from "../../firebase";

//Validaciones
import useValidacion from '../../hooks/useValidacion';
import validarIniciarPrestamo from '../../validacion/validarIniciarPrestamo';

const Prestamo = () => {
    const { usuario, firebase } = useContext(FirebaseContext);
    const {clientes} = useCliente("creado");
    const {calcular, detalleCuota} = useCalculadora();

    let resultado = [];

    useEffect(() => {
        // setDetallecuota(calcular(3000, 10, 6, "diario", "mensual"));

        // columna.map(p=> {
        //     p.map(m=>{
        //         console.log(m);
        //     });
        // })
        calcular(3000, 10, 6, "diario", "mensual");
        // detalleCuota = [];
        console.log(detalleCuota);
        
        
    },[]);

    // for (const prop in periodo) {
    //     return periodo[prop];
    //   }

    const STATE_INICIAL = {
        idCliente:'',
        nombrerCliente:'',
        entrega:'',
        monto:'',
        cuotas:'', 
        tipoTasa:'',
        periodoPagos:'',
        cargosPorMora:'on',
    }
    
    const {
        valores,
        errores,
        handleSubmit,
        handleChange,
    } = useValidacion(STATE_INICIAL, validarIniciarPrestamo, crearPrestamo);

    const {idCliente, entrega, monto, cuotas, tipoTasa, tasaInteres, periodoPagos, cargosPorMora} = valores;

    // useEffect(() => {
    //     console.log(clientes);
        
    // },[clientes]);
    
    //Crear el objeto de nuevo prestamo
    async function crearPrestamo() {
        const prestamo = {
            cliente: {
                id:'',
                nombre:''
            },
            entrega:'',
            monto:'',
            cuotas:'',
            tipoTasa:'',
            tasaInteres:'',
            periodoPagos:'',
            cargosPorMora:'',
            detallesCuotas:[],
            creado: Date.now(),
            cliente:{
                id:'',
                nombre:''
            },
            creador: {
            id: usuario.uid,
            nombre: usuario.displayName,
            }
        };
        console.log();
        
        //Insertar en la BD
        // firebase.db.collection("Prestamos").add(prestamo);

        //Despues de registrar un Producto redireccionar al
        //Inicio
        return router.push("/");
    }
    return ( 
        <>
        <Layout>
            <Navegacion titulo={"Registro"}>
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-lg-12 col-xl-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-header">Registro de Prestamo <span className="fas fa-donate"></span></h5>
                                        </div>
                                        <div className="card-body">
                                            <form 
                                                className="needs-validation" 
                                                noValidate=""
                                                onSubmit={crearPrestamo}>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                          <label htmlFor="idCliente">Cliente</label>
                                                          <select className="form-control" name="cliente" id="idCliente" value={idCliente} onChange={handleChange}>
                                                            <option selected disabled value="">Seleccione un cliente</option>
                                                            {clientes.map(cliente=> (<option key={cliente.id} value={cliente.id} >{cliente.nombre + ' ' + cliente.apellido}</option>))}
                                                            {!clientes && (<p>No tiene clientes registrados</p>)}
                                                          </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="entrega">Fecha de Entrega</label>
                                                        <input type="date" className="form-control" id="entrega" name="entrega" value={entrega} onChange={handleChange} required=""/>
                                                        <div className="invalid-feedback">
                                                            Fecha de Entrega
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="monto">Monto</label>
                                                            <input type="number" className="form-control" id="monto" name="monto" value={monto} onChange={handleChange} required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="cuotas">Cantidad de Cuotas</label>
                                                            <input type="number" className="form-control" id="cuotas" name="cuotas" value={cuotas} onChange={handleChange} required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="tipoTasa">Tipo de Tasa</label>
                                                            <select className="form-control" name="tipoTasa" id="tipoTasa" value={tipoTasa} onChange={handleChange}>
                                                                <option selected value="">--Seleccione--</option>
                                                                <option selected value="mensual">Mensual</option>
                                                                <option selected value="anual">Anual</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="tasaInteres">Tasa de Interes</label>
                                                            <input type="number" className="form-control" id="tasaInteres" name="tasaInteres" value={tasaInteres} onChange={handleChange} required=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="periodoPagos">Periodo de Pagos</label>
                                                            <select className="form-control" name="periodoPagos" id="periodoPagos" value={periodoPagos} onChange={handleChange}>
                                                                <option value="">--Seleccione--</option>
                                                                <option value="diario">Diario</option>
                                                                <option value="semanal">Semanal</option>
                                                                <option value="quincenal">Quincenal</option>
                                                                <option value="mensual">Mensual</option>
                                                                <option value="bimestral">Bimestral</option>
                                                                <option value="trimestral">Trimestral</option>
                                                                <option value="cuatrimestral">Cuatrimestral</option>
                                                                <option value="semestral">Semestral</option>
                                                                <option value="anual">Anual</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cargosPorMora" name="cargosPorMora" value="off" checked={cargosPorMora === 'on'} defaultChecked={false} onChange={handleChange}/>
                                                            <label className="custom-control-label" htmlFor="cargosPorMora">Incluir interes generados por mora</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-6 col-lg-6 col-xl-6">
                        <div className="card">
                            <h5 className="card-header">Top Selling Products</h5>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="bg-light">
                                            <tr className="border-0">
                                                <th className="border-0">#</th>
                                                <th className="border-0">Interés</th>
                                                <th className="border-0">Abono al capital</th>
                                                <th className="border-0">Valor de la cuota	</th>
                                                <th className="border-0">Saldo al capital</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Product #1 </td>
                                                <td>id000001 </td>
                                                <td>20</td>
                                                <td>$80.00</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Product #2 </td>
                                                <td>id000002 </td>
                                                <td>12</td>
                                                <td>$180.00</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Product #3 </td>
                                                <td>id000003 </td>
                                                <td>23</td>
                                                <td>$820.00</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Product #4 </td>
                                                <td>id000004 </td>
                                                <td>34</td>
                                                <td>$340.00</td>
                                            </tr>
                                            <tr>
                                                <td colspan="8"><a href="#" className="btn btn-outline-light float-right">View Details</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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