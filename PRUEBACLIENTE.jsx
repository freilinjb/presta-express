//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Navegacion from "../components/layout/Navegacion";
import ClienteMiniaturaDetalle from "../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../components/ui/Spinner";
import ButtonFloat from "../components/ui/ButtonFloat";

const Clientes = (props) => {
  const [consultarDB, setConsultarDB] = useState(true);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [clientes, setClientes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    // console.log(busqueda);
  };

  // const usuario = useAutenticacion();

  useEffect(() => {
    if (usuario && busqueda.trim() === "" && firebase.cargando === false) {
      const { uid } = usuario;
      console.log(" se cumplio");

      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      try {
        const obtenerClientes = async () => {
          await firebase.db
            .collection("Clientes")
            .where("creador.id", "==", uid)
            .orderBy("creado", "desc")
            .onSnapshot(manejarSnapshot); //Ordena por creado
        };
        obtenerClientes();
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    }
  }, [usuario, busqueda, firebase.cargando]);
  //se ejecuta cuando el componente esta listo
  function manejarSnapshot(snapshot) {
    const clientes = snapshot.docs.map((doc) => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    //resultado de la consulta
    setClientes(clientes);
    // console.log(clientes);
  }

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
      <div className="card">
        <div className="campaign-table table-responsive">
          <table className="table">
            <thead>
              <tr className="border-0">
                <th className="border-0">Foto</th>
                <th className="border-0">Nombre</th>
                <th className="border-0">Telefono</th>
                <th className="border-0">Correo</th>
                <th className="border-0">Accion</th>
              </tr>
            </thead>
            {clientes.map((cliente) => (
              <ClienteMiniaturaDetalle key={cliente.id} cliente={cliente} />
            ))}
          </table>
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
      setClientes(filtro);
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
                <form onSubmit={hanbleBuscar}>
                  <li class="nav-item">
                    <div id="custom-search" class="top-search-bar">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Search.."
                      />
                    </div>
                  </li>
                </form>
              </div>
            </div>
            <div className="">
              {cargando && <Spinner className="spinner" />}
              {Componente}
            </div>
          </div>
        </div>
      </Navegacion>
    </Layout>
  );
};

export default Clientes;
