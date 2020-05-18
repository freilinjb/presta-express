import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import swal from 'sweetalert';

import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout/Layout";
import Navegacion from "../../components/layout/Navegacion";
import Spinner from "../../components/ui/Spinner";
import PerfilCliente from "../../components/ui/PerfilCliente";
import ModalCobro from "../../components/ui/ModalCobro";
import useCalculadora from "../../hooks/useCalculadora";
import Checkbox from '../../components/ui/Checkbox';

//Validaciones
import useValidacion from '../../hooks/useValidacion';
import validarCrearCliente from '../../validacion/validarCrearCliente';

const STATE_INICIAL = {
    formaPago:'',
    observacion:''
}

const Prestamo = () => {
    
  const [prestamo, setPrestamo] = useState({});
  const [cliente, setCliente] = useState({});
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(0);

  const { setMoneda } = useCalculadora();

  const seleccion = [{
    cuota:0,
    estado: false
  }];
  
  const cuotasPagar = [];

  //Routing para obtener el id actual del producto
  const router = useRouter();
  const [consultarDB, setConsultarDB] = useState(true);
  // console.log(router);
  const {
    query: { id },
  } = router;

  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDB) {
      setCargando(true);
      const obtenerDatos = async () => {
        try {
          firebase.cargando = true;

          //Trae el documento que tenga el id
          const prestamoQuery = await firebase.db
            .collection("Prestamos")
            .doc(id);
          const prestamo = await prestamoQuery.get();
          if (prestamo.exists) {
            setPrestamo(prestamo.data());
            console.log(prestamo.data());
            

            //Es para evitar que se cicle el useEffect y con la condicion principal
            //y quitando el producto para evitar posibles errores
            const clienteQuery = await firebase.db
              .collection("Clientes")
              .doc(prestamo.data().cliente.id);
            const cliente = await clienteQuery.get();
            if (cliente.exists) {
              setCliente(cliente.data());
              //Es para evitar que se cicle el useEffect y con la condicion principal
              //y quitando el producto para evitar posibles errores

              setConsultarDB(false);
            } else {
              setError(true);
              setConsultarDB(false);
            }
            setConsultarDB(false);
          } else {
            setError(true);
            setConsultarDB(false);
          }
        } catch (error) {
          console.log(error);
        } finally {
          firebase.cargando = false;
        }
      };
      obtenerDatos();
    }
    //Si algo cambia en producto se actualiza: es por haVotado
  }, [id]);


  const onClicConfirmar = () => {

    swal({
      title: "Cobro de Cuota!!",
      text: "El monto a cobrar es ",
      icon: "info",
      buttons: true,
      dangerMode: false,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Datos guardado con exito!!", {
          icon: "success",
        });
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };

  const onCheckboxClicked=(idx, isChecked)=>{
    let existe = false;
    for(const i in seleccion) {
      if(seleccion[i].cuota === idx) {
        existe = true;
        seleccion[i].estado = isChecked;
      }
    }

    if(!existe) {
      seleccion.push({cuota: idx, estado: isChecked});
    }
    console.log(seleccion);
  }

  const calcular=()=> {
    let c = 0;
    for(const i in seleccion) {
        if(seleccion[i].cuota > 0 && seleccion[i].estado) {
            c++;
            cuotasPagar.push(seleccion[i].cuota);
        }
    }
    setCuentaSeleccionada(c);
  }

  //FUNCIONES PARA EL REGISTRO DEL PAGO 
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearCliente, registrarPago);

  const { formaPago, observacion } = valores;

  async function registrarPago() {
    //Inicia la carga
        //Si el usuario no esta autenticado llevat al login
        if (!usuario) {
            console.log('no esta loqueado');
            return router.push("/SignIn");
            firebase.cargando = false;
        }

    try {
        //Crear el objeto de nuevo producto

        const pago = {
            tipo:'completa',
            formaPago,
            observacion,
            cuotas:cuotasPagar,
            creado: Date.now(),
            pertenece:{
                cliente:{
                    id: prestamo.cliente.id,
                    nombre: prestamo.cliente.nombre,
                    apellido: prestamo.cliente.apellido
                },
                prestamo: {
                    id: prestamo.id
                }
            },
            creador: {
                id: usuario.uid,
                nombre: usuario.displayName
            }
        }
    
        //Insertar en la BD
        firebase.cargando = true;

        firebase.db.collection("Cuotas").add(cliente);
        // console.log(cliente);
        alert.success('Se ha guardo correctamente');
        // console.log(usuario);
    } catch (error) {
        console.log(error);
        alert.error('Ha ocurrido un error');

    } finally {
        firebase.cargando = false;
        document.getElementById("cerrar").click();

    }
    //Despues de registrar un Producto redireccionar al
    return router.push("/");
  }

  return (
    <Layout>
      {/* {error ? <Error404/> : ( */}
      <Navegacion>
        {Object.keys(cliente).length === 0 && !error ? (
          <Spinner className="spinner" />
        ) : (
          <>
            <div className="row justify-content-center">
              <PerfilCliente cliente={cliente} />
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <h5 className="card-header">Lista de Cuotas</h5>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="bg-light">
                          <tr className="border-0">
                            <th className="border-0">Cuota #</th>
                            <th className="border-0">Interés</th>
                            <th className="border-0">Abono al capital</th>
                            <th className="border-0">Valor de la cuota</th>
                            <th className="border-0">Saldo al capital</th>
                            <th className="border-0">Fecha</th>
                            <th className="border-0">Estado</th>
                            <th className="border-0">Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prestamo.detallesCuotas.map((cuotas) => (
                            <tr>
                              {/* <td>{cuotas.cuota}</td> */}
                              {/* <td> <div className="center"><input type="checkbox"  name="pago" id={cuotas.cuota}/></div> </td> */}
                              <td>
                                {" "}
                                <div className="center">
                                  <Checkbox
                                    initialState={false}
                                    id={cuotas.cuota}
                                    onChange={onCheckboxClicked}
                                  />
                                </div>{" "}
                              </td>
                              <td>{setMoneda(cuotas.interes)}</td>
                              <td>{setMoneda(cuotas.abonoCapital)}</td>
                              <td>{setMoneda(cuotas.valorCuota)}</td>
                              <td>{setMoneda(cuotas.saldoCapital)}</td>
                              <td>{cuotas.fecha}</td>
                              <td>{cuotas.estado}</td>
                              <td>
                                <div className="btn-group ml-auto">
                                  <button
                                    className="btn btn-sm btn-outline-light"
                                    onClick={onClicConfirmar}
                                  >
                                    Cobrar
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <style>{`
                .center {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    }
                    `}</style>
                    <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@mdo"
                    onClick={calcular}
                >
                    Open modal for @mdo
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="card">
                    <div className="card-body">
                        <div className="d-inline-block">
                <h5 className="text-muted">Cuota: ${prestamo.detallesCuotas[prestamo.detallesCuotas.length-1].valorCuota}</h5>
                        <p className="text-muted">Cantidad de Cuotas seleccionadas: {cuentaSeleccionada}</p>
                        <h2 className="mb-0">Monto a recibir:  {setMoneda(cuentaSeleccionada * prestamo.detallesCuotas[prestamo.detallesCuotas.length-1].valorCuota)}</h2>
                        </div>
                        <div className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
                        <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
                        </div>
                    </div>
                    </div>
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Forma de pago
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <form
                        >
                            <div className="form-group">
                            <label htmlFor="formaPago">Forma de pago</label>
                            <select
                                className="form-control"
                                name="formaPago"
                                id="formaPago"
                                value={formaPago}
                                onChange={handleChange}
                            >
                                <option value="">--Seleccione una opcion--</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="transferencia electronica">Transferencia Electronica</option>
                                <option value="tarjeta de servicio">Tarjeta de servicio</option>
                                <option value="compensación">Compensación</option>
                                <option value=""></option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label htmlFor="observacion" className="col-form-label">
                                Observacion
                            </label>
                            <textarea
                                className="form-control"
                                id="observacion"
                                name="observacion" 
                                value={observacion} 
                                onchange={handleChange}
                            ></textarea>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            id="cerrar"
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Cobrar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Navegacion>
    </Layout>
  );
};

export default Prestamo;
