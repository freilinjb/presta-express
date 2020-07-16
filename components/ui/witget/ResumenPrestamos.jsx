import React from "react";

const ResumenPrestamos = () => {
  return (
    <>
      <div className="row">
        {/* <!-- ============================================================== -->
	                        <!-- four widgets   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- total views   -->
	                        <!-- ============================================================== --> */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Total Views</h5>
                <h2 className="mb-0"> 10,28,056</h2>
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                <i className="fa fa-eye fa-fw fa-sm text-info"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
	                        <!-- end total views   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- total followers   -->
	                        <!-- ============================================================== --> */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Monto en atraso</h5>
                <h2 className="mb-0"> 3</h2>
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
                <i className="fa fa-user fa-fw fa-sm text-primary"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
	                        <!-- end total followers   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- partnerships   -->
	                        <!-- ============================================================== --> */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Cantidad de Prestamos</h5>
                <h2 className="mb-0">3</h2>
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
                <i className="fa fa-handshake fa-fw fa-sm text-secondary"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
	                        <!-- end partnerships   -->
	                        <!-- ============================================================== -->
	                        <!-- ============================================================== -->
	                        <!-- total earned   -->
	                        <!-- ============================================================== --> */}
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-inline-block">
                <h5 className="text-muted">Monto por cobrar</h5>
                <h2 className="mb-0"> $149.00</h2>
              </div>
              <div className="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
                <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
	                        <!-- end total earned   -->
	                        <!-- ============================================================== --> */}
      </div>
    </>
  );
};

export default ResumenPrestamos;
