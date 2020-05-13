import React from 'react';

const Error404 = () => {
    return ( 
        <>
        <div className="bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="error-section">
                            <img src="../assets/images/error-img.png" alt="" className="img-fluid"/>
                            <div className="error-section-content">
                                <h1 className="display-3">Página no encontrada</h1>
ss                                <a href="../index.html" className="btn btn-secondary btn-lg">Volver a la página de inicio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ============================================================== --> */}
            {/* <!-- footer --> */}
            {/* <!-- ============================================================== --> */}
            <div className="bg-white p-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-dark text-center">
                            Copyright © 2020 Prestaa-Express. Todos los derechos reservados. <a href="https://facebook.com/freilinjb/">FreilinJB</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Error404;