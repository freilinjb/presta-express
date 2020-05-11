import React from "react";
import Layout from "../components/layout/Layout";
import Navegacion from "../components/layout/Navegacion";
import InputModal from '../components/ui/InputModal';
import Sector from '../components/ui/Sector';

import useSector from '../hooks/useSector';


const Sectores = () => {

    const {sectores} = useSector("creado");
    console.log(sectores);
    
  return (
    <>
      <Layout>
      <Navegacion>
        <div className="dashboard-short-list">
            <button type="button" className="btn btn-primary"  data-toggle="modal" data-target="#Modal">Registrar un sector</button>
            <InputModal/>
            

          <div className="row justify-content-center">
            {/* <!-- ============================================================== --> */}
            {/* <!-- shortable list  --> */}
            {/* <!-- ============================================================== --> */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">

              <section className="card card-fluid">
                <h5 className="card-header drag-handle">Lista de Sectores </h5>
                <ul
                  className="sortable-lists list-group list-group-flush list-group-bordered"
                  id="items"
                >
                  {sectores.map(sector => (
                    <Sector
                    key={sector.id}
                    sector={sector}
                    />
                ))}
                </ul>
              </section>
            </div>
          </div>
          {/* <!-- ============================================================== --> */}
          {/* <!-- end nestable list  --> */}
          {/* <!-- ============================================================== --> */}
        </div>
        </Navegacion>
      </Layout>
    </>
  );
};

export default Sectores;
