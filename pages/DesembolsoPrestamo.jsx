import React, { useState, useContext, useEffect } from "react";
import SolicitudDesembolsoMiniatura from "../components/ui/SolicitudDesembolsoMiniatura";
import Spinner from "../components/ui/Spinner";
import ButtonFloat from "../components/ui/ButtonFloat";
import LayoutPrincipal from "../components/layout/LayoutPrincipal";
import useSolicitud from "../hooks/useSolicitud";

//Modal
import DesembolsoModal from "../components/modal/DesembolsoModal";

const DesembolsoPrestamo = () => {
  const [solicitudDetalles, setSolicitudDetalles] = useState({});
  const [solicitudAutorizada, setSolicitudAutorizada] = useState([]);
  //hook cliente

  const {
    solicitudes,
    setSolicitudes,
    busqueda,
    cargando,
    setBusqueda,
  } = useSolicitud("desc");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    // console.log(busqueda);
  };

  // setSolicitudes(solicitudes.filter(x=>x.estado === "Autorizado"));
  //TODO Filtra las solicitudes por su estado
  useEffect(()=> {
    // solicitudTemp = solicitudes.filter(solicitud => solicitud.estado === "Autorizado");
    // setSolicitudAutorizada(solicitudTemp);

    setSolicitudes(solicitudes.filter(x=>x.estado === "Autorizado"));

  }, []);

  const hanbleBuscar = (e) => {
    e.preventDefault();

    if (busqueda.trim()) {
      const buscar = busqueda.toLowerCase().trim();
      const filtro = solicitudes.filter((solicitud) => {
        return (
          solicitud.cliente.nombre.toLowerCase() +
          " " +
          solicitud.cliente.apellido.toLowerCase()
        ).includes(buscar);
      });

      //filtro itera en cada uno de ellos, combierte el nombrer en minusculas
      //y luego si lo encuentra lo agrega a filter
      // console.log(filtro,' BUSQUEDA: ', busqueda);
      setClientes(filtro);
      // console.log(clientes);
    }
  };
  const Componente = cargando ? (
    <Spinner />
  ) : (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card">
            <h5 className="card-header">Solicitudes</h5>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table">
                  <thead className="bg-light">
                    <tr className="border-0">
                    <th className="border-0">#</th>
                      <th className="border-0">Foto</th>
                      <th className="border-0">Nombre</th>
                      <th className="border-0">Periodo</th>
                      <th className="border-0">Cuotas</th>
                      <th className="border-0">Monto solicitado</th>
                      <th className="border-0">Fecga de ebtrega</th>
                      <th className="border-0">Periodo</th>
                      <th className="border-0">Interes</th>
                      <th className="border-0">Estado</th>
                      <th className="border-0">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solicitudes.map((solicitud, index) => (
                      <>
                        {solicitud.estado === "Autorizado" && (
                          <SolicitudDesembolsoMiniatura
                            key={solicitud.id}
                            solicitud={solicitud}
                            setSolicitudDetalles={setSolicitudDetalles}
                            index={index}
                          />
                        )}
                        {solicitudes.length === 0 && (
                          <div className="page-wrap d-flex flex-row align-items-center">
                            <div className="container">
                              <div className="row justify-content-center">
                                <div className="col-md-12 text-center">
                                  <span className="display-1 d-block">404</span>
                                  <div className="mb-4 lead">
                                    The page you are looking for was not found.
                                  </div>
                                  <a
                                    href="https://www.totoprayogo.com/#"
                                    className="btn btn-link"
                                  >
                                    Back to Home
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <LayoutPrincipal
        cargando={false}
        handleChange={handleChange}
        hanbleBuscar={hanbleBuscar}
        titulo="Desembolso de Prestamos"
        busqueda={busqueda}
        btnIr="/add/Solicitud"
      >
        {/* <ButtonFloat modal={false} ir="/add/Solicitud" /> */}
        <DesembolsoModal solicitudDetalles={solicitudDetalles} />

        {Componente}
      </LayoutPrincipal>
    </>
  );
};

export default DesembolsoPrestamo;
