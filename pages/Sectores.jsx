import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

import { FirebaseContext } from "../firebase";

import Layout from "../components/layout/Layout";
import Navegacion from "../components/layout/Navegacion";
import ClienteMiniaturaDetalle from "../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../components/ui/Spinner";
import ButtonFloat from "../components/ui/ButtonFloat";
import LayoutPrincipal from "../components/layout/LayoutPrincipal";
import Sector from "../components/ui/Sector";
import InputModal from "../components/ui/InputModal";
import useSector from "../hooks/useSector";
import SectorEditarModal from "../components/ui/SectorEditarModal";

const Clientes = () => {
  const {
    sectores,
    setSectores,
    cargando,
    busqueda,
    setBusqueda,
  } = useSector();
  const { firebase, usuario } = useContext(FirebaseContext);

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
    <div className="row justify-content-center">
      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <h5 className="card-header">Sectores</h5>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table">
                <thead className="bg-light">
                  <tr className="border-0">
                    <th className="border-0">#</th>
                    <th className="border-0">Nombre</th>
                    <th className="border-0">Descripción</th>
                    <th className="border-0">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {sectores.map((sector, index) => (
                    <Sector
                      key={sector.id}
                      id={sector.id}
                      sector={sector}
                      index={index + 1}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
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
