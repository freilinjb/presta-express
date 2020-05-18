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
    console.log(prestamo);
    
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

        const f = fecha.proximoPago.split('/');
        fecha.anio = f[0];
        fecha.mes = f[1];
        fecha.dia = f[2];

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
        } else  if(prestamo.detallesCuotas[i].estado === 'pago') {
            estadoCuotas.pagados++;
        }
        // console.log(prestamo.detallesCuotas[i]);
    }


    return ( 
        <>
        {/* <!-- Project--> */}
        <li>
            <time dateTime={fecha.proximoPago}>
              <span className="day">{fecha.mes}</span>
							<span className="month">{meses[Number(fecha.mes)]}</span>
							<span className="year">{fecha.anio}</span>
						</time>
            {/* <img alt="My 24th Birthday!" src="https://farm5.staticflickr.com/4150/5045502202_1d867c8a41_q.jpg" /> */}
						<div className="info">
							<h2 className="title">{prestamo.cliente.nombre + ' ' + prestamo.cliente.apellido}</h2>
              <p className="desc">Cuotas: {prestamo.detallesCuotas.length} / {estadoCuotas.pagados}</p>
              <p className="desc">Desembolsado hace: {formatDistanceToNow(new Date(prestamo.creado),{locale: es,})}</p>
							<ul className="detalles btn btn-sm btn-outline-light">
								<li>
                  <Link href="/prestamo/[id]" as={`/prestamo/${prestamo.id}`}>
                    <a><span className="fas fa-hand-holding-usd"></span> Cobrar</a>
                    </Link>
                </li>
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
        </>
     );
}
 
export default Prestamo;