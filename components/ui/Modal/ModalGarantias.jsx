import React from "react";
import Garantias from '../../ui/Formularios/Garantias';

const ModalGarantias = () => {
  return (
    <>
      <div
        className="modal fade"
        id="ModalGarantias"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ModalGarantiasLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalGarantiasLabel">
                Registro de Garantias <span className="fas fa-user-plus"></span>
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
            <div className="modal-body mb-0">
            <Garantias/>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGarantias;
