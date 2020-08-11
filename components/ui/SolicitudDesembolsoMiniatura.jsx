import React, { useContext, useState } from "react";
import Link from "next/link";
import { FirebaseContext } from "../../firebase";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";


//Alert
import Swal from "sweetalert2";

import Spinner from "./Spinner";

import useMensajesAlertas from "../../hooks/useMensajesAlertas";
import useCalculadora from "../../hooks/useCalculadora";

const SolicitudDesembolsoMiniatura = ({ setSolicitudDetalles, solicitud, index }) => {
  
  const { setMoneda } = useCalculadora();
  const { firebase, usuario } = useContext(FirebaseContext);

  const [cargando, setCargando] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  

  const {
    id,
    nombre,
    apellido,
    correo,
    telefono,
    creado,
    observacion,
    urlFoto,
    creador,
  } = solicitud;

  const confirmarEliminacion = async ()=> {
      Swal.fire({
      title: "Eliminar",
      text: "¿Esta seguro que desea eliminar esta Solicitud?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        eliminarSolicitud();

      }
      //Si no se cumple
      //  else {

      //   // Swal.fire("Deleted!", "Preciono cancelar.", "success");
      // }
    });

  }

  const eliminarSolicitud = async () => {
    if (!usuario) {
      return router.push("/login");
    }

    if (creador.id !== usuario.uid) {
      return router.push("/");
    }

    try {

      setCargando(true);
      let existe = false;
      firebase.cargando = true;
      //Pregunta si el usuario contiene usuario
      await firebase.db
        .collection("Solicitud")
        .where("creador.id", "==", usuario.uid)
        .where("estado", "==", "activo")
        .where("cliente.id", "==", id)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            if (doc.exists) {
              console.log("existe");
              existe = true;
            } else {
              console.log("no existe");
            }
          });
          if (existe) {

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El usuario tiene prestamos activo.\nNo puede ser eliminado hasta cultimar los prestamos activos!!',
              footer: '<a href=#>Contactar con el administrador?</a>'
            })
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });

      //Elimina el usuario si no contiene prestamos activos
      if (!existe) {
        await firebase.db.collection("Solicitud").doc(id).delete();
        Swal.fire({
          icon: 'success',
          title: 'Oops...',
          text: 'El usuario tiene prestamos activo.\nNo puede ser eliminado hasta cultimar los prestamos activos!!',
          footer: '<a href=#>Contactar con el administrador?</a>'
        })
        Toast.fire({
          icon: 'success',
          title: 'Se ha eliminado correctamente!'
        })
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
      firebase.cargando = false;
    }
  };

  const handlClick = () => {
    setSolicitudDetalles(solicitud);

    console.log("click", solicitud);
  };

  function estadoAlerta(estado) {
    let mensaje = "";

    switch (estado) {
      case "Autorizado":
        mensaje = "success";
        break;

      case "En revisión":
        mensaje = "brand";
        break;

      case "Rechazada":
        mensaje = "danger";
        break;

      default:
        mensaje = "brand";
        break;
    }

    return mensaje;
  }

  return (
    <>
      {cargando && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="m-r-10">
            <img
              src={
                solicitud.cliente.urlFoto
                  ? solicitud.cliente.urlFoto
                  : `static/assets/images/product-pic.jpg`
              }
              alt="user"
              className="rounded"
              width="45"
            />
          </div>
        </td>
        <td>{solicitud.cliente.nombre + " " + solicitud.cliente.apellido}</td>
        <td>{solicitud.periodoPagos}</td>
        <td>{solicitud.tasaInteres}</td>
        <td>{setMoneda(solicitud.monto)}</td>
        <td>{solicitud.entrega}</td>
        <td>{solicitud.tipoTasa}</td>
        <td>{solicitud.tasaInteres}%</td>
        <td>
          <span className={`badge-dot badge-${estadoAlerta(solicitud.estado)} mr-1`}></span>
          {solicitud.estado}{" "}
        </td>
        <td>
          <div className="btn-group ml-auto">
            <a
              className="btn btn-sm btn-outline-light"
              data-toggle="modal"
              data-toast-posy="top"
              data-target="#desembolsoPrestamoModal"
              // href="/cliente/CS0nmfGKG5p0s1yA6sVr
              onClick={handlClick}
            >
              Visualizar
            </a>
            <button className="btn btn-sm btn-outline-light"
              onClick={e=>confirmarEliminacion()}
            >
              <i className="jsx-1189774325 far fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SolicitudDesembolsoMiniatura;