//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Navegacion from "../components/layout/Navegacion";
import ClienteMiniaturaDetalle from "../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../components/ui/Spinner";
import useCuotas from '../hooks/useCuotas';
import usePrestamo from '../hooks/usePrestamo';
import useCalculadora from '../hooks/useCalculadora';

const Pagos = () => {
  const { cuotasPendientes, transformarFechaYMD, fechaActual } = useCuotas();
  const { prestamos } = usePrestamo();
  const { setMoneda,formatearFecha } = useCalculadora();
  console.log(fechaActual);
  
  
  const [consultarDB, setConsultarDB] = useState(true);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [clientes, setClientes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    // console.log(busqueda);
  };
  
  useEffect(() => {
    console.log(cuotasPendientes);
    
  },[cuotasPendientes]);
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
  // prueba();

  }, [usuario]);
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
    <div className="col-lg-12">
      <div className="section-block row justify-content-between m-0 p-0 mb-2">
        <h3 className="section-title col-auto p-0">Lista de cuotas de hoy</h3>
        <div
          className="btn-group col-auto col-auto p-0"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-sm btn-outline-danger">
            Atradas
          </button>
          <button type="button" className="btn btn-sm btn-outline-warning">
            Al dia
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
                <th className="border-0">#</th>
                <th className="border-0">Valor de la cuota</th>
                <th className="border-0">Saldo al capital</th>
                <th className="border-0">Fecha</th>
                <th className="border-0">Capital</th>
              </tr>
            </thead>
            <tbody>
              {/* {clientes.map((cliente) => (
                <ClienteMiniaturaDetalle key={cliente.id} cliente={cliente} />
              ))} */}
                  {cuotasPendientes.map(prestamo=> (
                    <>
                        <tr className="group" key={prestamo.creado}>
                          <td colSpan="5">{prestamo.cliente.nombre + ' ' + prestamo.cliente.apellido}</td>
                        </tr>
                        {prestamo.detallesCuotas.map(ct=> (
                        <>
                          <tr role="row" key={ct.cuota + ct.fecha + ct.valorCuota} className={`alert ${fechaActual == transformarFechaYMD(ct.fecha) ? 'alert-warning' : 'alert alert-danger'}`}>
                            {/* {console.log('formatearFecha',formatearFecha(ct.creado,'dmy'))} */}
                            {/* {console.log('fecha',fecha)} */}
                          {/* <td>{setMoneda(ct.interes)}</td> */}
                          <td>{ct.cuota}</td>
                          <td>{setMoneda(ct.valorCuota)}</td>
                          <td>{setMoneda(ct.saldoCapital)}</td>
                          <td>{ct.fecha}</td>
                          {/* <td>{ct.estado}</td> */}
                          <td>
                            <div className="btn-group ml-auto">
                              <button
                                className="btn btn-sm btn-outline-danger"
                                // onClick={e => onClickConfirmar(ct.cuota)}
                              >
                                Cobrar
                              </button>
                            </div>
                          </td>
                          </tr>
                        </>
                      ))}
                    </>
                  ))}
            </tbody>
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
      setClientes(filtro);
      // console.log(clientes);
    }
  };
  return (
    <Layout>
      {/* {firebase.cargando && (<div className="spinner"><Spinner/></div>)} */}

      <Navegacion titulo="Lista de Clientes">
        <div className="row justify-content-center">
          {/* <Link href="/add/Cliente">
            <a className="btn btn-primary shadow float-right col-md-auto offset-md-7">
              Registrar un Cliente
            </a>
          </Link> */}
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

export default Pagos;
