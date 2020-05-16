import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 
import useAutenticacion from './useAutenticacion';

const usePrestamo = orden => {

    const [ptm, setPrestamos ] = useState([]);
    const [clt, setClientes ] = useState([]);
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
          firebase.db.collection("Prestamos").where("creador.id","==",uid).orderBy(orden, 'desc').onSnapshot(prestamosSnapshot);//Ordena por creado
        }
        obtenerPrestamos();
        } catch (error) {
          console.log(error);
        } finally {
          firebase.cargando = false;
        }
      }
    },[usuario]);

    useEffect(() => {

      try {
        if(ptm.length>0) {
          setClientes([]);

          const obtenerClientes = () => {
            ptm.map(prestamo => {
              firebase.db.collection("Clientes").where("id","==",prestamo.id).where("creador.id","==",uid).orderBy(orden, 'desc').onSnapshot(ClientesSnapshot);
            });
          }
          obtenerClientes();
        }
      } catch (error) {
        console.log(error);
      } finally {
        firebase.cargando = false;
        console.log(clt);
        
      }
    },[ptm]);
    //se ejecuta cuando el componente esta listo
    function prestamosSnapshot(snapshot) {
      const datos = snapshot.docs.map(doc => {
        //Extrae todo el registro completo
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      setPrestamos(datos);
    }

    function ClientesSnapshot(snapshot) {
      const datos = snapshot.docs.map(doc => {
        //Extrae todo el registro completo
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      setClientes({...clt,datos});
      console.log(clt);
      
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
        ptm,
        clt,
        periodo
    }
}

export default usePrestamo;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien