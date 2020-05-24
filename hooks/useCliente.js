import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 
import useAutenticacion from './useAutenticacion';

const useCliente = orden => {

  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [clientes, setClientes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if(usuario && busqueda.trim() === '' && firebase.cargando === false) {
        const { uid } = usuario;
        console.log(' se cumplio');
        
        //Esta funcion te da acceso a todos los datos
        //y snapshot realiza operaciones con ellos
        try {

          const obtenerClientes = async() => {
            await firebase.db.collection("Clientes").where("creador.id","==",uid).orderBy("creado", `${orden}`).onSnapshot(manejarSnapshot);//Ordena por creado
          }
          obtenerClientes();
        } catch (error) {
          console.log(error);
        }
        finally {
          setCargando(false);
        }
    }
  },[usuario, busqueda, firebase.cargando]);
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
      clientes
    }
}

export default useCliente;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien