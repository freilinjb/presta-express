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
        setCargando(true);
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
    console.log(prestamos);
  }

  const handleClickActivo=()=> {
    const filtros = prestamos.filter(prestamo => {
      return(
        (prestamo.estado == 'activo')
      )
  });
  }

  const handleClickInactivo=()=> {
    const filtros = prestamos.filter(prestamo => {
      return(
        (prestamo.estado == 'inactivo')
      )
    });
  }

  const handleClickFinalizados=()=> {
    const filtro = prestamos.filter(prestamo=> {
      return(
        (prestamo.estado == 'finalizado')
      )
    })
  }

  const Componente = cargando ? (
    <Spinner />
  ) : (
    <div className="col-lg-12">
      <div className="section-block">
      <div className="section-block row justify-content-between m-0 p-0 mb-2"><h3 class="section-title col-auto p-0">Lista de Prestamos</h3>
      <div className="btn-group col-auto col-auto p-0" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-sm btn-outline-light" onClick={handleClickActivo}>Activos</button>
        <button type="button" className="btn btn-sm btn-outline-light">Finalizados</button>
        <button type="button" className="btn btn-sm btn-outline-light">Incobrabres</button>
        <button type="button" className="btn btn-sm btn-outline-primary">Todos</button>
      </div>
  </div>
      </div>
      {prestamos.map((prestamo) => (
        <>
        
        <div className="container">
          <div className="row">
            <div className="[ col-xs-12 col-sm-12 ]">
              <ul className="event-list">
                <Prestamo key={prestamo.id} prestamo={prestamo}/>
              </ul>
            </div>
          </div>
        </div>
          {/* <!-- Project--> */}

        <style>{`
          @import url("http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic");
          @import url("//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css");
          
          .event-list {
          list-style: none;
          font-family: 'Lato', sans-serif;
          margin: 0px;
          padding: 0px;
        }
        .event-list > li {
          background-color: rgb(255, 255, 255);
          box-shadow: 0px 0px 5px rgb(51, 51, 51);
          box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.7);
          padding: 0px;
          margin: 0px 0px 20px;
        }
        .event-list > li > time {
          display: inline-block;
          width: 100%;
          color: rgb(255, 255, 255);
          background-color: rgb(197, 44, 102);
          padding: 5px;
          text-align: center;
          text-transform: uppercase;
        }
        .event-list > li:nth-child(even) > time {
          background-color: rgb(165, 82, 167);
        }
        .event-list > li > time > span {
          display: none;
        }
        .event-list > li > time > .day {
          display: block;
          font-size: 56pt;
          font-weight: 100;
          line-height: 1;
        }
        .event-list > li time > .month {
          display: block;
          font-size: 24pt;
          font-weight: 900;
          line-height: 1;
        }
        .event-list > li > img {
          width: 100%;
        }
        .event-list > li > .info {
          padding-top: 5px;
          text-align: center;
        }
        .event-list > li > .info > .title {
          font-size: 17pt;
          font-weight: 700;
          margin: 0px;
        }
        .event-list > li > .info > .desc {
          font-size: 13pt;
          font-weight: 300;
          margin: 0px;
        }
        .event-list > li > .info > ul,
        .event-list > li > .social > ul {
          display: table;
          list-style: none;
          margin: 10px 0px 0px;
          padding: 0px;
          width: 100%;
          text-align: center;
        }
        .event-list > li > .social > ul {
          margin: 0px;
        }
        .event-list > li > .info > ul > li,
        .event-list > li > .social > ul > li {
          display: table-cell;
          cursor: pointer;
          color: rgb(30, 30, 30);
          font-size: 11pt;
          font-weight: 300;
              padding: 3px 0px;
        }
          .event-list > li > .info > ul > li > a {
          display: block;
          width: 100%;
          color: rgb(30, 30, 30);
          text-decoration: none;
        } 
          .event-list > li > .social > ul > li {    
              padding: 0px;
          }
          .event-list > li > .social > ul > li > a {
              padding: 3px 0px;
        } 
        .event-list > li > .info > ul > li:hover,
        .event-list > li > .social > ul > li:hover {
          color: rgb(30, 30, 30);
          background-color: rgb(200, 200, 200);
        }
        .pagar a,
        .telefono a,
        .correo a {
          display: block;
          width: 100%;
          color: rgb(75, 110, 168) !important;
        }
        .correo a {
          color: rgb(79, 213, 248) !important;
        }
        .pagar a {
          color: rgb(221, 75, 57) !important;
        }
        .telefono:hover a {
          color: rgb(255, 255, 255) !important;
          background-color: rgb(75, 110, 168) !important;
        }
        .correo:hover a {
          color: rgb(255, 255, 255) !important;
          background-color: rgb(79, 213, 248) !important;
        }
        .pagar:hover a {
          color: rgb(255, 255, 255) !important;
          background-color: rgb(221, 75, 57) !important;
        }

        @media (min-width: 768px) {
          .event-list > li {
            position: relative;
            display: block;
            width: 100%;
            height: 120px;
            padding: 0px;
          }
          .event-list > li > time,
          .event-list > li > img  {
            display: inline-block;
          }
          .event-list > li > time,
          .event-list > li > img {
            width: 150px;
            float: left;
          }
          .event-list > li > .info {
            background-color: rgb(245, 245, 245);
            overflow: hidden;
          }

          .event-list > li > time,
          .event-list > li > img {
            width: 190px;
            height: 120px;
            padding: 0px;
            margin: 0px;
          }
          .event-list > li > .info {
            position: relative;
            height: 120px;
            text-align: left;
            padding-right: 40px;
          }	
          .event-list > li > .info > .title, 
          .event-list > li > .info > .desc {
            padding: 0px 10px;
          }
          .event-list > li > .info > ul {
            position: absolute;
            left: 0px;
            bottom: 0px;
          }
          .event-list > li > .social {
            position: absolute;
            top: 0px;
            right: 0px;
            display: block;
            width: 40px;
          }
              .event-list > li > .social > ul {
                  border-left: 1px solid rgb(230, 230, 230);
              }
          .event-list > li > .social > ul > li {			
            display: block;
                  padding: 0px;
          }
          .event-list > li > .social > ul > li > a {
            display: block;
            width: 40px;
            padding: 10px 0px 9px;
          }
        } 
        .detalles {
              width: 50%;
        }
        .telefono {
          width: 33%;
        }
        .correo {
          width: 34%;
        }
        .pagar {
          width: 33%;
        }
       `}</style>
        </>
      ))}
    </div>
  );

  const hanbleBuscar = (e) => {
    e.preventDefault();

    if (busqueda.trim()) {
      const buscar = busqueda.toLowerCase().trim()
          const filtro = prestamos.filter(prestamo => {
              return(
                (prestamo.cliente.nombre.toLowerCase() + ' '+prestamo.cliente.apellido.toLowerCase()).includes(buscar)
              )
          });
          
          //filtro itera en cada uno de ellos, combierte el nombrer en minusculas 
          //y luego si lo encuentra lo agrega a filter
          // console.log(filtro,' BUSQUEDA: ', busqueda);
          setPrestamos(filtro);
          // console.log(clientes);
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
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 mt-2">
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
