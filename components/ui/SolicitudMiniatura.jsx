import React, { useContext, useState } from "react";
import Link from "next/link";
import { FirebaseContext } from "../../firebase";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

import Spinner from "./Spinner";

import useMensajesAlertas from "../../hooks/useMensajesAlertas";

const SolicitudMiniatura = ({ solicitud }) => {
  const { Toast } = useMensajesAlertas();
  const { firebase, usuario } = useContext(FirebaseContext);

  const [cargando, setCargando] = useState(false);

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
            Toast.fire({
              icon: "warning",
              title:
                "El usuario tiene prestamos activo.\nNo puede ser eliminado hasta cultimar los prestamos activos!!",
            });
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });

      //Elimina el usuario si no contiene prestamos activos
      if (!existe) {
        await firebase.db.collection("Solicitud").doc(id).delete();
        Toast.fire({
          icon: "success",
          title: "Se ha eliminado correctamente!!",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
      firebase.cargando = false;
    }
  };
  return (
    <>
      {cargando && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-avatar float-xl-left pr-4 float-none">
                <img
                  src="static/assets/images/avatar-1.jpg"
                  alt="User Avatar"
                  className="rounded-circle user-avatar-xl"
                />
              </div>
              <div className="pl-xl-3">
                <div className="m-b-0">
                  <div className="user-avatar-name d-inline-block">
                    <h2 className="font-24 m-b-10">Henry Barbara</h2>
                  </div>
                  <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                    <i className="fa fa-fw fa-star"></i>
                    <i className="fa fa-fw fa-star"></i>
                    <i className="fa fa-fw fa-star"></i>
                    <i className="fa fa-fw fa-star"></i>
                    <i className="fa fa-fw fa-star"></i>
                    <p className="d-inline-block text-dark">14 Reviews </p>
                  </div>
                </div>
                <div className="user-avatar-address">
                  <p className="mb-2">
                    <i className="fa fa-map-marker-alt mr-2  text-primary"></i>
                    Salt Lake City, UT{" "}
                    <span className="m-l-10">
                      Male<span className="m-l-20">29 Year Old</span>
                    </span>
                  </p>
                  <div className="mt-3">
                    <a href="#" className="mr-1 badge badge-light">
                      Fitness
                    </a>
                    <a href="#" className="mr-1 badge badge-light">
                      Life Style
                    </a>
                    <a href="#" className="mr-1 badge badge-light">
                      Gym
                    </a>
                    <a href="#" className="badge badge-light">
                      Crossfit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="float-xl-right float-none mt-xl-0 mt-4">
                <a href="#" className="btn-wishlist m-r-10">
                  <i className="far fa-star"></i>
                </a>
                <a href="#" className="btn btn-secondary">
                  Send Messages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudMiniatura;
