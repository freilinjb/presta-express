import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import Navegacion from "../../components/layout/Navegacion";
import FileUploader from "react-firebase-file-uploader";
import useMensajesAlertas from "../../hooks/useMensajesAlertas";

import { FirebaseContext } from "../../firebase";

//Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarCrearCliente from "../../validacion/validarCrearCliente";
//Copia todo del crear-cuenta
import useSector from "../../hooks/useSector";

const STATE_INICIAL = {
  nombre: "",
  apellido: "",
  foto: "",
  apodo: "",
  sexo: "",
  cedula: "",
  correo: "",
  telefono: "",
  sector: "",
  direccion: "",
  observacion: "",
};

const Usuario = () => {
  const { sectores } = useSector("creado");
  const { Toast } = useMensajesAlertas();

  //state de las imagenes
  const [nombreimagen, guardarNombre] = useState("");
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgrerso] = useState(0);
  const [urlFoto, guardarUrlImagen] = useState("");

  const [error, setError] = useState("");

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearCliente, crearCliente);

  const {
    nombre,
    apellido,
    apodo,
    sexo,
    cedula,
    foto,
    telefono,
    correo,
    sector,
    fechaIngrerso,
    direccion,empresa,telefonoTrabajo, sueldo,direccionLaboral,
    observacion,
  } = valores;

  //hook de routing para redireccionar
  const router = useRouter();

  //Context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);
  //   console.log(usuario);

  async function crearCliente() {
    //Inicia la carga
    //Si el usuario no esta autenticado llevat al login
    if (!usuario) {
      console.log("no esta loqueado");
      return router.push("/SignIn");
      firebase.cargando = false;
    }

    try {
      //Crear el objeto de nuevo producto

      const cliente = {
        nombre,
        apellido,
        apodo,
        sexo,
        cedula,
        correo,
        telefono,
        calificacion: 0,
        urlFoto,
        sector,
        direccion,
        trabajo: {
          telefonoTrabajo,
          empresa,
          sueldo,
          direccionLaboral,
          fechaIngrerso,
        },
        observacion,
        creado: Date.now(),
        estado: "",
        creador: {
          id: usuario.uid,
          nombre: usuario.displayName,
        },
      };

      //Insertar en la BD
      firebase.cargando = true;

      firebase.db.collection("Clientes").add(cliente);
      // console.log(cliente);
      // alert.success('Se ha guardo correctamente');
      Toast.fire({
        icon: "success",
        title: "Se ha guardado correctamente!!",
      });
      // console.log(usuario);
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "Ha ocurrido un error!!",
      });
    } finally {
      firebase.cargando = false;
    }

    //Despues de registrar un Producto redireccionar al
    return router.push("/Clientes");
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
      .ref("Clientes")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        guardarUrlImagen(url);
      }); //Dice en que parte esta la imagen
  };

  return (
    <Layout>
      <Navegacion titulo={"Registro"}>
        <div className="row justify-content-center">
          {/* <!-- ============================================================== --> */}
          {/* <!-- validation form --> */}
          {/* <!-- ============================================================== --> */}
          <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12">
            <div className="card">
              <h5 className="card-header">
                Registro de Usuario <span className="fas fa-user-plus"></span>
              </h5>
              <div className="card-body">
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <fieldset>
                    <legend>Datos Personales</legend>
                    <div className="form-row">
                      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                          type="text"
                          className={`form-control ${
                            nombre.length >= 5 ? "is-valid" : "is-invalid"
                          }`}
                          id="nombre"
                          name="nombre"
                          value={nombre}
                          placeholder="Ingrese el nombre"
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                        {errores.nombre && (
                          <p className="alert alert-danger">{errores.nombre}</p>
                        )}
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                          type="text"
                          className={`form-control ${
                            apellido.length >= 3 ? "is-valid" : "is-invalid"
                          }`}
                          id="apellido"
                          name="apellido"
                          placeholder="Apellido"
                          value={apellido}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                        {errores.apellido && (
                          <div className="valid-feedback">{errores.apellido}</div>
                        )}
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                        <label htmlFor="apodo">Apodo</label>
                        <input
                          type="text"
                          className="form-control"
                          id="apodo"
                          name="apodo"
                          value={apodo}
                          onChange={handleChange}
                          autoComplete="off"
                          placeholder=""
                        />
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                        <label htmlFor="sexo">Sexo</label>
                        <select
                          className="form-control"
                          name="sexo"
                          value={sexo}
                          id="sexo"
                          onChange={handleChange}
                        >
                          <option selected value="Hombre">
                            Hombre
                          </option>
                          <option value="mujer">Mujer</option>
                          <option value="mo definido">No definido</option>
                        </select>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                        <label htmlFor="cedula">Cedula de Identificaion</label>
                        <input
                          type="number"
                          className="form-control"
                          id="cedula"
                          name="cedula"
                          value={cedula}
                          onChange={handleChange}
                          placeholder="Identificacion"
                          autoComplete="off"
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                        <label htmlFor="foto">Foto de Perfil</label>

                        <div className="input-group">
                          <div className="custom-file">
                            <FileUploader
                              className="custom-file-input"
                              accept="image/*"
                              name="foto"
                              id="foto"
                              randomizeFilename
                              storageRef={firebase.storage.ref("Clientes")}
                              onUploadStart={handleUploadStart}
                              onUploadError={handleUploadError}
                              onUploadSuccess={handleUploadSuccess}
                              onProgress={handleProgress}
                            />
                            <label className="custom-file-label" htmlFor="foto">
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
                          placeholder="Ejemplo (809-888-9999)"
                          name="telefono"
                          value={telefono}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 mb-3">
                        <label htmlFor="correo">Correo</label>
                        <input
                          type="email"
                          className="form-control"
                          id="correo"
                          placeholder="Ejemplo nombre@gmail.com"
                          name="correo"
                          value={correo}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                        {errores.correo && (
                          <p className="alert alert-danger">{errores.correo}</p>
                        )}
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
                          <option value="penco">Penco</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-12 mb-3">
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



                    {/* LEYANDA */}

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
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- ============================================================== --> */}
          {/* <!-- end validation form --> */}
          {/* <!-- ============================================================== --> */}
        </div>
      </Navegacion>
    </Layout>
  );
};

export default Usuario;
