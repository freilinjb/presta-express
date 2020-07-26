import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 
import useAutenticacion from './useAutenticacion';

const useSolicitud = orden => {

  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [solicitudes, setSolicitudes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if(usuario && busqueda.trim() === '' && firebase.cargando === false) {
        const { uid } = usuario;
        console.log(' se cumplio');
        
        //Esta funcion te da acceso a todos los datos
        //y snapshot realiza operaciones con ellos
        try {

          const obtenerSolicitudes = async() => {
            await firebase.db.collection("Solicitud").where("creador.id","==",uid).orderBy("creado", `${orden}`).onSnapshot(manejarSnapshot);//Ordena por creado
          }
          obtenerSolicitudes();
        } catch (error) {
          console.log(error);
        }
        finally {
          setCargando(false);
        }
    }
  },[usuario, firebase.cargando]);
  //se ejecuta cuando el componente esta listo
  function manejarSnapshot(snapshot) {
    const solicitudes = snapshot.docs.map(doc => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data()
      }
    });
 
    //resultado de la consulta
    setSolicitudes(solicitudes);   
    console.log(solicitudes);
     
  }

    return {
      busqueda,
      cargando,
      solicitudes,
      setBusqueda,
      setSolicitudes
    }
}

export default useSolicitud;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien