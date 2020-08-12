import React, { useState, useContext, useEffect } from "../../node_modules/react";
import Link from "next/link";

import { FirebaseContext } from "../../firebase";

import Layout from "../../components/layout/Layout";
import Navegacion from "../../components/layout/Navegacion";
import ClienteMiniaturaDetalle from "../../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../../components/ui/Spinner";
import ButtonFloat from "../../components/ui/ButtonFloat";
import LayoutPrincipal from "../../components/layout/LayoutPrincipal";
import Sector from "../../components/ui/Sector";
import InputModal from "../../components/ui/InputModal";
import useCliente from "../../hooks/useCliente";
import SectorEditarModal from "../../components/ui/SectorEditarModal";
import ReporteCliente from "../../components/reportes/ReporteCliente";

const Clientes = () => {
  const {
    clientes,
    setClientes,
    cargando,
    busqueda,
    setBusqueda,
  } = useCliente('desc');
//   const { firebase, usuario } = useContext(FirebaseContext);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    // console.log(busqueda);
  };

  const hanbleBuscar = (e) => {
    e.preventDefault();

    if (busqueda.trim()) {
      const buscar = busqueda.toLowerCase().trim();
      const filtro = sectores.filter((sectore) => {
        return (
          sectore.nombre.toLowerCase().includes(buscar) ||
          sectore.descripcion.toLowerCase().includes(buscar)
        );
      });

      //filtro itera en cada uno de ellos, combierte el nombrer en minusculas
      //y luego si lo encuentra lo agrega a filter
      // console.log(filtro,' BUSQUEDA: ', busqueda);
      setSectores(filtro);
      // console.log(sectores);
    }
  };
  const Componente = cargando ? (
    <Spinner />
  ) : (
      <>
      
    <div className="row justify-content-center">
        
    <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
      <div className="card">
        <div className="campaign-table table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="border-0">
                <th className="border-0">Foto</th>
                <th className="border-0">Nombre</th>
                <th className="border-0">Telefono</th>
                <th className="border-0">Correo</th>
                <th className="border-0">Accion</th>
              </tr>
            </thead>
            <tbody>
            {clientes.map((cliente) => (
              <ClienteMiniaturaDetalle key={cliente.id} cliente={cliente} />
            ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
        <ReporteCliente/>
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
        titulo="Lista de Sectores"
        busqueda={busqueda}
        id="sectorModal"
      >
        <ButtonFloat modal={true} />
        <SectorEditarModal />
        <InputModal />
        {Componente}
      </LayoutPrincipal>
    </>
  );
};

export default Clientes;
