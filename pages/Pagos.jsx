//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Navegacion from "../components/layout/Navegacion";
import Spinner from "../components/ui/Spinner";
import ModalCobroParcial from '../components/ui/ModalCobroParcial';

import useCuotas from '../hooks/useCuotas';
import usePrestamo from '../hooks/usePrestamo';
import useCalculadora from '../hooks/useCalculadora';
import usePagoParcial from '../hooks/usePagoParcial';
const Pagos = () => {
  const { cuotasPendientes, transformarFechaYMD, fechaActual, compararFechas } = useCuotas();
  // const { prestamos } = usePrestamo();
  const { cuotaParcial, setCuotaParcial } = usePagoParcial();
  const { setMoneda,formatearFecha } = useCalculadora();
  // console.log(fechaActual);
  let fechaF = new Date().now;
  fechaF = formatearFecha(fechaF);
  

  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  //Toma el prestamo completo que se preciono Click
  const [prestamo, setPrestamo] = useState({});
  const [cuota, setCuota] = useState(0);

  const [actualizarCuotas, setActualizarCuotas] = useState(false);
  const [clientes, setClientes] = useState([]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  
  const  handleClick=(valor, cuota)=> {
    const filtrar = cuotasPendientes.filter(prestamo => {
      return prestamo.id === valor
    });

    setPrestamo(filtrar);
    setCuota(cuota);
    setCuotaParcial(cuota);
    console.log(cuota);
    console.log(filtrar);
  }

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
                        {prestamo.estado == 'activo' && (
                          <tr className="group" key={prestamo.creado}>
                            <td colSpan="5">{prestamo.cliente.nombre + ' ' + prestamo.cliente.apellido}</td>
                          </tr>
                        )}
                        {prestamo.detallesCuotas.map(ct=> (
                        <>
                        {(ct.estado == 'pendiente' || ct.estado == 'parcial') &&
                         (
                          <tr role="row" key={ct.cuota + ct.fecha + ct.valorCuota} className={`alert ${fechaF == (ct.fecha) ? 'alert-warning' : 'alert alert-danger'}`}>
                            {/* {console.log('formatearFecha',formatearFecha(ct.creado,'dmy'))} */}
                            {/* {console.log('fecha',fecha)} */}
                          {/* <td>{setMoneda(ct.interes)}</td> */}
                          <td>{ct.cuota}</td>
                          <td> {fechaActual === transformarFechaYMD(ct.fecha) ? setMoneda(ct.valorCuota) : setMoneda(ct.valorCuota) +' + '+ ct.valorCuota*0.05 }</td>
                          <td>{setMoneda(ct.saldoCapital)}</td>
                          <td>{ct.fecha}</td>
                          {/* <td>{ct.estado}</td> */}
                          <td>=
                            <div className="btn-group ml-auto">
                              <button
                                className="btn btn-sm btn-outline-danger"
                                data-toggle="modal"
                                data-target="#modalPagoParcial"
                                data-whatever="@mdo"
                                value={prestamo.id}
                                onClick={e=> handleClick(prestamo.id, ct.cuota)}
                              >
                                Cobrar
                              </button>
                            </div>
                          </td>
                          </tr>
                        )}
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

      <Navegacion titulo="Lista de Cuotas pendientes">
        {Object.entries(prestamo).length && console.log('prestamo','=>',prestamo)}
        {Object.entries(prestamo).length > 0 && (<ModalCobroParcial prestamo={prestamo[0]} id={prestamo.id} cuotaParcial={cuotaParcial} setActualizarCuotas={setActualizarCuotas}/>)}
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
