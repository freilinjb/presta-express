import React from 'react';

const SolicitudPrestamoModal = ({solicitudDetalles}) => {

    console.log('Detalle Solicitud','=>',solicitudDetalles);

    return (
        <>
            <div className="modal fade" id="solicitudPrestamoModal" tabindex="-1" role="dialog" aria-labelledby="solicitudPrestamoModal" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="solicitudPrestamoModal">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
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