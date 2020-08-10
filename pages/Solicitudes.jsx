import React, { useState, useContext, useEffect } from "react";
import SolicitudMiniatura from "../components/ui/SolicitudMiniatura";
import Spinner from "../components/ui/Spinner";
import ButtonFloat from "../components/ui/ButtonFloat";
import LayoutPrincipal from "../components/layout/LayoutPrincipal";
import useSolicitud from "../hooks/useSolicitud";

//Modal
import SolicitudEditarModal from "../components/modal/SolicitudEditarModal";

const Solicitudes = () => {
  const [solicitudDetalles, setSolicitudDetalles] = useState({});
  const [actualiza, setActualiza] = useState(false);
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
                        <th className="border-0">Cliente</th>
                        <th className="border-0">Tipo de Prestamo</th>
                        <th className="border-0">Interes</th>
                        <th className="border-0">Cuotas</th>
                        <th className="border-0">Fecha de entrega</th>
                        <th className="border-0">Tipo de Tasa</th>
                        <th className="border-0">Periodo</th>
                        <th className="border-0">Tasa</th>
                        <th className="border-0">Estado</th>
                        <th className="border-0">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {solicitudes.map((solicitud, index) => (
                        <SolicitudMiniatura
                          key={solicitud.id}
                          solicitud={solicitud}
                          setActualiza={setActualiza}
                          setSolicitudDetalles={setSolicitudDetalles}
                          index={index}
                        />
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
        titulo="Listas de Solicitudes"
        busqueda={busqueda}
        btnIr="/add/Solicitud"
      >
        <ButtonFloat modal={false} ir="/add/Solicitud" />
        <SolicitudEditarModal 
          solicitudDetalles={solicitudDetalles}
          actualiza={actualiza}
          setActualiza={setActualiza}
        />

        {Componente}
      </LayoutPrincipal>
    </>
  );
};

export default Solicitudes;
