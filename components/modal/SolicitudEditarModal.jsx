import React, { useContext, useState, useEffect } from "react";
import useValidacion from "../../hooks/useValidacion";
import useMensajesAlertas from "../../hooks/useMensajesAlertas";

import validarSolicitudPrestamo from "../../validacion/validarSolicitudPrestamo";

import { useRouter } from "next/router";

import { FirebaseContext } from "../../firebase";

const SolicitudEditarModal = ({
  solicitudDetalles,
  actualiza,
  setActualiza,
}) => {
  const { usuario, firebase } = useContext(FirebaseContext);
  const [datosSolicitud, setDatosSolicitud] = useState({
    monto: solicitudDetalles.monto,
  });

  const onChangeSolicitud = (e) => {
    setDatosSolicitud({
      ...datosSolicitud,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setDatosSolicitud({
      ...datosSolicitud,
      entrega: solicitudDetalles.entrega,
      monto: solicitudDetalles.monto,
      cuotas: solicitudDetalles.cuotas,
      tipoTasa: solicitudDetalles.tipoTasa,
      tasaInteres: solicitudDetalles.tasaInteres,
      periodoPagos: solicitudDetalles.periodoPagos,
      cargosPorMora: solicitudDetalles.cargosPorMora,
      observacion: solicitudDetalles.observacion,
    });

    setActualiza(false);
  }, [actualiza]);

  const { Toast } = useMensajesAlertas();

  const router = useRouter();

  const STATE_INICIAL = {};

  console.log(solicitudDetalles);
  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarSolicitudPrestamo,
    editarSolicitud
  );

  async function editarSolicitud() {
    if (!usuario) {
      firebase.cargando = false;
      return router.push("/SignIn");
    }

    try {
      //Insertar en la BD
      firebase.cargando = true;
      firebase.db.collection("Solicitud").doc(solicitudDetalles.id).update({
        entrega: datosSolicitud.entrega,
        monto: datosSolicitud.monto,
        cuotas: datosSolicitud.cuotas,
        tipoTasa: datosSolicitud.tipoTasa,
        tasaInteres: datosSolicitud.tasaInteres,
        periodoPagos: datosSolicitud.periodoPagos,
        cargosPorMora: datosSolicitud.cargosPorMora,
        observacion: datosSolicitud.observacion,
        estado:"En revisión"
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
      console.log("se ha guardado correctamente");
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
                        onSubmit={handleSubmit}
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
                                  id="monto"
                                  name="monto"
                                  value={datosSolicitud.monto}
                                  onChange={onChangeSolicitud}
                                  autoComplete="off"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Fecha de Entrega
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="entrega"
                                  name="entrega"
                                  value={datosSolicitud.entrega}
                                  onChange={onChangeSolicitud}
                                  autoComplete="off"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="periodoPagos">
                                  Cantidad de Cuotas
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="cuotas"
                                  name="cuotas"
                                  value={datosSolicitud.cuotas}
                                  onChange={onChangeSolicitud}
                                  autoComplete="off"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="tipoTasa">Tipo de Tasa</label>
                                <select
                                  className="form-control"
                                  name="tipoTasa"
                                  id="tipoTasa"
                                  value={datosSolicitud.tipoTasa}
                                  onChange={onChangeSolicitud}
                                  required
                                >
                                  <option selected value="">
                                    --Seleccione--
                                  </option>
                                  <option value="mensual">Mensual</option>
                                  <option value="anual">Anual</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <label htmlFor="tasaInteres">
                                  Tasa de Interes
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="tasaInteres"
                                  name="tasaInteres"
                                  value={datosSolicitud.tasaInteres}
                                  onChange={onChangeSolicitud}
                                  autoComplete="off"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                              <label htmlFor="periodoPagos">
                                  Periodo de Pagos
                                </label>
                                <select
                                  className="form-control"
                                  name="periodoPagos"
                                  id="periodoPagos"
                                  value={datosSolicitud.periodoPagos}
                                  onChange={onChangeSolicitud}
                                  required
                                >
                                  <option value="">--Seleccione--</option>
                                  <option value="diario">Diario</option>
                                  <option value="semanal">Semanal</option>
                                  <option value="quincenal">Quincenal</option>
                                  <option value="mensual">Mensual</option>
                                  <option value="bimestral">Bimestral</option>
                                  <option value="trimestral">Trimestral</option>
                                  <option value="cuatrimestral">
                                    Cuatrimestral
                                  </option>
                                  <option value="semestral">Semestral</option>
                                  <option value="anual">Anual</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <textarea
                                className="form-control"
                                placeholder="Observaciones a tomar en cuanta"
                                id="observacion"
                                name="observacion"
                                value={datosSolicitud.observacion}
                                onChange={onChangeSolicitud}
                                autoComplete="off"
                                required
                                autoComplete="off"
                                rows="2"
                              ></textarea>
                            </div>
                          </div>
                        </fieldset>
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
                            type="submit"
                            className="btn btn-primary"
                            onClick={editarSolicitud}
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

export default SolicitudEditarModal;
