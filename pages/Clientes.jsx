//FRONTAL DE CLIENTE
import React from "react";
import Layout from '../components/layout/Layout';
import Navegacion from '../components/layout/Navegacion';


const Clientes = () => {
    
  return (
      <Layout>
        <Navegacion titulo={"Lista de Clientes"}>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body">
                <form>
                  <input
                    className="form-control form-control-lg"
                    type="search"
                    placeholder="Buscar..."
                    aria-label="Buscar..."
                  />
                  <button className="btn btn-primary search-btn" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Navegacion>
      </Layout>
  );
};

export default Clientes;
