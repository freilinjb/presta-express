import React, { useState, useContext, useEffect } from "react";
import useCalculadora from "../../hooks/useCalculadora";
import {FirebaseContext} from '../../firebase';

const PerfilClientePrestamo = ({ cliente, prestamo }) => {
  const {firebase, usuario} = useContext(FirebaseContext);
  const { setMoneda } = useCalculadora();

  const [cuotasPagadas, setCuotasPagadas] = useState(0);
  const [cuotasPendientes, setCuotasPendientes] = useState(0);
  const [totalPagado, setTotalPendiente] = useState(0);
  const [pagosAtrasados, setPagosAtrasados] = useState(0);
  const [togalPagado, setTotalPagado] = useState(0);
  const [capitalPagado, setCapitalPagado] = useState(0);
  const [capitalPendiente, setCapitalPendiente] = useState(0);
  const [interes, setInteres] = useState(0);
  const [cobros, setCobros] = useState(0);


  useEffect(() => {
    const {uid} = usuario;
    const obtenerCuotasPagadas =()=> {
      firebase.db.collection("Cobros").where("creador.id","==",uid).orderBy("creado", 'desc').onSnapshot(manejarSnapshot);
    }
  },[]);

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
            <div className="col-4">
              <h4> Cuotas Pagadas: $2,800.30 | </h4>
              <p>Suspendisse potenti. Done csit amet rutrum.</p>
            </div>

            <div className="col-4">
              <h4> Today's Earning: $2,800.30</h4>
              <p>Suspendisse potenti. Done csit amet rutrum.</p>
            </div>
            <div className="col-4">
              <h4> Today's Earning: $2,800.30</h4>
              <p>Suspendisse potenti. Done csit amet rutrum.</p>
            </div>
          </div>

          <h3 className="font-16">Rating</h3>
          <h1 className="">0</h1>
          <div className="rating-star">
            <i className="fa fa-fw fa-star"></i>
            <i className="fa fa-fw fa-star"></i>
            <i className="fa fa-fw fa-star"></i>
            <i className="fa fa-fw fa-star"></i>
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Observacion</h3>
          <div>
            <p>{cliente.observacion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilClientePrestamo;
