import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";
import useAutenticacion from "./useAutenticacion";

const useSector = (orden) => {
  const { firebase } = useContext(FirebaseContext);

  const usuario = useAutenticacion();

  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [sectores, setSectores] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    //Esta funcion te da acceso a todos los datos
    //y snapshot realiza operaciones con ellos
    // console.log(usuario);
    // console.log('usuario');

    if (usuario) {
      const { uid } = usuario;
      const obtenerSectores = () => {
        firebase.db
          .collection("Sectores")
          .where("creador.id", "==", uid)
          .orderBy(orden, "desc")
          .onSnapshot(manejarSnapshot); //Ordena por creado
      };
      obtenerSectores();
    }
  }, [usuario]);
  //se ejecuta cuando el componente esta listo
  function manejarSnapshot(snapshot) {
    const sectores = snapshot.docs.map((doc) => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    //resultado de la consulta
    setSectores(sectores);
  }

  return {
    sectores,
  };
};

export default useSector;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien
