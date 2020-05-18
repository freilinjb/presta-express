import React,{useContext} from "react";
import {useAlert} from 'react-alert';

//Validaciones
import useValidacion from '../../hooks/useValidacion';
import validarCrearCliente from '../../validacion/validarCrearPagoCuota';

import useCalculadora from '../../hooks/useCalculadora';
import { FirebaseContext } from '../../firebase';
const STATE_INICIAL = {
  formaPago:'',
  observacion:''
}

const ModalCobro = ({ cuotas, prestamo, id }) => {
  const alert = useAlert();
  const {setMoneda} = useCalculadora();
  const { firebase, usuario } = useContext(FirebaseContext);

    //FUNCIONES PARA EL REGISTRO DEL PAGO
    const {
      valores,
      errores,
      handleSubmit,
      handleChange,
      handleBlur,
    } = useValidacion(STATE_INICIAL, validarCrearCliente, registrarPago);
  
    const { formaPago, observacion } = valores;

  console.log("desde el modal:", "=>", cuotas);


  async function registrarPago() {

        if (!usuario) {
            console.log('no esta loqueado');
            firebase.cargando = false;
            return router.push("/SignIn");
        }
        console.log(prestamo);
    try {
        //Crear el objeto de nuevo producto

        const pagos = {
            tipo:'completa',
            formaPago,
            observacion,
            monto: (cuotas.length * prestamo.detallesCuotas[prestamo.detallesCuotas.length - 1].valorCuota),
            cuotas,
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
        firebase.db.collection("Cobros").add(pagos);

        for(const i in prestamo.detallesCuotas) {
          for(const j in cuotas) {
            if(prestamo.detallesCuotas[i].cuota == cuotas[j]){
              prestamo.detallesCuotas[i].estado  = 'pago'
              console.log('encontrado');
              
            }
          }
        }

        firebase.db.collection("Prestamos").doc(id).set(prestamo).then(function() {
          console.log('Acualizado correctamente');
        });

      //   firebase.db.collection("Prestamos").doc(id).update({
      //     detallesCuotas: {estado: "pago"}
      // }).where("detalles");
      // alert.success('Se ha guardo correctamente');

        //Insertar en la BD
        firebase.cargando = true;
        console.log(prestamo);

        // firebase.db.collection("Cuotas").add(cliente);

        alert.success('Se ha guardo correctamente');
        
        // console.log(usuario);
    } catch (error) {
        console.log(error);
        alert.error('Ha ocurrido un error');

    } finally {
        firebase.cargando = false;
        document.getElementById("cerrar").click();
        console.log('cuotas: ','=>',cuotas);

    }
    //Despues de registrar un Producto redireccionar al
    // return router.push("/");

  }
  return (
    <>
      <button
        type="submit"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#modalPago"
        data-whatever="@mdo"
      >
        Realizar pagos
      </button>

      <div
        className="modal fade"
        id="modalPago"
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
              <p className="text-muted">
                Cantidad de Cuotas seleccionadas: {cuotas.length}
              </p>
              <h2 className="mb-0">
                Monto a recibir:{" "}
                {setMoneda(
                  cuotas.length *
                    prestamo.detallesCuotas[prestamo.detallesCuotas.length - 1]
                      .valorCuota
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
                  id="cerrar"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Cobrar
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
