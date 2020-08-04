import React from "react";

const SolicitudPrestamoModal = ({ solicitudDetalles }) => {
  console.log("Detalle Solicitud", "=>", solicitudDetalles);

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
                      <form className="needs-validation" noValidate>
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
                                value={solicitudDetalles.observacion}
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
                            className="custom-control-input"
                            checked
                          />
                          <label
                            className="custom-control-label"
                            for="rechazarSolicitud"
                          >
                            Rechazar Solicitud
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="aceptarSolicitud"
                            name="estadoSolicitud"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            for="aceptarSolicitud"
                          >
                            Aceptar solicitud
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="button" className="btn btn-primary">
                    Guardar
                  </button>
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
