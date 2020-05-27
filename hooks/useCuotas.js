import { useState, useEffect, useContext } from 'react';
import {FirebaseContext} from '../firebase';

import usePrestamo from './usePrestamo';
import useCliente from './useCliente';
import Prestamo from '../pages/add/Prestamo';
import useCalculadora from './useCalculadora';

const useCuotas = () => {
    const { formatearFecha } = useCalculadora();
    const { prestamos } = usePrestamo();
    //Toma el prestamo completo que se preciono Click
      
    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState('');
    const [fechaActual, setFechaActual] = useState('');
    

    const [cuotasPendientes, setCuotasPendientes] = useState([]);

    const transformarFechaYMD=(fecha)=> {
        const ftemp = fecha.split('-');
        const f = {
            dia:'',
            mes:'',
            anio:''
        }
        f.anio = ftemp[2];
        f.mes = ftemp[1];
        f.dia = ftemp[0];
    
        return f.anio+'-'+f.mes+'-'+f.dia;
    }

    const compararFechas=(fecha2,comodin = true)=> {
        let fecha1 = new Date().now;
        fecha1 = transformarFechaYMD(formatearFecha(fecha1));
        setFechaActual(fecha1);

        fecha2 = transformarFechaYMD(fecha2);

        if(comodin) {
            return new Date(fecha2) < new Date(fecha1);
        } else {
            return new Date(fecha2) <= new Date(fecha1);
        }
    }

    useEffect(() => {
        let filtro = [];
        let cuotas = [];
        for(const i in prestamos) {
            console.log(prestamos[i]);
            if(prestamos[i].estado === 'activo') {
                console.log(prestamos[i]);

                for(const j in prestamos[i].detallesCuotas) {
                    if(prestamos[i].detallesCuotas[j].estado === 'pendiente') {
                        if(compararFechas(prestamos[i].detallesCuotas[j].fecha,false)) {
                            cuotas.push(prestamos[i].detallesCuotas[j]);
                        }
                        // cuotas.push(prestamos[i].detallesCuotas[j]);
                    }
                }
                if(cuotas.length > 0) {
                    filtro.push({
                        cliente: prestamos[i].cliente, 
                        id: prestamos[i].id, 
                        cuotas: prestamos[i].cuotas, 
                        periodoPagos: prestamos[i].periodoPagos,
                        detallesCuotas: cuotas
                    });
                }
                cuotas = [];
            }
            // console.log('filtro','=>',filtro);
        }
        setCuotasPendientes(prestamos)
        setCargando(false);

    },[prestamos]);

    return {
        cargando,
        busqueda,
        setBusqueda,
        cuotasPendientes,
        fechaActual,
        transformarFechaYMD,
        compararFechas
    }
}

export default useCuotas;