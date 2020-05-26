import { useState, useEffect, useContext } from 'react';
import {FirebaseContext} from '../firebase';

import usePrestamo from './usePrestamo';
import useCliente from './useCliente';
import Prestamo from '../pages/add/Prestamo';
import useCalculadora from './useCalculadora';

const useCuotas = () => {
    const { formatearFecha } = useCalculadora();
    const { prestamos } = usePrestamo();
    // let fecha = new Date();
    // fecha = formatearFecha(fecha,'ymd');
    // console.log(fecha);
    
    // const {clientes} = useCliente("desc");
    // console.log(prestamos);
    
    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState('');
    const [fechaActual, setFechaActual] = useState('');

    const [cuotasPendientes, setCuotasPendientes] = useState([]);
    const {firebase, usuario} = useContext(FirebaseContext);

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
    
    const prueba =() => {
        // setCargando(true);
        let filtro = [];
        let cuotas = [];
        for(const i in prestamos) {
            console.log(prestamos[i]);
            if(prestamos[i].estado === 'activo') {
                console.log(prestamos[i]);

                for(const j in prestamos[i].detallesCuotas) {
                    if(prestamos[i].detallesCuotas[j].estado === 'pendiente') {
                        if(compararFechas(prestamos[i].detallesCuotas[j].fecha)) {
                            cuotas.push(prestamos[i].detallesCuotas[j]);
                        }
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
            console.log('filtro','=>',filtro);
            setCargando(false);   
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
        setCuotasPendientes(filtro)
        setCargando(false);   

    },[prestamos]);
    return {
        prueba,
        cargando,
        busqueda,
        setBusqueda,
        cuotasPendientes,
        fechaActual,
        transformarFechaYMD
    }
}

export default useCuotas;