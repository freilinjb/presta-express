import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';
import useAutenticacion from './useAutenticacion';

const useSolicitud = orden => {

    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const [cliente, setCliente] = useState({});
    const [consultarCliente, setConsultarCliente] = useState('');
    const { firebase, usuario } = useContext(FirebaseContext);

    const obtenerCliente = async (identificacion) => {

        let resultado;
        try {
            resultado = await firebase.db.collection("Clientes").where("creador.id", "==", usuario.uid).onSnapshot(manejarSnapshot);
            setCliente(resultado);

        } catch (error) {
            console.log(error);
        }
        finally {
            setCargando(false);
        }

        return resultado;
    }

    useEffect(() => {

        console.log(obtenerCliente(consultarCliente));
        

        console.log('cliente: ','=>',cliente);
        console.log('consultarCliente: ','=>',consultarCliente);
        
    }, [consultarCliente, usuario, firebase.cargando]);

    //se ejecuta cuando el componente esta listo
    function manejarSnapshot(snapshot) {
        const cliente = snapshot.docs.map(doc => {
            //Extrae todo el registro completo
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        //resultado de la consulta
        setCliente(cliente);
        console.log(cliente);

    }

    return {
        busqueda,
        setBusqueda,
        cargando,
        cliente,
        setCliente,
        setConsultarCliente,
        obtenerCliente
    }
}

export default useSolicitud;