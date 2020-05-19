import React,{useContext, useState} from "react";
import Router from 'next/router';
import Swal from 'sweetalert2';

//Validaciones
import useValidacion from '../../hooks/useValidacion';
import validarCrearCliente from '../../validacion/validarCrearPagoCuota';

import useCalculadora from '../../hooks/useCalculadora';
import useMensajesAlertas from '../../hooks/useMensajesAlertas';
import usePagoParcial from '../../hooks/usePagoParcial';
import { FirebaseContext } from '../../firebase';

const STATE_INICIAL = {
  formaPago:'',
  pago:1.0,
  observacion:''
}

const ModalCobro = ({ prestamo, id, cuotaParcial, setActualizarCuotas }) => {
  const { Toast } = useMensajesAlertas();
  const {setMoneda} = useCalculadora();
  // const { cuotaParcial } = usePagoParcial();
  const { firebase, usuario } = useContext(FirebaseContext);

  const [enviando, setEnviando] = useState(false);
  const [cargando, setCargando] = useState(false);

    //FUNCIONES PARA EL REGISTRO DEL PAGO
    const {
      valores,
      errores,
      handleSubmit,
      handleChange,
      handleBlur,
    } = useValidacion(STATE_INICIAL, validarCrearCliente, registrarPago);
  
    const { formaPago, observacion, pago } = valores;

    console.log('desde el modal cobro: ', cuotaParcial);
    

  async function registrarPago() {

        setEnviando(true);
        if (!usuario) {
            console.log('no esta loqueado');
            firebase.cargando = false;
            return router.push("/SignIn");
        }
        console.log(prestamo);

        if(pago > prestamo.detallesCuotas[cuotaParcial-1].valorCuota) {
          Swal.fire(
            'Error!',
            'El valor a pagar no puede ser mayor a la cuota.',
            'error'
          );

          return;
        }
    try {
        //Crear el objeto de nuevo producto

        const pagos = {
            tipo:'parcial',
            formaPago,
            observacion,
            monto: pago,
            cuotas: [cuotaParcial],
            creado: Date.now(),
            pertenece:{
                cliente:{
                    id: prestamo.cliente.id,
                    nombre: prestamo.cliente.nombre,
                    apellido: prestamo.cliente.apellido
                },
                prestamo: {
                    id: id
                }
            },
            creador: {
                id: usuario.uid,
                nombre: usuario.displayName
            }
        }
        // firebase.db.collection("Cobros").add(pagos);

        prestamo.detallesCuotas[cuotaParcial-1].valorCuota = (Number(prestamo.detallesCuotas[cuotaParcial-1].valorCuota) - Number(pago)).toFixed(2);

        if(pago == prestamo.detallesCuotas[cuotaParcial-1].valorCuota) {
          prestamo.detallesCuotas[cuotaParcial-1].estado = 'pago';

        } else if (prestamo.detallesCuotas[cuotaParcial-1].valorCuota  < 1) {
          prestamo.detallesCuotas[cuotaParcial-1].estado = 'pago';
        } else {
          prestamo.detallesCuotas[cuotaParcial-1].estado = 'parcial';
        }
        
        console.log('pago:','=>',pago);
        console.log('pagos:','=>',pagos);
        console.log('prestamo:','=>',prestamo);
        // console.log('cantidad pagada: ', cantidadPagadas, ' prestamo: pago:', prestamo.detallesCuotas.length);
        
        firebase.db.collection("Prestamos").doc(id).set(prestamo).then(function() {
          console.log('Acualizado correctamente');
        });
        //Insertar en la BD
        firebase.cargando = true;
        console.log(prestamo);

        // Toast.fire({
        //   icon: 'success',
        //   title: 'Pago realizado correctamente!!'
        // });
        Swal.fire({
          title: 'Se ha guardado correctamente',
          text: "Desa imprimir el bolante de pago!",
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Imprimir',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Preciono Imprimir.',
              'success'
            )
          } else {

             Swal.fire(
              'Deleted!',
              'Preciono cancelar.',
              'success'
            )
          }
        })
        // console.log(usuario);
    } catch (error) {
        console.log(error);
        Toast.fire({
          icon: 'error',
          title: 'Se ha producido un error!!'
        });

    } finally {
        firebase.cargando = false;
        document.getElementById("cerrar2").click();
        // Router.push('/Prestamos');
        setEnviando(false);
        setActualizarCuotas(true);
    }
  }
  return (
    <>
      <div
        className="modal fade"
        id="modalPagoParcial"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="formaPago"
        aria-hidden="true"
      >
        <div className="card">
          <div className="card-body">
            <div className="d-inline-block">
              <h5 className="text-muted">
                Cuota: $
                {
                  prestamo.detallesCuotas[prestamo.detallesCuotas.length - 1]
                    .valorCuota
                }
              </h5>
              <h2 className="mb-0">
                {cuotaParcial > 0 && (
                  <>
                  Monto a recibir: {setMoneda(prestamo.detallesCuotas[cuotaParcial-1].valorCuota)} - {setMoneda(pago)} = 
                  <span className="text-warning ">{setMoneda(prestamo.detallesCuotas[cuotaParcial-1].valorCuota - pago)}</span>
                  </>
                )}
              </h2>
            </div>
            <div className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
              <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
            </div>
          </div>
        </div>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="formaPago">
                Pago parcial
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="formaPago">Forma de pago</label>
                  <select
                    className="form-control"
                    name="formaPago"
                    id="formaPago"
                    value={formaPago}
                    onChange={handleChange}
                  >
                    <option selected value="">
                      --Seleccione una opcion--
                    </option>
                    <option value="efectivo">Efectivo</option>
                    <option value="transferencia electronica">
                      Transferencia Electronica
                    </option>
                    <option value="tarjeta de servicio">
                      Tarjeta de servicio
                    </option>
                    <option value="compensación">Compensación</option>
                  </select>
                  {errores.formaPago && (
                    <p className="alert alert-danger">{errores.formaPago}</p>
                  )}
                </div>
                <div className="form-group">
                  
                  <div className="form-group">
                    <label htmlFor="pago">Pago parcial</label>
                    <input 
                      type="number"
                      name="pago" 
                      id="pago" value={pago}
                      min={1}
                      step="0.01"
                      max={cuotaParcial && prestamo.detallesCuotas[cuotaParcial-1].valorCuota}                      
                      maxLength={prestamo.detallesCuotas[0].valorCuota}
                      onChange={handleChange} 
                      className="form-control" 
                      placeholder="Ingrese el monto"/>

                  </div>

                  <label htmlFor="observacion" className="col-form-label">
                    Observacion
                  </label>
                  <textarea
                    className="form-control"
                    id="observacion"
                    name="observacion"
                    value={observacion}
                    onChange={handleChange}
                    defaultValue=""
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  id="cerrar2"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                {enviando ? 
                  (<>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Cargando...
                  </>
                  )
                  :
                  (
                      <>
                      Registrar Mi Cuenta
                      </>
                  )
                }
                </button>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCobro;
