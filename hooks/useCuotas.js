import { useState, useEffect, useContext } from 'react';
import {FirebaseContext} from '../firebase';

import usePrestamo from './usePrestamo';
import useCliente from './useCliente';
import Prestamo from '../pages/add/Prestamo';

const useCuotas = () => {
    const { prestamos } = usePrestamo();
    // const {clientes} = useCliente("desc");
    console.log(prestamos);
    
    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const [cuotasPendientes, setCuotasPendientes] = useState([]);
    const {firebase, usuario} = useContext(FirebaseContext);

    const prueba =() => {
        // console.log('prueba de useCuotas');
        const filtroPrestamo = prestamos.filter(prestamo => {
            return(
                prestamo.estado === 'activo'
            )
        });
    
        setCuotasPendientes(filtroPrestamo);
        console.log(filtroPrestamo);
        // console.log(fecha);
    }

    // prueba();

    // const filtro = clientes.filter(cliente => {
    //     return(
    //       (cliente.nombre.toLowerCase() + ' '+cliente.apellido.toLowerCase()).includes(buscar) || cliente.cedula.toLowerCase().includes(buscar)
    //     )
    // });

    // useEffect(() => {
       
        
    // },[]);

    
    // },[resultado,valorCuotas]);
    return {
        prueba,
        cargando,
        busqueda,
        setBusqueda,
        cuotasPendientes
    }
}

export default useCuotas;