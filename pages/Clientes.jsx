import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import ClienteMiniaturaDetalle from "../components/ui/ClienteMiniaturaDetalle";
import Spinner from "../components/ui/Spinner";
import ButtonFloat from "../components/ui/ButtonFloat";
import LayoutPrincipal from "../components/layout/LayoutPrincipal";
import useCliente from '../hooks/useCliente';

const Clientes = () => {
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
    <>
    <Head>
          <link rel="stylesheet" type="text/css" href="../static/assets/vendor/datatables/css/dataTables.bootstrap4.css"/>
    <link rel="stylesheet" type="text/css" href="../static/assets/vendor/datatables/css/buttons.bootstrap4.css"/>
    <link rel="stylesheet" type="text/css" href="../static/assets/vendor/datatables/css/select.bootstrap4.css"/>
    <link rel="stylesheet" type="text/css" href="../static/assets/vendor/datatables/css/fixedHeader.bootstrap4.css"/>

        <script src="../static/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
        <script src="../static/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
        <script src="../static/assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
        <script src="../static/assets/vendor/slimscroll/jquery.slimscroll.js"></script>
        <script src="../static/assets/vendor/multi-select/js/jquery.multi-select.js"></script>
        <script src="../static/assets/libs/js/main-js.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script src="../static/assets/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
        <script src="../static/assets/vendor/datatables/js/buttons.bootstrap4.min.js"></script>
        <script src="../static/assets/vendor/datatables/js/data-table.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
        <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
        <script src="https://cdn.datatables.net/rowgroup/1.0.4/js/dataTables.rowGroup.min.js"></script>
        <script src="https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js"></script>
        <script src="https://cdn.datatables.net/fixedheader/3.1.5/js/dataTables.fixedHeader.min.js"></script>
    </Head>

    <div className="col-lg-12 p-0">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Data Tables - Print, Excel, CSV, PDF Buttons</h5>
        </div>
        <div className="campaign-table table-responsive">
          <table id="example" className="table table-striped table-bordered second table-hover">
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
    </>
  );
  return (
    <>
      <LayoutPrincipal
        cargando={false}
        handleChange={handleChange}
        hanbleBuscar={hanbleBuscar}
        titulo="Listas de clientes"
        busqueda={busqueda}
        btnIr="/add/Cliente"
      >
          <ButtonFloat modal={false} ir="/add/Cliente"/>
        {Componente}
      </LayoutPrincipal>
    </>
  );
};

export default Clientes;
