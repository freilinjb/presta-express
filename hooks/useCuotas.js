import { useState, useEffect, useContext } from 'react';
import {FirebaseContext} from '../firebase';

const useCuotas = () => {

    const [cargando, setCargando] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const [prestamos, setPrestamos] = useState([]);
    const {firebase, usuario} = useContext(FirebaseContext);
    const prueba =() => {
        console.log('prueba de useCuotas');
        const fecha = new Date();
        console.log(fecha);
    }
    useEffect(() => {
        if(usuario && busqueda.trim() === '' && firebase.cargando === false) {
            const { uid } = usuario;
            
            try {
                const obtenerCuotas = async() => {
                    await firebase.db.collection("Prestamos").where("estado","==","activos").where("creador.id","==",uid).orderBy("creado", `${orden}`).onSnapshot(manejarSnapshot);//Ordena por creado
                }
            } catch (error) {
                console.log(error);
            } finally {
                setCargando(false);
            }
        }
    },[usuario, busqueda, firebase.cargando]);

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
        
    // },[resultado,valorCuotas]);
    return {
        prueba
    }
}

export default useCuotas;