import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

import useCalculadora from '../../hooks/useCalculadora';



const Prestamo = ({prestamo}) => {

  var meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ]

    const { setMoneda } = useCalculadora();
    const estadoCuotas = {
        pendiente: 0,
        atrasados: 0,
        pagados: 0
    }
    let fecha = {
      proximoPago: '',
      dia: '',
      mes:'',
      anio: ''
    };

    for(const i in prestamo.detallesCuotas) {
      if(prestamo.detallesCuotas[i].estado === 'pendiente') {
        fecha.proximoPago = prestamo.detallesCuotas[i].fecha;

        const f = fecha.proximoPago.split('-');
        fecha.dia = f[0];
        fecha.mes = f[1];
        fecha.anio = f[2];

        console.log(fecha);
        
        break;
      }
    }

    console.log('',meses[Number(fecha.mes)],'mes', fecha.mes);
    
    for(const i in prestamo.detallesCuotas) {
        if(prestamo.detallesCuotas[i].estado === 'pendiente') {
            estadoCuotas.pendiente++;
        } else if(prestamo.detallesCuotas[i].estado === 'atrasados') {
            estadoCuotas.atrasados++;
        } else  if(prestamo.detallesCuotas[i].estado === 'pagados') {
            estadoCuotas.pagados++;
        }
        // console.log(prestamo.detallesCuotas[i]);
    }


    return ( 
        <>
        {/* <!-- Project--> */}
        <li>
            <time datetime={fecha.proximoPago}>
              <span className="day">{fecha.dia}</span>
							<span className="month">{meses[Number(fecha.mes)]}</span>
							<span className="year">{fecha.anio}</span>
						</time>
            <img alt="My 24th Birthday!" src="https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg" />
						<div className="info">
							<h2 className="title">{prestamo.cliente.nombre + ' ' + prestamo.cliente.apellido}</h2>
              <p className="desc">Cuotas: {estadoCuotas.pendiente} / {estadoCuotas.pagados}</p>
							<ul className="detalles">
								<li><a href="#website"><span className="fa fa-globe"></span> Pagar</a></li>
								<li><span className="fa fa-money"></span> {setMoneda(prestamo.monto)}</li>
							</ul>
						</div>
						<div className="social">
							<ul>
								<li className="telefono"><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
								<li className="correo"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
								<li className="pagar"><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                </ul>
						</div>
					</li>
          <style>{`
              .detalles {
                width: 50%;
              }

              .telefono {
                width: 33%;
              }

              .correo {
                width: 34%;
              }

              .pagar {
                width: 33%;
              }
            `}</style>
        </>
     );
}
 
export default Prestamo;