import { useState, useEffect, useContext } from 'react';
import {FirebaseContext} from '../firebase';

import usePrestamo from './usePrestamo';
import useCliente from './useCliente';
import Prestamo from '../pages/add/Prestamo';

const useCuotas = () => {
    const { prestamos } = usePrestamo();
    // const {clientes} = useCliente("desc");
    // console.log(prestamos);
    
    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const [cuotasPendientes, setCuotasPendientes] = useState([]);
    const {firebase, usuario} = useContext(FirebaseContext);
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
                        cuotas.push(prestamos[i].detallesCuotas[j]);
                    }
                }
                filtro.push({
                    cliente: prestamos[i].cliente, 
                    id: prestamos[i].id, 
                    cuotas: prestamos[i].cuotas, 
                    periodoPagos: prestamos[i].periodoPagos,
                    detallesCuotas: cuotas
                });
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
                        cuotas.push(prestamos[i].detallesCuotas[j]);
                    }
                }
                filtro.push({
                    cliente: prestamos[i].cliente, 
                    id: prestamos[i].id, 
                    cuotas: prestamos[i].cuotas, 
                    periodoPagos: prestamos[i].periodoPagos,
                    detallesCuotas: cuotas
                });
                cuotas = [];
            }
            console.log('filtro','=>',filtro);
        }
        setCuotasPendientes(filtro)
        setCargando(false);   

    },[prestamos]);
    return {
        prueba,
        cargando,
        busqueda,
        setBusqueda,
        cuotasPendientes
    }
}

export default useCuotas;