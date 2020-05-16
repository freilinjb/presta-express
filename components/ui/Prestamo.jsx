import React from 'react';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

import useCalculadora from '../../hooks/useCalculadora';

const Prestamo = ({prestamo}) => {
    const { setMoneda } = useCalculadora();
    const estadoCuotas = {
        pendiente: 0,
        atrasados: 0,
        pagados: 0
    }

    const fecha = {fechaInicial:'',fechaFinal: ''}
    for(const i in prestamo.detallesCuotas) {
        if(prestamo.detallesCuotas[i].estado === 'pendiente') {
            estadoCuotas.pendiente++;
        } else if(prestamo.detallesCuotas[i].estado === 'atrasados') {
            estadoCuotas.atrasados++;
        } else  if(prestamo.detallesCuotas[i].estado === 'pagados') {
            estadoCuotas.pagados++;
        }
        console.log(prestamo.detallesCuotas[i]);
    }


    return ( 
        <>
        {/* <!-- Project--> */}
          <div key={prestamo.id} className="project">
            <div className="row bg-white has-shadow">
              <div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
                <div className="project-title d-flex align-items-center">
                  <div className="image has-shadow">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <h3 className="h4">{prestamo.cliente.nombre +' '+prestamo.cliente.apellido}</h3>
                    <p>Prestado: {setMoneda(prestamo.monto)}</p>
                    <p>Periodo de pagos: {prestamo.periodoPagos}</p>
                    <p>Tasa de Interes: {prestamo.tasaInteres}%</p>
                  </div>
                </div>
                <div className="project-date">
                    <span className="">Proximo pago: {prestamo.detallesCuotas[0].fecha}</span>
                </div>
              </div>
              <div className="right-col col-lg-6 d-flex align-items-center">
                <div className="time">
                  <i className="fa fa-clock-o"></i>
                  {formatDistanceToNow(new Date(prestamo.creado), {
                    locale: es,
                  })}
                </div>
                <div className="comments">
                  <i className="fa fa-comment-o"></i>
                  {estadoCuotas.pendiente} / {estadoCuotas.pagados}
                </div>
                <div className="project-progress">
                  <div className="progress">
                    <div
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      className="progress-bar float-right"
                    ></div>
                    <div className="">{prestamo.estado}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project--> */}
        </>
     );
}
 
export default Prestamo;