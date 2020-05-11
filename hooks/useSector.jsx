import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 

const useSector = orden => {

    const [sectores, setSectores ] = useState([]);
    const {firebase} = useContext(FirebaseContext);
  
    useEffect(() => {
      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      const obtenerSectores =() => {
        firebase.db.collection("Sectores").orderBy(orden, 'desc').onSnapshot(manejarSnapshot);//Ordena por creado
      }
      obtenerSectores();
    },[]);
    //se ejecuta cuando el componente esta listo
    function manejarSnapshot(snapshot) {
      const sectores = snapshot.docs.map(doc => {
        //Extrae todo el registro completo
        return {
          id: doc.id,
          ...doc.data()
        }
      });
   
      //resultado de la consulta
      setSectores(sectores);
      
    }

    return {
        sectores
    }
}

export default useSector;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien