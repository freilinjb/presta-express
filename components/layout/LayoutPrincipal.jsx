//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../../firebase";
import Navegacion from "../layout/Navegacion";
import Spinner from "../ui/Spinner";
import ButtonFloat from "../ui/ButtonFloat";

const Clientes = () => {
  const [consultarDB, setConsultarDB] = useState(true);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [clientes, setClientes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    // console.log(busqueda);
  };


  // console.log(clientes);

  const Componente = cargando ? (
    <Spinner />
  ) : (
    <div className="col-lg-12 p-0">
      <Link href="/add/Cliente">
        <a>
          <ButtonFloat />
        </a>
      </Link>
      <div className="section-block row justify-content-between m-0 p-0 mb-2">
        <h3 className="section-title col-auto p-0">Lista de Clientes</h3>
        <div
          className="btn-group col-auto col-auto p-0"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-sm btn-outline-light">
            Activo
          </button>
          <button type="button" className="btn btn-sm btn-outline-light">
            Inactivos
          </button>
          <button type="button" className="btn btn-sm btn-outline-primary">
            Todos
          </button>
        </div>
      </div>
    </div>
  );

  const hanbleBuscar = (e) => {
    e.preventDefault();

    if (busqueda.trim()) {
      const buscar = busqueda.toLowerCase().trim();
      const filtro = clientes.filter((cliente) => {
        return (
          (
            cliente.nombre.toLowerCase() +
            " " +
            cliente.apellido.toLowerCase()
          ).includes(buscar) || cliente.cedula.toLowerCase().includes(buscar)
        );
      });

      //filtro itera en cada uno de ellos, combierte el nombrer en minusculas
      //y luego si lo encuentra lo agrega a filter
      // console.log(filtro,' BUSQUEDA: ', busqueda);
      // console.log(clientes);
    }
  };
  return (
    <Layout title="Clientes">
      {/* {firebase.cargando && (<div className="spinner"><Spinner/></div>)} */}

      <Navegacion titulo={"Lista de Clientes"}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 mt-2 p-0">
            <div className="card">
              <div className="card-body">
                <form onSubmit>
                  <input
                    className="form-control form-control-lg"
                    type="search"
                    placeholder="Buscar..."
                    aria-label="Buscar..."
                    name="busqueda"
                  />
                  <button className="btn btn-primary search-btn" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
            <div className="">
              {cargando && <Spinner className="spinner" />}
              {/* {Componente} */}
              {props.children}
            </div>
          </div>
        </div>
      </Navegacion>
    </Layout>
  );
};

export default Clientes;
