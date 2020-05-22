//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Navegacion from "../components/layout/Navegacion";
import ClienteMiniaturaDetalle from "../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../components/ui/Spinner";
import ButtonFloat from "../components/ui/ButtonFloat";
import Busqueda from "../components/ui/Busqueda";

const Clientes = (props) => {
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const { firebase, usuario } = useContext(FirebaseContext);


  return (
    <Layout title="Clientes">
      {/* {firebase.cargando && (<div className="spinner"><Spinner/></div>)} */}

      <Navegacion titulo={"Lista de Clientes"}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 mt-2 p-0">
            <Busqueda hanbleBuscar={hanbleBuscar} handleChange={handleChange} busqueda={busqueda}/>
            
            <div className="">
              {cargando && <Spinner className="spinner" />}
              {/* {Componente} */}
              <div className="col-lg-12 p-0">
                <Link href="/add/Cliente">
                  <a>
                    <ButtonFloat />
                  </a>
                </Link>
                <div className="section-block row justify-content-between m-0 p-0 mb-2">
                  <h3 className="section-title col-auto p-0">
                    {props.nombre}
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

export default Clientes;