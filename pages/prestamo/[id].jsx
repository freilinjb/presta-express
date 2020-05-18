import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import swal from 'sweetalert';
import {useAlert} from 'react-alert';

import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout/Layout";
import Navegacion from "../../components/layout/Navegacion";
import Spinner from "../../components/ui/Spinner";
import PerfilCliente from "../../components/ui/PerfilCliente";
import ModalCobro from "../../components/ui/ModalCobro";
import useCalculadora from "../../hooks/useCalculadora";
import Checkbox from '../../components/ui/Checkbox';


const Prestamo = () => {
  const alert = useAlert();

  const [prestamo, setPrestamo] = useState({});
  const [cliente, setCliente] = useState({});
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [cuotas, setCuotas] = useState([]);
  const [pago, setPago] = useState(false);
  const { setMoneda } = useCalculadora();

  let resultados = [];
  const seleccion = [{
    cuota:0,
    estado: false
  }];

  const cuotasPagar = [];

  //Routing para obtener el id actual del producto
  const router = useRouter();
  const [consultarDB, setConsultarDB] = useState(true);
  // console.log(router);
  const {
    query: { id },
  } = router;

  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDB) {
      setCargando(true);
      const obtenerDatos = async () => {
        try {
          firebase.cargando = true;

          //Trae el documento que tenga el id
          const prestamoQuery = await firebase.db
            .collection("Prestamos")
            .doc(id);
          const prestamo = await prestamoQuery.get();
          if (prestamo.exists) {
            setPrestamo(prestamo.data());
            console.log(prestamo.data());


            //Es para evitar que se cicle el useEffect y con la condicion principal
            //y quitando el producto para evitar posibles errores
            const clienteQuery = await firebase.db
              .collection("Clientes")
              .doc(prestamo.data().cliente.id);
            const cliente = await clienteQuery.get();
            if (cliente.exists) {
              setCliente(cliente.data());
              //Es para evitar que se cicle el useEffect y con la condicion principal
              //y quitando el producto para evitar posibles errores

              setConsultarDB(false);
            } else {
              setError(true);
              setConsultarDB(false);
            }
            setConsultarDB(false);
          } else {
            setError(true);
            setConsultarDB(false);
          }
        } catch (error) {
          console.log(error);
        } finally {
          firebase.cargando = false;
        }
      };
      obtenerDatos();
    }
    //Si algo cambia en producto se actualiza: es por haVotado
  }, [id]);

  const onClicConfirmar = () => {

    swal({
      title: "Cobro de Cuota!!",
      text: "El monto a cobrar es ",
      icon: "info",
      buttons: true,
      dangerMode: false,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Datos guardado con exito!!", {
          icon: "success",
        });
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };

  const onCheckboxClicked=(idx, isChecked)=>{
    console.log();
    console.log('precionado desde aqui!!!');
        resultados = document.getElementsByName("cuota");
        for(const i in resultados) {
          if(Number(resultados[i].id) > 0 && resultados[i].checked) {
            cuotasPagar.push(Number(resultados[i].id));
            
          }
        }
        setCuotas(cuotasPagar);
  }

  return (
    <Layout>
      {/* {error ? <Error404/> : ( */}
      <Navegacion>
        {Object.keys(cliente).length === 0 && !error ? (
          <Spinner className="spinner" />
        ) : (
          <>
            <div className="row justify-content-center">
              <PerfilCliente cliente={cliente} />
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <h5 className="card-header">Lista de Cuotas</h5>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="bg-light">
                          <tr className="border-0">
                            <th className="border-0">Cuota #</th>
                            <th className="border-0">Interés</th>
                            <th className="border-0">Abono al capital</th>
                            <th className="border-0">Valor de la cuota</th>
                            <th className="border-0">Saldo al capital</th>
                            <th className="border-0">Fecha</th>
                            <th className="border-0">Estado</th>
                            <th className="border-0">Accion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {prestamo.detallesCuotas.map((cuotas) => (
                            <>
                            <tr className={cuotas.estado === 'pago' ? "alert alert-success" : null}>
                              <td>
                                {" "}
                                <div className="center">
                                {cuotas.estado === 'pago' ? (null) : (<Checkbox initialState={false} id={cuotas.cuota} onChange={onCheckboxClicked}/>)}
                                  
                                </div>{" "}
                              </td>
                              <td>{setMoneda(cuotas.interes)}</td>
                              <td>{setMoneda(cuotas.abonoCapital)}</td>
                              <td>{setMoneda(cuotas.valorCuota)}</td>
                              <td>{setMoneda(cuotas.saldoCapital)}</td>
                              <td>{cuotas.fecha}</td>
                              <td>{cuotas.estado}</td>
                              <td>
                                <div className="btn-group ml-auto">
                                  <button
                                    className="btn btn-sm btn-outline-light"
                                    onClick={onClicConfirmar}
                                    disabled={cuotas.estado === 'pago' ? true : false}
                                  >
                                    Cobrar
                                  </button>
                                </div>
                              </td>
                            </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <style>{`
                .center {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    }
                    `}</style>
              </div>
            </div>
            <ModalCobro cuotas={cuotas} prestamo={prestamo} id={id}/>
          </>
        )}
      </Navegacion>
    </Layout>
  );
};

export default Prestamo;
