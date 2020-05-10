import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 

const useProductos = orden => {

    const [clientes, setClientes ] = useState([]);
    const {firebase} = useContext(FirebaseContext);
  
    useEffect(() => {
      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      const obtenerClientes =() => {
        firebase.db.collection("Clientes").orderBy(orden, 'desc').onSnapshot(manejarSnapshot);//Ordena por creado
      }
      obtenerClientes();
    },[]);
    //se ejecuta cuando el componente esta listo
    function manejarSnapshot(snapshot) {
      const productos = snapshot.docs.map(doc => {
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