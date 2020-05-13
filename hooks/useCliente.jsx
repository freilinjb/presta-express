import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 
import useAutenticacion from './useAutenticacion';

const useCliente = orden => {

    const [clientes, setClientes ] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    const usuario = useAutenticacion();

  
    useEffect(() => {
      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      if(usuario) {
        try {
          firebase.cargando = true;

          const { uid } = usuario;
          const obtenerClientes = () => {  
          firebase.db.collection("Clientes").where("creador.id","==",uid).orderBy(orden, 'desc').onSnapshot(manejarSnapshot);//Ordena por creado
        }
        obtenerClientes();
        } catch (error) {
          console.log(error);
        } finally {
          firebase.cargando = false;
        }
      }
    },[usuario]);
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
      
    }

    return {
        clientes
    }
}

export default useCliente;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien