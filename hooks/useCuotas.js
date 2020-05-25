import { useState, useEffect, useContext } from 'react';
import {FirebaseContext} from '../firebase';

import usePrestamo from './usePrestamo';
import useCliente from './useCliente';
import Prestamo from '../pages/add/Prestamo';

const useCuotas = () => {
    const { prestamos } = usePrestamo();
    const {clientes} = useCliente("desc");

    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const [cuotasPendientes, setCuotasPendientes] = useState([]);
    const {firebase, usuario} = useContext(FirebaseContext);

    const prueba =() => {
        console.log('prueba de useCuotas');
        const fecha = new Date();
        console.log(fecha);
    }

    // const filtro = clientes.filter(cliente => {
    //     return(
    //       (cliente.nombre.toLowerCase() + ' '+cliente.apellido.toLowerCase()).includes(buscar) || cliente.cedula.toLowerCase().includes(buscar)
    //     )
    // });

    const filtroPrestamo = prestamos.filter(prestamo => {
        return(
            prestamo.estado === 'activo' && prestamo.detallesCuotas === 'pendiente'
        )
    })

    // const cuota

    // if(clientes.length > 0) {
    //     // const filtroCliente = clientes.filter(cliente => {
    //     //     return(
    //     //         cliente.id = filtroPrestamo.cliente.id
    //     //     )
    //     // });
    // console.log('filtroCliente','=>',clientes);

    // }


    console.log('filtroPrestamo','=>',filtroPrestamo);
    // console.log('filtroPrestamo','=>',filtroCliente);
    


        
    // },[resultado,valorCuotas]);
    return {
        prueba
    }
}

export default useCuotas;