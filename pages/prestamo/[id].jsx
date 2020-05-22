import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import swal from 'sweetalert';

import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout/Layout";
import Navegacion from "../../components/layout/Navegacion";
import Spinner from "../../components/ui/Spinner";
import PerfilClientePrestamo from "../../components/ui/PerfilClientePrestamo";
import ModalCobro from "../../components/ui/ModalCobro";
import ModalCobroParcial from "../../components/ui/ModalCobroParcial";

import useCalculadora from "../../hooks/useCalculadora";
import usePagoParcial from "../../hooks/usePagoParcial";

import Checkbox from '../../components/ui/Checkbox';


const Prestamo = () => {
  const { setCuotaParcial, cuotaParcial } = usePagoParcial();

  const [prestamo, setPrestamo] = useState({});
  const [cliente, setCliente] = useState({});
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [cuotas, setCuotas] = useState([]);
  
  //Cuando se realiza una operacion cambia para actualizar las cuotas
  const [actualizarCuotas, setActualizarCuotas] = useState(false);

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
    if (id && consultarDB || setActualizarCuotas) {
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
      setActualizarCuotas(false);
    }
    //Si algo cambia en producto se actualiza: es por haVotado
  }, [id, prestamo]);

  const onClickConfirmar = (valor) => {
    // setCuota()
    // console.log(valor);
    setCuotaParcial(valor);
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
    <Layout title="Prestmo">
      {/* {error ? <Error404/> : ( */}
      <Navegacion>
        {Object.keys(cliente).length === 0 && !error ? (
          <Spinner className="spinner"/>
        ) : (
          <>
            <ModalCobro cuotas={cuotas} prestamo={prestamo} id={id} setActualizarCuotas={setActualizarCuotas}/>
            <ModalCobroParcial prestamo={prestamo} id={id} cuotaParcial={cuotaParcial} setActualizarCuotas={setActualizarCuotas}/>
            <div className="row justify-content-center">
              <PerfilClientePrestamo cliente={cliente} prestamo={prestamo}/>
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
                          {prestamo.detallesCuotas.map((ct) => (
                            <>
                            <tr className={ct.estado === 'pago' ? "alert alert-success" : null}>
                              <td>
                                {" "}
                                <div className="center">
                                {ct.estado === 'pago' ? (null) : (<Checkbox initialState={false} id={ct.cuota} onChange={onCheckboxClicked}/>)}
                                  
                                </div>{" "}
                              </td>
                              <td>{setMoneda(ct.interes)}</td>
                              <td>{setMoneda(ct.abonoCapital)}</td>
                              <td>{setMoneda(ct.valorCuota)}</td>
                              <td>{setMoneda(ct.saldoCapital)}</td>
                              <td>{ct.fecha}</td>
                              <td>{ct.estado}</td>
                              <td>
                                <div className="btn-group ml-auto">
                                  <button
                                    className="btn btn-sm btn-outline-light"
                                    onClick={e => onClickConfirmar(ct.cuota)}
                                    disabled={ct.estado === 'pago' ? true : false}
                                    data-toggle="modal"
                                    data-target="#modalPagoParcial"
                                    data-whatever="@mdo"
                                    disabled={cuotas != 0 || ct.estado === 'pago'}
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
          </>
        )}
      </Navegacion>
    </Layout>
  );
};

export default Prestamo;
