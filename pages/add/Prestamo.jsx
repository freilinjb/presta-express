import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import Navegacion from '../../components/layout/Navegacion';
import useCliente from '../../hooks/useCliente';
import useCalculadora from '../../hooks/useCalculadora';
import { FirebaseContext } from "../../firebase";

//Componentes
import Amortizacion from '../../components/ui/Amortizacion';

//Validaciones
import useValidacion from '../../hooks/useValidacion';
import validarIniciarPrestamo from '../../validacion/validarIniciarPrestamo';

const Prestamo = () => {
    const { usuario, firebase } = useContext(FirebaseContext);
    const { calcular } = useCalculadora();
    const {clientes} = useCliente("creado");
    const [calculado, setCalculado] = useState(false);
    const [tablaAmortizada, setTablaAmortizada] = useState([]);

    useEffect(() => {
        
        
    },[]);

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
            entrega,
            monto,
            cuotas,
            tipoTasa,
            tasaInteres,
            periodoPagos,
            cargosPorMora,
            detallesCuotas:tablaAmortizada.cuotas,
            creado: Date.now(),
            cliente:{
                id:idCliente,
                nombre:''
            },
            creador: {
            id: usuario.uid,
            nombre: usuario.displayName,
            }
        };
        
        //Insertar en la BD
        firebase.db.collection("Prestamos").add(prestamo);

        //Despues de registrar un Producto redireccionar al
        //Inicio
        return router.push("/");
    }

    const hancleClick = () => {
        setTablaAmortizada(calcular(monto, cuotas, tasaInteres, periodoPagos, tipoTasa));
        setCalculado(true);
        if(tablaAmortizada.listo){
            // console.log(tablaAmortizada);
        }
        
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
                                                noValidate
                                                onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                          <label htmlFor="idCliente">Cliente</label>
                                                          <select className="form-control select2" name="idcliente" id="idCliente" value={idCliente} onChange={handleChange} required>
                                                            <option selected disabled value="">Seleccione un cliente</option>
                                                            {clientes.map(cliente=> (<option key={cliente.id} value={cliente.id} >{cliente.nombre + ' ' + cliente.apellido}</option>))}
                                                            {!clientes && (<p>No tiene clientes registrados</p>)}
                                                          </select>
                                                        {errores.idCliente && <p className="alert alert-danger">{errores.idCliente}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="entrega">Fecha de Entrega</label>
                                                        <input type="date" className="form-control" id="entrega" name="entrega" value={entrega} onChange={handleChange} required/>
                                                        <div className="invalid-feedback">
                                                            Fecha de Entrega
                                                        </div>
                                                        {errores.entrega && <p className="alert alert-danger">{errores.entrega}</p>}

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="monto">Monto</label>
                                                            <input type="number" className="form-control" min="100" max="100000000" id="monto" name="monto" value={monto} onChange={handleChange} required=""/>
                                                        </div>
                                                        {errores.monto && <p className="alert alert-danger">{errores.monto}</p>}

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="cuotas">Cantidad de Cuotas</label>
                                                            <input type="number" className="form-control" min="1" max="1000" id="cuotas" name="cuotas" value={cuotas} onChange={handleChange} required=""/>
                                                        </div>
                                                        {errores.correo && <p className="alert alert-danger">{errores.correo}</p>}
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="tipoTasa">Tipo de Tasa</label>
                                                            <select className="form-control" name="tipoTasa" id="tipoTasa" value={tipoTasa} onChange={handleChange}>
                                                                <option selected value="">--Seleccione--</option>
                                                                <option selected value="mensual">Mensual</option>
                                                                <option selected value="anual">Anual</option>
                                                            </select>
                                                        {errores.tipoTasa && <p className="alert alert-danger">{errores.tipoTasa}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="tasaInteres">Tasa de Interes</label>
                                                            <input type="number" min="0.1" max="50" className="form-control" id="tasaInteres" name="tasaInteres" value={tasaInteres} onChange={handleChange} required=""/>
                                                        {errores.tasaInteres && <p className="alert alert-danger">{errores.tasaInteres}</p>}
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
                                                        {errores.periodoPagos && <p className="alert alert-danger">{errores.periodoPagos}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cargosPorMora" name="cargosPorMora" value="off" checked={cargosPorMora === 'on'} defaultChecked={false} onChange={handleChange}/>
                                                            <label className="custom-control-label" htmlFor="cargosPorMora">Incluir interes generados por mora</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Guardar</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" clasNames="btn btn-outline-secondary btn-lg btn-block" onClick={hancleClick}>Calcular</button>
                                                        {/* <button type="button" clasclassNames="btn btn-outline-secondary btn-lg btn-block" onClick={hancleClick}>Calcular</button> */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-6 col-lg-6 col-xl-6">
                                    {calculado ? (<Amortizacion tablaAmortizada={tablaAmortizada}/>) : null }
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