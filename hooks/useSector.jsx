import { useState, useEffect, useContext } from "react";
import Swal from 'sweetalert2';

import { FirebaseContext } from "../firebase";
import useAutenticacion from "./useAutenticacion";

const useSector = (orden) => {
  const { firebase } = useContext(FirebaseContext);

  const usuario = useAutenticacion();

  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const [sectores, setSectores] = useState([]);

  useEffect(() => {
    if (usuario && busqueda.trim() === "" && firebase.cargando === false) {
      const { uid } = usuario;
      console.log(" se cumplio");

      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      try {
        const obtenerClientes = async () => {
          await firebase.db
            .collection("Sectores")
            .where("creador.id", "==", uid)
            .orderBy("creado", "desc")
            .onSnapshot(manejarSnapshot); //Ordena por creado
        };
        obtenerClientes();
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    }
  }, [usuario, busqueda, firebase.cargando]);
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
    // console.log(sectores);
  }

  const eliminarSector=()=> {
    Swal.fire({
      title: 'Eliminar',
      text: "No podra recuperar el registro despues de haberlo eliminado!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminar!',
          'Preciono Eliminar.',
          'success'
        )
      } else {

         Swal.fire(
          'Deleted!',
          'Preciono cancelar.',
          'success'
        )
      }
    })
  }

  return {
    sectores,
    cargando,
    busqueda,
    setBusqueda,
    eliminarSector
  };
};

export default useSector;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien
