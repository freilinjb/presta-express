//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from './Layout'
import Navegacion from "./Navegacion";
import Spinner from '../../components/ui/Spinner';
import ButtonFloat from "../../components/ui/ButtonFloat";
import Busqueda from "../../components/ui/Busqueda";

const LayoutPrincipal = (props) => {

  const { hanbleBuscar, handleChange, busqueda, nombre, cargando, titulo, btnIr } = props;
  // const cargando = false;
  // const hanbleBuscar=(e)=> {
  //     e.preventDefault();

  //     console.log('preciono submit');
  // }

  // const handleChange=(e)=> {
  //     setBusqueda(e.target.value);
  // }

  return (
    <Layout title="Clientes">
      {cargando && (<div className="spinner"><Spinner/></div>)}

      <Navegacion titulo={titulo}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 mt-2 p-0">
            <Busqueda hanbleBuscar={hanbleBuscar} handleChange={handleChange} busqueda={busqueda}/>
            
            <div className="">
              {cargando && <Spinner className="spinner" />}
              {/* {Componente} */}
              <div className="col-lg-12 p-0">
                <div className="section-block row justify-content-between m-0 p-0 mb-2">
                  <h3 className="section-title col-auto p-0">
                    {nombre}
                  </h3>
                  <div
                    className="btn-group col-auto col-auto p-0"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light"
                    >
                      Activo
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-light"
                    >
                      Inactivos
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Todos
                    </button>
                  </div>
                </div>
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </Navegacion>
    </Layout>
  );
};

export default LayoutPrincipal;
