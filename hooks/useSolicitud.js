import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';
import useAutenticacion from './useAutenticacion';

const useSolicitud = orden => {

    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const [cliente, setCliente] = useState({});
    const [consultar,setConsultar] = useState('');
    const { firebase, usuario } = useContext(FirebaseContext);

    const obtenerCliente = async (identificacion) => {
        const { uid } = usuario;
        
        try {
            const resultado = await firebase.db.collection("Clientes").where("creador.id", "==", uid).where("cedula", "==", identificacion).onSnapshot(manejarSnapshot);
            setCliente(resultado);

        } catch (error) {
            console.log(error);
        }
        finally {
            setCargando(false);
        }
    }

    useEffect(() => {

    },[consultar]);

//se ejecuta cuando el componente esta listo
function manejarSnapshot(snapshot) {
    const clientes = snapshot.docs.map(doc => {
        //Extrae todo el registro completo
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    //resultado de la consulta
    setClientes(clientes);
    // console.log(clientes);

}

return {
    busqueda,
    setBusqueda,
    cargando,
    clientes,
    setClientes
}

export default useSolicitud;