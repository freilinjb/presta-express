import React, { useContext, useState, useEffect } from "react";
import useMensajesAlertas from "../../hooks/useMensajesAlertas";

// import {useAlert} from 'react-alert';

import { useRouter } from "next/router";

import { FirebaseContext } from "../../firebase";

const SolicitudPrestamoModal = ({ solicitudDetalles }) => {
  const { usuario, firebase } = useContext(FirebaseContext);
  // const alert = useAlert();
  const { Toast } = useMensajesAlertas();


  const [estadoSolicitud, setEstadoSolicitud] = useState('');
  const [observacion, setObservacion] = useState('');
  
  console.log("Detalle Solicitud", "=>", solicitudDetalles);

  //Context con las operaciones crud de firebase
  //   console.log(usuario);
  const router = useRouter();

  function validarCrear() {
    let error;

    let errores = "";
  }

  useEffect(() => {
    console.log('cambio',estadoSolicitud);
  },[estadoSolicitud]);

  async function procesarSolicitud() {
    if (!usuario) {
      firebase.cargando = false;
      return router.push("/SignIn");
    }

    try {
      //Insertar en la BD
      firebase.cargando = true;
      firebase.db.collection("Solicitud").doc(solicitudDetalles.id).update({
        estado: estadoSolicitud,
        observacionGerancial: observacion,
      });
      // alert.success("Se ha guardo correctamente");
      Toast.fire({
        icon: "success",
        title: "Se ha guardado correctamente!!",
      });

    } catch (error) {
      console.log(error);
      // alert.error("Ha ocurrido un error");
      Toast.fire({
        icon: "error",
        title: "Ha ocurrido un error!!",
      });
    } finally {
      firebase.cargando = false;
      // router.push("/Solicitd");
      document.getElementById("btnSolicitudCerrar").click();
      console.log('se ha guardado correctamente');
    }
  }

  return (
    <>
      {/* Comprobar si el objeto no esta vacio */}
      {Object.entries(solicitudDetalles).length !== 0 && (
        <>
          <div
            className="modal fade"
            id="solicitudPrestamoModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="solicitudPrestamoModal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="solicitudPrestamoModal">
                    Solicitud de Prestamo{" "}
                    <span className="fas fa-clipboard"></span>
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
                  <div className="card">
                    <div className="card-body">
                      <form
                        className="needs-validation"
                        noValidate
                      >
                        <fieldset>
                          <div className="row">
                            <div className="col-lg-4 col-sm-4">
                              <div className="user-avatar text-center d-block">
                                <img
                                  src={` ${
                                    solicitudDetalles.cliente.urlFoto
                                      ? solicitudDetalles.cliente.urlFoto
                                      : "static/assets/images/product-pic.jpg"
                                  } `}
                                  alt={solicitudDetalles.cliente.nombre}
                                  alt="User Avatar"
                                  className="rounded-circle user-avatar-xxl"
                                />
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <h1>
                                Sr.{" "}
                                <strong>
                                  {" "}
                                  {solicitudDetalles.cliente.nombre +
                                    " " +
                                    solicitudDetalles.cliente.apellido}
                                </strong>
                              </h1>
                              <h1>
                                <strong>
                                  {" "}
                                  {solicitudDetalles.cliente.apellido}
                                </strong>
                              </h1>
                              <p className="text-muted">
                                Labora en: <strong></strong>
                              </p>
                            </div>
                            <div className="w-100 border-top mb-3"></div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Monto Solicitado
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  disabled
                                  value={solicitudDetalles.monto}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Fecha de Entrega
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={solicitudDetalles.entrega}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Cantidad de Cuotas
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={solicitudDetalles.cuotas}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Tipo de Tasa
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={solicitudDetalles.tipoTasa}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Tasa de Interes
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={solicitudDetalles.tasaInteres}
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Periodo de Pagos
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={solicitudDetalles.periodoPagos}
                                  disabled
                                />
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <textarea
                                className="form-control"
                                placeholder="Observaciones a tomar en cuanta"
                                value={observacion}
                                onChange={e=>setObservacion(e.target.value)}
                                disabled
                                autoComplete="off"
                                rows="2"
                              ></textarea>
                            </div>
                          </div>
                        </fieldset>
                        <div className="w-100 border-top"></div>
                        <fieldset>
                          <legend>Informacion gerencial</legend>
                          <div className="col-md-12 mb-3">
                            <textarea
                              className="form-control"
                              value={solicitudDetalles.observacion}
                              autoComplete="off"
                              rows="2"
                            ></textarea>
                          </div>
                        </fieldset>
                        <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            id="rechazarSolicitud"
                            name="estadoSolicitud"
                            value={estadoSolicitud}
                            checked={estadoSolicitud ===  'Rechazada'}
                            className="custom-control-input"
                            onClick={() => setEstadoSolicitud('Rechazada')}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="rechazarSolicitud"
                          >
                            Rechazar Solicitud
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="aceptarSolicitud"
                            name="estadoSolicitud"
                            value={estadoSolicitud}
                            checked={estadoSolicitud ===  'Autorizado'}
                            className="custom-control-input"
                            onClick={() => setEstadoSolicitud('Autorizado')}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="aceptarSolicitud"
                          >
                            Aceptar solicitud
                          </label>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            id="btnSolicitudCerrar"
                          >
                            Cerrar
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={() => procesarSolicitud()}
                            >
                            Guardar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SolicitudPrestamoModal;
