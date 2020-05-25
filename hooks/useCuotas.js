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
        let filtro = [];
        let cuotas = [];
        for(const i in prestamos) {
            console.log(prestamos[i]);
            if(prestamos[i].estado === 'activo') {
                console.log(prestamos[i]);
                // filtro.cliente = prestamos[i].cliente;
                

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
                // filtro.id = prestamos[i].id;
                // filtro.tipoTasa = prestamos[i].tipoTasa;
            }

            console.log('filtro','=>',filtro);
            
        }
        // setCuotasPendientes(filtroPrestamo);
        // console.log(filtroPrestamo);
        console.log('prestamo','=>',prestamos);
    }
    // prueba()
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