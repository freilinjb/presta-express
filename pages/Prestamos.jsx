//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Navegacion from "../components/layout/Navegacion";
import ClienteMiniaturaDetalle from "../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../components/ui/Spinner";
import Prestamo from '../components/ui/Prestamo';

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

import usePrestamos from '../hooks/usePrestamo';
import useCalculadora from '../hooks/useCalculadora';

const Prestamos = () => {
    const { setMoneda } = useCalculadora();
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

  // console.log(prestamos);

  const Componente = cargando ? (
    <Spinner />
  ) : (
    <div className="col-lg-12">
      <div className="section-block">
        <div className="row justify-content-between">
          <div className="col-4">
            <h3 className="section-title">Lista de Prestamos</h3>
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
            <Prestamo key={prestamo.id} prestamo={prestamo}/>
          {/* <!-- Project--> */}

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

        p {
            margin: 0px;
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