import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 
import useAutenticacion from './useAutenticacion';

const usePrestamo = orden => {

    const [prestamos, setPrestamos ] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    const usuario = useAutenticacion();

  
    useEffect(() => {
      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      if(usuario) {
        try {
          firebase.cargando = true;

          const { uid } = usuario;
          const obtenerPrestamos = () => {  
          firebase.db.collection("Prestamos").where("creador.id","==",uid).orderBy(orden, 'desc').onSnapshot(manejarSnapshot);//Ordena por creado
        }
        obtenerPrestamos();
        } catch (error) {
          console.log(error);
        } finally {
          firebase.cargando = false;
        }
      }
    },[usuario]);
    //se ejecuta cuando el componente esta listo
    function manejarSnapshot(snapshot) {
      const prestamos = snapshot.docs.map(doc => {
        //Extrae todo el registro completo
        return {
          id: doc.id,
          ...doc.data()
        }
      });
   
      //resultado de la consulta
      setPrestamos(prestamos);
      
    }

    //Periodo de pago
    const periodo = {
      DIARIO: "diario",
      SEMANAL: "semanal",
      QUINCENAL: "quincenal",
      MENSUAL: "mensual",
      BIMESTRAL: "bimestral",
      TRIMESTRAL: "trimestral",
      CUATRIMESTRAL : "cuatrimestral",
      SEMESTRAL: "semestral",
      ANUAL: "anual"
    }

    

    return {
        prestamos,
        periodo
    }
}

export default usePrestamo;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien