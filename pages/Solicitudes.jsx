import React, { useState, useContext, useEffect } from "react";
import SolicitudMiniatura from "../components/ui/SolicitudMiniatura";
import Spinner from "../components/ui/Spinner";
import ButtonFloat from "../components/ui/ButtonFloat";
import LayoutPrincipal from "../components/layout/LayoutPrincipal";
import useSolicitud from "../hooks/useSolicitud";

const Solicitudes = () => {
  //hook cliente
  const { solicitudes, setSolicitudes, busqueda, cargando, setBusqueda } = useSolicitud(
    "desc"
  );

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
          (
            solicitud.cliente.nombre.toLowerCase() +
            " " +
            solicitud.cliente.apellido.toLowerCase()
          ).includes(buscar)
        );
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
    <div className="row justify-content-center">
      <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
        {solicitudes.map((solicitud) => (
          <SolicitudMiniatura key={solicitud.id} solicitud={solicitud} />
        ))}
      </div>
    </div>
  );
  return (
    <>
      <LayoutPrincipal
        cargando={false}
        handleChange={handleChange}
        hanbleBuscar={hanbleBuscar}
        busqueda={busqueda}
        btnIr="/add/Solicitud"
      >
        <ButtonFloat modal={false} ir="/add/Solicitud" />
        {Componente}
      </LayoutPrincipal>
    </>
  );
};

export default Solicitudes;
