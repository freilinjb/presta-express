import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 
import useAutenticacion from './useAutenticacion';

const useGarantia = orden => {

  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [garantias, setGarantias] = useState([]);
  const [garantiasTemporales, setGarantiasTemporales] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if(usuario && firebase.cargando === false) {
        const { uid } = usuario;
        console.log(' se cumplio');
        
        //Esta funcion te da acceso a todos los datos
        //y snapshot realiza operaciones con ellos
        try {

          const obtenerGarantias = async() => {
            await firebase.db.collection("Garantias").where("creador.id","==",uid).orderBy("creado", `${orden}`).onSnapshot(manejarSnapshot);//Ordena por creado
          }
          obtenerGarantias();
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
    const garantias = snapshot.docs.map(doc => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data()
      }
    });
 
    //resultado de la consulta
    setGarantias(garantias);   
     
  }

    return {
      busqueda,
      cargando,
      garantias,
      garantiasTemporales,
      setBusqueda,
      setGarantias,
      setGarantiasTemporales
    }
}

export default useGarantia;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien