//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Navegacion from "../components/layout/Navegacion";
import ClienteMiniaturaDetalle from "../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../components/ui/Spinner";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

import usePrestamos from '../hooks/usePrestamo';

const Prestamos = () => {
    const { joinsCollectionsHandler } = usePrestamos();
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [prestamos, setPrestamos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    if (usuario && busqueda.trim() === "" && firebase.cargando === false) {
      const { uid } = usuario;
      console.log(" se cumplio");

      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      try {
        const obtenerPrestamos = async () => {
          await firebase.db
            .collection("Prestamos")
            .where("creador.id", "==", uid)
            .orderBy("creado", "desc")
            .onSnapshot(PrestamosSnapshot); //Ordena por creado
        };
        obtenerPrestamos();

      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false); 
        joinsCollectionsHandler();       
      }
    }
  }, [usuario, busqueda]);
  //se ejecuta cuando el componente esta listo
  function PrestamosSnapshot(snapshot) {
    const prestamos = snapshot.docs.map((doc) => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setPrestamos(prestamos);
    // console.log(prestamos);
  }

  console.log(prestamos);

  const Componente = cargando ? (
    <Spinner />
  ) : (
    <div className="col-lg-12">
      <div className="section-block">
        <div className="row justify-content-between">
          <div className="col-4">
            <h3 className="section-title">Lista de Clientes</h3>
          </div>
          <div className="col-3">
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-success">
                Activos
              </button>
              <button type="button" className="btn btn-warning">
                Atrasados
              </button>
              <button type="button" className="btn btn-danger">
                Cancelados
              </button>
              <button type="button" className="btn btn-info">
                Todos
              </button>
            </div>
          </div>
        </div>
      </div>
      {prestamos.map((prestamo) => (
        <>
          {/* <!-- Project--> */}
          <div key={prestamo.id} className="project">
            <div className="row bg-white has-shadow">
              <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                <div className="project-title d-flex align-items-center">
                  <div className="image has-shadow">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <h3 className="h4">{prestamo.cliente.nombre +' '+prestamo.cliente.apellido}</h3>
                    <small>Lorem Ipsum Dolor</small>
                  </div>
                </div>
                <div className="project-date">
                  <span className="hidden-sm-down">Today at 4:24 AM</span>
                </div>
              </div>
              <div className="right-col col-lg-6 d-flex align-items-center">
                <div className="time">
                  <i className="fa fa-clock-o"></i>
                  {formatDistanceToNow(new Date(prestamo.creado), {
                    locale: es,
                  })}
                </div>
                <div className="comments">
                  <i className="fa fa-comment-o"></i>
                  {prestamo.cuotas}
                </div>
                <div className="project-progress">
                  <div className="progress">
                    <div
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar float-right"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project--> */}
          {/* <ClienteMiniaturaDetalle key={cliente.id} cliente={cliente} /> */}

          <style>{`
        .project .row {
            margin: 0;
            padding: 15px 0;
            margin-bottom: 15px
        }

        .project div[class*='col-'] {
            border-right: 1px solid #eee
        }

        .project .text h3 {
            margin-bottom: 0;
            color: #555
        }

        .project .text small {
            color: #aaa;
            font-size: 0.75em
        }

        .project .project-date span {
            font-size: 0.9em;
            color: #999
        }

        .project .image {
            max-width: 50px;
            min-width: 50px;
            height: 50px;
            margin-right: 15px
        }

        .project .time,
        .project .comments,
        .project .project-progress {
            color: #999;
            font-size: 0.9em;
            margin-right: 20px
        }

        .project .time i,
        .project .comments i,
        .project .project-progress i {
            margin-right: 5px
        }

        .project .project-progress {
            width: 200px
        }

        .project .project-progress .progress {
            height: 4px
        }

        .project .card {
            margin-bottom: 0
        }

        .progress-bar {
            width: 50%; 
            height: 6px;
        }
     `}</style>
        </>
      ))}
    </div>
  );

  const hanbleBuscar = (e) => {
    e.preventDefault();

    if (busqueda.trim()) {
      const buscar = busqueda.toLowerCase().trim();
      const filtro = prestamos.filter((cliente) => {
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
      setPrestamos(filtro);
      // console.log(prestamos);
    }
  };
  return (
    <Layout>
      {/* {firebase.cargando && (<div className="spinner"><Spinner/></div>)} */}

      <Navegacion titulo={"Lista de Clientes"}>
        <div className="row justify-content-center">
          <Link href="/add/Prestamo">
            <a className="btn btn-primary shadow float-right col-md-auto offset-md-7">
              Nuevo Prestamo
            </a>
          </Link>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 mt-2">
            <div className="card">
              <div className="card-body">
                <form onSubmit={hanbleBuscar}>
                  <input
                    className="form-control form-control-lg"
                    type="search"
                    placeholder="Buscar..."
                    aria-label="Buscar..."
                    name="busqueda"
                    value={busqueda}
                    onChange={handleChange}
                  />
                  <button className="btn btn-primary search-btn" type="submit">
                    Buscar
                  </button>
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

export default Prestamos;
