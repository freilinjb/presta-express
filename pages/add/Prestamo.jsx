import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
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
import useMensajesAlertas from '../../hooks/useMensajesAlertas';

const Prestamo = () => {
    //Muestra alerta
    const { Toast } = useMensajesAlertas();
    const { usuario, firebase } = useContext(FirebaseContext);
    const { calcular, formatearFecha } = useCalculadora();
    const {clientes} = useCliente("desc");
    const [calculado, setCalculado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [tablaAmortizada, setTablaAmortizada] = useState([]);

    let fecha = new Date();
    fecha = formatearFecha(fecha,'ymd');
    // console.log(fecha);

    const STATE_INICIAL = {
        idcliente:'',
        entrega: fecha,
        monto:'',
        cuotas:'',
        tipoTasa:'',
        periodoPagos:'',
        cargosPorMora:'on',
        observacion:''
    }
    
    const {
        valores,
        errores,
        handleSubmit,
        handleChange,
    } = useValidacion(STATE_INICIAL, validarIniciarPrestamo, crearPrestamo);

    console.log(errores);

    const {idcliente, entrega, monto, cuotas, tipoTasa, tasaInteres, observacion, periodoPagos, cargosPorMora} = valores;
    
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
            observacion,
            estado: 'activo',
            creado: Date.now(),
            cliente:{
                id:idcliente,
                nombre:(clientes.filter(doc => doc.id === idcliente))[0].nombre,
                apellido: (clientes.filter(doc => doc.id === idcliente))[0].apellido
            },
            creador: {
            id: usuario.uid,
            nombre: usuario.displayName,
            }
        };
        // console.log(prestamo);
        
        try {
            //Insertar en la BD

            setCargando(true);
            const p = await firebase.db.collection("Prestamos").add(prestamo);
            Toast.fire({
                icon: 'success',
                title: 'Se ha guardado correctamente!!'
              });
            // alert.success('Se ha guardo correctamente');
            
            // tablaAmortizada.prestamo = {
            //     id: p.id
            // }
            // tablaAmortizada.cliente = {
            //     id: idcliente,
            //     nombre:(clientes.filter(doc => doc.id === idcliente))[0].nombre,
            //     apellido: (clientes.filter(doc => doc.id === idcliente))[0].apellido
            // }
            // console.log('tabla amortizada','=>',tablaAmortizada);
            // tablaAmortizada.estado = 'activo';
            // await firebase.db.collection("Cuotas").add(tablaAmortizada);
            setCargando(false);
            
            //Inicio
        } catch (error) {
            console.log(error);
            Toast.fire({
                icon: 'error',
                title: 'Ha ocurrido un error!!'
              });
            
        }
        return Router.push("/Prestamos");
    }

    const hancleClick =()=> {
        
        if(monto.trim() === '' || cuotas.trim() === '' || tasaInteres.trim() === '' ||periodoPagos.trim() === '' || tipoTasa.trim() === '') {
            Toast.fire({
                icon: 'error',
                title: 'Los campos no pueden estar vacios!!'
              });
            return;
        }
        setTablaAmortizada(calcular(monto, cuotas, tasaInteres, periodoPagos, tipoTasa, entrega));
        // console.log(tablaAmortizada);
        
        setTimeout(() => {
            Toast.fire({
                icon: 'info',
                title: `${tablaAmortizada.msg}`
              });
        },1000);
        setCalculado(true);
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
                                                          <label htmlFor="idcliente">Cliente</label>
                                                          <select className="form-control" name="idcliente" id="idcliente" value={idcliente} onChange={handleChange} required>
                                                            <option selected disabled value="">Seleccione un cliente</option>
                                                            {clientes.map(cliente=> (<option key={cliente.id} value={cliente.id} >{cliente.nombre + ' ' + cliente.apellido}</option>))}
                                                            {!clientes && (<p>No tiene clientes registrados</p>)}
                                                          </select>
                                                        {errores.idCliente && <p className="alert alert-danger">{errores.idCliente}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="entrega">Fecha de Entrega</label>
                                                        <input type="date" className="form-control" min={fecha} id="entrega" name="entrega" value={entrega} onChange={handleChange} required/>
                                                        <div className="invalid-feedback">
                                                            Fecha de Entrega
                                                        </div>
                                                        {errores.entrega && <p className="alert alert-danger">{errores.entrega}</p>}

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="monto">Monto</label>
                                                            <input type="number" className="form-control" min="100" max="100000000" id="monto" name="monto" value={monto} onChange={handleChange} required/>
                                                        </div>
                                                        {errores.monto && <p className="alert alert-danger">{errores.monto}</p>}

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="cuotas">Cantidad de Cuotas</label>
                                                            <input type="number" className="form-control" min="1" max="200" id="cuotas" name="cuotas" value={cuotas} onChange={handleChange} required/>
                                                        </div>
                                                        {errores.correo && <p className="alert alert-danger">{errores.correo}</p>}
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="tipoTasa">Tipo de Tasa</label>
                                                            <select className="form-control" name="tipoTasa" id="tipoTasa" value={tipoTasa} onChange={handleChange} required>
                                                                <option selected value="">--Seleccione--</option>
                                                                <option value="mensual">Mensual</option>
                                                                <option value="anual">Anual</option>
                                                            </select>
                                                        {errores.tipoTasa && <p className="alert alert-danger">{errores.tipoTasa}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="tasaInteres">Tasa de Interes</label>
                                                            <input type="number" min="0.1" max="50" className="form-control" id="tasaInteres" name="tasaInteres" value={tasaInteres} onChange={handleChange} required/>
                                                        {errores.tasaInteres && <p className="alert alert-danger">{errores.tasaInteres}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-group">
                                                            <label htmlFor="periodoPagos">Periodo de Pagos</label>
                                                            <select className="form-control" name="periodoPagos" id="periodoPagos" value={periodoPagos} onChange={handleChange} required>
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
                                                            <input type="checkbox" className="custom-control-input" id="cargosPorMora" name="cargosPorMora" value={cargosPorMora} defaultChecked={false} onChange={handleChange} required/>
                                                            <label className="custom-control-label" htmlFor="cargosPorMora">Incluir interes generados por mora</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                          <textarea className="form-control" name="observacion" id="observacion" value={observacion} onChange={handleChange} placeholder="Observaciones a tomar en cuanta" autoComplete="off" rows="2"></textarea>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                    <button 
                                                        className="btn btn-primary btn-lg btn-block" 
                                                        disabled={firebase.cargando}
                                                        type="submit">
                                                            {cargando ? 
                                                            (<>
                                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                    Enviando datos
                                                            </>
                                                            )
                                                            :
                                                            (
                                                                <>
                                                                    Guardar
                                                                </>
                                                            )
                                                            }
                                                        </button>

                                                    </div>
                                                    <div className="col-6">
                                                        <button type="button" className="btn btn-outline-secondary btn-lg btn-block" onClick={hancleClick}>Calcular</button>
                                                        {/* <button type="button" clasclassNames="btn btn-outline-secondary btn-lg btn-block" onClick={hancleClick}>Calcular</button> */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-6 col-lg-6 col-xl-6">
                                    {calculado ? (<Amortizacion tablaAmortizada={tablaAmortizada} />) : null }
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