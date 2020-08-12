import React, { useState, useContext, useEffect } from "../../node_modules/react";
import UsuarioMiniaturaDetalle from "../../components/ui/UsuarioMiniaturaDetalle";
import Spinner from "../../components/ui/Spinner";
import ButtonFloat from "../../components/ui/ButtonFloat";
import LayoutPrincipal from "../../components/layout/LayoutPrincipal";
import useCliente from '../../hooks/useCliente';

const Usuarios = () => {
  //hook cliente
  const {clientes, setClientes, cargando, busqueda, setBusqueda} =  useCliente("desc");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    // console.log(busqueda);
  };

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
    <div className="col-lg-12 p-0">
      <div className="card">
        <div className="campaign-table table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="border-0">
                <th className="border-0">Foto</th>
                <th className="border-0">Usuario</th>
                <th className="border-0">Telefono</th>
                <th className="border-0">Correo</th>
                <th className="border-0">Accion</th>
              </tr>
            </thead>
            <tbody>
            {clientes.map((cliente) => (
              <UsuarioMiniaturaDetalle key={cliente.id} cliente={cliente} />
            ))}
            </tbody>
          </table>
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
        titulo="Listas de Usuarios"
        busqueda={busqueda}
        btnIr="/add/Usuario"
      >
          <ButtonFloat modal={false} ir="/add/Usuario"/>
        {Componente}
      </LayoutPrincipal>
    </>
  );
};

export default Usuarios;
