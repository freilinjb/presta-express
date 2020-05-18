import React from "react";

const ModalCobro = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
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
              <h5 className="text-muted">Cuota: $452</h5>
              <p className="text-muted">Cantidad de Cuotas seleccionadas: 5</p>
              <h2 className="mb-0"> $65,544.41</h2>
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
              <form>
                <div className="form-group">
                  <label htmlFor="formaDePago">Forma de pago</label>
                  <select
                    className="form-control"
                    name="formaDePago"
                    id="formaDePago"
                  >
                    <option>Efectivo</option>
                    <option>Efectivo</option>
                    <option>Transferencia Electronica</option>
                    <option>Tarjeta de servicio</option>
                    <option>Compensación</option>
                    <option></option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion" className="col-form-label">
                    Observacion
                  </label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Cobrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCobro;
