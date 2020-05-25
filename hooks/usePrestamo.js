import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";
import useAutenticacion from "./useAutenticacion";

const usePrestamo = (orden) => {
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [prestamos, setPrestamos] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  // const usuario = useAutenticacion();

  useEffect(() => {
    if (usuario && busqueda.trim() === "" && firebase.cargando === false) {
      const { uid } = usuario;
      console.log(" se cumplio");

      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      try {
        setCargando(true);
        const obtenerPrestamos = async () => {
          await firebase.db
            .collection("Prestamos")
            .where("creador.id", "==", uid)
            .orderBy("creado", "desc")
            .onSnapshot(PrestamosSnapshot); //Ordena por creado
        };
        obtenerPrestamos();
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    }
  }, [usuario, busqueda]);
  //se ejecuta cuando el componente esta listo
  function PrestamosSnapshot(snapshot) {
    const prestamos = snapshot.docs.map((doc) => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setPrestamos(prestamos);
    console.log(prestamos);
  }

  return {
    cargando,
    busqueda,
    prestamos,
  };
};

export default usePrestamo;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien
