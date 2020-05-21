import React, { useState, useContext, useEffect } from "react";
import useCalculadora from "../../hooks/useCalculadora";
import {FirebaseContext} from '../../firebase';

const PerfilClientePrestamo = ({ cliente, prestamo }) => {
  const {firebase, usuario} = useContext(FirebaseContext);
  const { setMoneda } = useCalculadora();

  const [pagosPendientes, setPagosPendientes] = useState(0);
  const [cuotasPagadas, setCuotasPagadas] = useState(0);
  const [cuotasPendientes, setCuotasPendientes] = useState(0);
  const [totalPagado, setTotalPagado] = useState(0);
  const [pagosAtrasados, setPagosAtrasados] = useState(0);
  const [capitalPagado, setCapitalPagado] = useState(0);
  const [capitalPendiente, setCapitalPendiente] = useState(0);
  const [interes, setInteres] = useState(0);
  const [cobros, setCobros] = useState(0);

  

  useEffect(() => {
    const {uid} = usuario;
    const obtenerCuotasPagadas =()=> {
      firebase.db.collection("Cobros").where("creador.id","==",uid).orderBy("creado", 'desc').onSnapshot(manejarSnapshot);
    }
    let cuotasP = 0;
    let pagoP = 0;
    let interesP = 0;
    let capitalP = 0;

    let pendientePn = 0;
    let pagoR = 0;
    for(const i in prestamo.detallesCuotas) {
      if(prestamo.detallesCuotas[i].estado === 'pendiente') {
        cuotasP++;
        pagoP += parseFloat(prestamo.detallesCuotas[i].valorCuota);
        interesP = parseFloat(prestamo.detallesCuotas[i].interes);
        capitalP = parseFloat(prestamo.detallesCuotas[i].saldoCapital);
        // setCuotasPendientes(cuotasPendientes + prestamo.detallesCuotas[i].estado)
      } else if(prestamo.detallesCuotas[i].estado === 'pago') {
        pendientePn++;
        pagoR += parseFloat(prestamo.detallesCuotas[i].valorCuota);
      }
    }
    setCuotasPagadas(pendientePn);
    setTotalPagado(pagoR);
    ///////////////////
    setCapitalPendiente(capitalP);
    setPagosPendientes(pagoP);
    setCuotasPendientes(cuotasP);
    
  },[prestamo]);

  function manejarSnapshot(snapshot) {
    const cobros = snapshot.docs.map(doc => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data()
      }
    });
 
    //resultado de la consulta
    setCobros(cobros);
  }
  

  console.log("desdes perfil usuaril", "=>", prestamo);

  return (
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card">
        <div className="card-body">
          <div className="user-avatar text-center d-block">
            {cliente.urlFoto ? (
              <img
                src={cliente.urlFoto}
                alt="User Avatar"
                className="rounded-circle user-avatar-xxl"
              />
            ) : (
              <img
                src="/static/assets/images/avatar-1.jpg"
                alt="User Avatar"
                className="rounded-circle user-avatar-xxl"
              />
            )}
          </div>
          <div className="text-center">
            <h2 className="font-24 mb-0">
              {cliente.nombre + " " + cliente.apellido}
            </h2>
            {cliente.apodo && <p>Alias ({cliente.apodo})</p>}
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Informacion del Cliente </h3>
          <div className="">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="fas fa-fw fa-envelope mr-2"></i>
                {cliente.correo}
              </li>
              <li className="mb-0">
                <i className="fas fa-fw fa-phone mr-2"></i>
                {cliente.telefono}
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body border-top">
          <div className="row">
            <div className="col-12">
              <p></p>
            </div>
            <div className="col-12 text-center">
                <h1> [ {prestamo.detallesCuotas.length} / {cuotasPagadas} ] </h1>
            </div>
            <div className="col-12">
              <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
              Pagos realizados:

              <span className="badge badge-success badge-pill">{setMoneda(totalPagado.toFixed(2))}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Monto total pendiente:
                <span className="badge badge-secondary badge-pill">{setMoneda(pagosPendientes.toFixed(2))}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Capital pagados:
                <span className="badge badge-primary badge-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Capital pagados:
                <span className="badge badge-primary badge-pill">1</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Observacion</h3>
          <div>
            <p>{prestamo.observacion}</p>
          </div>
        </div>
        <h1 className={`alert text-center text-uppercase ${prestamo.estado == 'finalizado' ? 'alert-primary' : 'alert-success'}`}>{prestamo.estado}</h1>
      </div>
    </div>
  );
};

export default PerfilClientePrestamo;
