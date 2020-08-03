import React from 'react';

const SolicitudPrestamoModal = ({ solicitudDetalles }) => {

    console.log('Detalle Solicitud', '=>', solicitudDetalles);

    return (
        <>
            <div className="modal fade" id="solicitudPrestamoModal" tabIndex="-1" role="dialog" aria-labelledby="solicitudPrestamoModal" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="solicitudPrestamoModal">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="card">
                                                <h5 className="card-header">
                                                    Registro de Solicitud de Prestamo{" "}
                                                    <span className="fas fa-clipboard"></span>
                                                </h5>
                                                <div className="card-body">
                                                    <form
                                                        className="needs-validation"
                                                        noValidate
                                                    >
                                                        <fieldset>
                                                            <div className="row">

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="periodoPagos">
                                                                            Gerente
                                </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="entrega"
                                                                            name="entrega"
                                                                            disabled
                                                                        />
                                                                        <div className="invalid-feedback">
                                                                            Fecha de Entrega
                              </div>

                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="periodoPagos">
                                                                            Cobrador
                                </label>
                                                                        <select
                                                                            className="form-control"
                                                                            name="periodoPagos"
                                                                            id="periodoPagos"
                                                                            required
                                                                        >
                                                                            <option value="">
                                                                                --Seleccione un tipo de Amortización--
                                  </option>
                                                                            <option value="Absoluto">Absoluto</option>
                                                                            <option value="Capital Fijo">
                                                                                Capital Fijo
                                  </option>
                                                                            <option value="Insoluto">Insoluto</option>
                                                                            <option value="Vencimiento">
                                                                                Vencimiento
                                  </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="periodoPagos">
                                                                            Cartera
                                </label>
                                                                        <select
                                                                            className="form-control"
                                                                            name="periodoPagos"
                                                                            id="periodoPagos"
                                                                            required
                                                                        >
                                                                            <option value="">
                                                                                --Seleccione un tipo de Amortización--
                                  </option>
                                                                            <option value="Absoluto">Absoluto</option>
                                                                            <option value="Capital Fijo">
                                                                                Capital Fijo
                                  </option>
                                                                            <option value="Insoluto">Insoluto</option>
                                                                            <option value="Vencimiento">
                                                                                Vencimiento
                                  </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="periodoPagos">
                                                                            Amortizacion
                                </label>
                                                                        <select
                                                                            className="form-control"
                                                                            name="periodoPagos"
                                                                            id="periodoPagos"
                                                                            required
                                                                        >
                                                                            <option value="">
                                                                                --Seleccione un tipo de Amortización--
                                  </option>
                                                                            <option value="Absoluto">Absoluto</option>
                                                                            <option value="Capital Fijo">
                                                                                Capital Fijo
                                  </option>
                                                                            <option value="Insoluto">Insoluto</option>
                                                                            <option value="Vencimiento">
                                                                                Vencimiento
                                  </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <legend className="pl-3  border-top mt-3">Datos y valores de la Solicitud</legend>

                                                                <div className="col-md-6 mb-3">
                                                                    <label htmlFor="entrega">Fecha de Entrega</label>
                                                                    <input
                                                                        type="date"
                                                                        className="form-control"
                                                                        id="entrega"
                                                                        name="entrega"
                                                                        required
                                                                    />
                                                                    <div className="invalid-feedback">
                                                                        Fecha de Entrega
                              </div>                            </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="monto">Monto</label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            min="100"
                                                                            max="100000000"
                                                                            id="monto"
                                                                            name="monto"
                                                                            required
                                                                        />
                                                                    </div>                            </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <label htmlFor="cuotas">
                                                                            Cantidad de Cuotas
                                </label>
                                                                        <input
                                                                            type="number"
                                                                            className="form-control"
                                                                            min="1"
                                                                            max="200"
                                                                            id="cuotas"
                                                                            name="cuotas"
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
                                                                            required
                                                                        >
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
                                                                            min="0.1"
                                                                            max="50"
                                                                            className="form-control"
                                                                            id="tasaInteres"
                                                                            name="tasaInteres"
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
                                                                            required
                                                                        >
                                                                            <option value="diario">Diario</option>
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="custom-control-input"
                                                                            id="cargosPorMora"
                                                                            name="cargosPorMora"
                                                                            defaultChecked={false}
                                                                            required
                                                                        />
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor="cargosPorMora"
                                                                        >
                                                                            Incluir interes generados por mora
                                </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <textarea
                                                                        className="form-control"
                                                                        name="observacion"
                                                                        id="observacion"
                                                                        placeholder="Observaciones a tomar en cuanta"
                                                                        autoComplete="off"
                                                                        rows="2"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SolicitudPrestamoModal;