import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../layout/Layout";
import Navegacion from "../layout/Navegacion";
import FileUploader from "react-firebase-file-uploader";
import { useAlert } from "react-alert";

import { FirebaseContext } from "../../firebase";

//Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarParametros from "../../validacion/validarParametros";
//Copia todo del crear-cuenta
import useSector from "../../hooks/useSector";

const EdicarConfiguracionUsuario = ({ parametrosNegocios }) => {
  console.log("parametrosNegocios: ", parametrosNegocios);

  const STATE_INICIAL = {
      
  };

  const { sectores } = useSector("creado");
  const alert = useAlert();

  //state de las imagenes
  const [nombreimagen, guardarNombre] = useState("");
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgrerso] = useState(0);
  const [urlLogo, guardarUrlImagen] = useState("");

  const [error, setError] = useState("");

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarParametros, crearCliente);

  const {
    nombre,
    nombreEmpresa,
    eslogan,
    logo,
    celular,
    telefono,
    correo,
    direccion,
    ciudad,
    sector,
  } = valores;

  //hook de routing para redireccionar
  const router = useRouter();

  //Context con las operaciones crud de firebase
  const { firebase, usuario } = useContext(FirebaseContext);
  //   console.log(usuario);

  async function crearCliente() {
    console.log("precionado elimina  r", parametrosNegocios[0].id);
    alert.info("Ha precionado crear");

    console.log("id");
    console.log(parametrosNegocios[0].id);
    //   return;

    //Inicia la carga
    //Si el usuario no esta autenticado llevat al login
    if (!usuario) {
      console.log("no esta loqueado");
      firebase.cargando = false;

      return router.push("/SignIn");
    }

    try {
      //Insertar en la BD
      firebase.cargando = true;
      firebase.db.collection("Configuracion").doc(parametrosNegocios[0].id).update({
        nombreEmpresa,
        eslogan,
        urlLogo,
        celular,
        telefono,
        correo,
        telefono,
        direccion,
        ciudad,
        sector,
      });
      alert.success("Se ha guardo correctamente");
    } catch (error) {
      console.log(error);
      alert.error("Ha ocurrido un error");
    } finally {
      firebase.cargando = false;
      router.push("/");
    }
  }

  const handleUploadStart = () => {
    guardarProgrerso(0);
    guardarSubiendo(true);
  };

  //El progreso se va guardando automaticamente
  const handleProgress = (progreso) => guardarProgrerso({ progreso });

  //Cuando haya un error
  const handleUploadError = (error) => {
    guardarSubiendo(error);
    console.error(error);
  };

  const handleUploadSuccess = (nombre) => {
    guardarSubiendo(100);
    guardarSubiendo(false);
    guardarNombre(nombre);
    firebase.storage
      .ref("Configuracion")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        guardarUrlImagen(url);
      }); //Dice en que parte esta la imagen
  };

  return (
    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
      <div className="card">
        <h5 className="card-header">
          Modificar Registro <span className="fas fa-user-plus"></span>
        </h5>
        <div className="card-body">
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <fieldset>
              <legend>Datos del Negocio</legend>
              <div className="form-row">
                <div className="col-lg-6 col-md-8 col-sm-12 mb-3">
                  <label htmlFor="nombreEmpresa">Nombre del negocio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreEmpresa"
                    name="nombreEmpresa"
                    value={nombreEmpresa}
                    placeholder="Ingrese el nombre"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errores.nombreEmpresa && (
                    <p className="alert alert-danger">
                      {errores.nombreEmpresa}
                    </p>
                  )}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="eslogan">eslogan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="eslogan"
                    name="eslogan"
                    placeholder="Ingrese el eslogan del negocio"
                    value={eslogan}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <div className="valid-feedback">Looks good!</div>
                  {errores.eslogan && (
                    <p className="alert alert-danger">{errores.eslogan}</p>
                  )}
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="eslogan">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese el eslogan del negocio"
                    value={nombre}
                    onChange={handleChange}
                    autoComplete="off"
                    disabled
                  />
                  <div className="valid-feedback">Looks good!</div>
                  {errores.nombre && (
                    <p className="alert alert-danger">{errores.nombre}</p>
                  )}
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="logo">Logo</label>

                  <div className="input-group">
                    <div className="custom-file">
                      <FileUploader
                        className="custom-file-input"
                        accept="image/*"
                        name="logo"
                        id="logo"
                        randomizeFilename
                        storageRef={firebase.storage.ref("Clientes")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                      />
                      <label className="custom-file-label" htmlFor="logo">
                        Elegir archivo
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <legend>Ubicacion</legend>
              <div className="form-row">
                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="telefono">Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    placeholder="Ingrese el numero telefonico"
                    name="telefono"
                    value={telefono}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="celular">celular</label>
                  <input
                    type="text"
                    className="form-control"
                    id="celular"
                    placeholder="Ingrese el numero de celular"
                    name="celular"
                    value={celular}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="correo">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="Ingrese el correo electronico"
                    name="correo"
                    value={correo}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {/* {errores.correo && (
                    <p className="alert alert-danger">{errores.correo}</p>
                  )} */}
                </div>

                <div className="w-100"></div>
                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="sector">Sector</label>
                  <select
                    className="form-control"
                    name="sector"
                    id="sector"
                    value={sector}
                    onChange={handleChange}
                  >
                    <option value="" selected>
                      --Seleccione--
                    </option>
                    {sectores.map((str) => (
                      <option value={str.id} key={str.id}>
                        {str.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="ciudad">ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ciudad"
                    placeholder="Ejemplo (809-888-9999)"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="col-12 mb-3">
                  <label htmlFor="direccion">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    name="direccion"
                    value={direccion}
                    onChange={handleChange}
                    placeholder="Identificacion"
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              {/* dfs65df4a6sd54f6asd54f6asdf */}

              <div className="row">
                <div className="col-sm-6">
                  <button
                    type="submit"
                    className="btn btn-space btn-primary"
                    disabled={firebase.cargando}
                    type="submit"
                  >
                    {firebase.cargando ? (
                      <>
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Cargando...
                      </>
                    ) : (
                      <>Guardar</>
                    )}
                  </button>
                  <button className="btn btn-space btn-secondary">
                    Cancel
                  </button>
                </div>
              </div>
              {/* dfs65df4a6sd54f6asd54f6asdf */}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EdicarConfiguracionUsuario;
