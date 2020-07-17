import { useState, useEffect, useContext } from "react";
import Swal from 'sweetalert2';

import { FirebaseContext } from "../firebase";
import useAutenticacion from "./useAutenticacion";

const useParametrosUsuario = () => {
  const { firebase } = useContext(FirebaseContext);

  const usuario = useAutenticacion();

  const [cargando, setCargando] = useState(false);
  const [parametrosNegocios, setParametrosNegocios] = useState({});
  const [editarsector, setEditarSector] = useState(
    {
      id: '',
      sector: {
        nombre: '',
        descripcion: ''
      }
    }
  );

  useEffect(() => {
    if (usuario && firebase.cargando === false) {
      const { uid } = usuario;

      //Esta funcion te da acceso a todos los datos
      //y snapshot realiza operaciones con ellos
      try {
        const obtenerClientes = async () => {
          await firebase.db
            .collection("Configuracion")
            .where("usuario.id", "==", uid)
            .onSnapshot(manejarSnapshot); //Ordena por creado
        };
        obtenerClientes();
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    }
  }, [usuario, firebase.cargando]);
  //se ejecuta cuando el componente esta listo
  function manejarSnapshot(snapshot) {
    const parametrosNegocios = snapshot.docs.map((doc) => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    //resultado de la consulta
    setParametrosNegocios(parametrosNegocios);
  }

  const eliminarSector = () => {
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

  async function editarSectorFn(sector, id) {


    //Inicia la carga
    //Si el usuario no esta autenticado llevat al login
    if (!usuario) {
      console.log('no esta loqueado');
      firebase.cargando = false;

      return router.push("/SignIn");
    }

    try {

      //Insertar en la BD
      firebase.cargando = true;
      firebase.db.collection("Configuracion").doc(id).update({
        nombre: sector.nombre,
        apellido: sector.descripcion
      });
      alert.success('Se ha guardo correctamente');
    } catch (error) {
      console.log(error);
      alert.error('Ha ocurrido un error');

    } finally {
      firebase.cargando = false;
      // router.push('/Clientes');
    }
  }

  return {
    parametrosNegocios,
    setParametrosNegocios,
    cargando,
    eliminarSector,
    editarSectorFn,
    editarsector,
    setEditarSector,
    firebase
  };
};

export default useParametrosUsuario;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien
