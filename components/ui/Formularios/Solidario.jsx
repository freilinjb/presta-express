import React, { useContext } from "react";
import { useRouter } from "next/router";
import useMensajeAlertas from "../../../hooks/useMensajesAlertas";

import { FirebaseContext } from "../../../firebase";

//Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarCrearGarantiaHipoteca from "../../../validacion/validarCrearGarantiaHipoteca";

import useGarantia from "../../../hooks/useGarantia";

const STATE_INICIAL = {
  tipoIdentificacion: "cedula de identificación",
  identificacion: "",
  nombre: "",
  apellido: "",
  sexo: "",
};

const Solidario = ({ garantiasTemporales, setGarantiasTemporales }) => {
  //hook de routing para redireccionar
  const router = useRouter();

  //Context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  // const { garantiasTemporales, setGarantiasTemporales } = useGarantia("desc");

  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarCrearGarantiaHipoteca,
    crearGarantiaVehiculo
  );

  async function crearGarantiaVehiculo() {
    if (!usuario) {
      firebase.cargando = false;

      return router.push("/SignIn");
    }

    const Garantia = {
      tipoGarantia: "Solidaria",
      codigo: Math.random().toString(),
      tipoIdentificacion,
      identificacion,
      nombre,
      apellido,
      sexo,
      fechaNacimiento,
      telefono: telefonoSolidaria,
      correo: correoSolidaria,
      sector: sectorSolidaria,
      ciudad: ciudadSolidaria,
      direccion: direccionSolidaria,
      observacion: observacionSolidaria,
    };
    setGarantiasTemporales([...garantiasTemporales, { Garantia }]);

    //Cierra el modal
    document.getElementById("btnCerrarSolidario").click();
  }

  const {
    tipoIdentificacion,
    identificacion,
    nombre,
    apellido,
    sexo,
    fechaNacimiento,
    telefonoSolidaria,
    correoSolidaria,
    sectorSolidaria,
    ciudadSolidaria,
    direccionSolidaria,
    observacionSolidaria,
  } = valores;

  return (
    <>
      <div
        className="tab-pane fade"
        id="solidaria"
        role="tabpanel"
        aria-labelledby="solidaria-tab"
      >
        <div className="">
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <fieldset>
              <legend>Datos de la personales</legend>
              <div className="form-row">

              <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="tipoIdentificacion">Tipo de Identificacion</label>
                  <select
                    className="form-control"
                    name="tipoIdentificacion"
                    value={tipoIdentificacion}
                    id="tipoIdentificacion"
                    onChange={handleChange}
                    required
                  >
                    <option selected value="">
                      Seleccione el tipo de propiedad
                    </option>
                    <option value="cedula de identificación">Cedula de Identificacion</option>
                    <option value="Hombre">RNC</option>
                    <option value="Hombre">Pasaporte</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="identificacion">Identificacion</label>
                  <input
                    type="text"
                    className={`form-control ${errores.identificacion && ("is-invalid")}`}
                    id="identificacion"
                    name="identificacion"
                    value={identificacion}
                    onChange={handleChange}
                    placeholder="Ingrese el numero de identificación"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Debe espesificar el certificado de la propiedad
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    className={`form-control ${errores.nombre && ("is-invalid")}`}
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre del garante"
                    autoComplete="off"
                    required
                  />
                  <div className="invalid-feedback">
                    Debe espesificar la placa del vehiculo
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="apellido">Apellido</label>
                  <input
                    type="text"
                    className={`form-control ${errores.apellido && ("is-invalid")}`}
                    id="apellido"
                    name="apellido"
                    value={apellido}
                    onChange={handleChange}
                    placeholder="Ingrese el apellido del garante"
                    autoComplete="off"
                    required
                  />
                  <div className="invalid-feedback">
                    Debe espesificar la metraje
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="sexo">Sexo</label>
                  <select
                    className="form-control"
                    name="sexo"
                    value={sexo}
                    id="sexo"
                    onChange={handleChange}
                    required
                  >
                    <option selected value="">
                      Seleccione el anio
                    </option>
                    <option value="Hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="sexo">Fecha de nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    id="sexo"
                    name="sexo"
                    value={sexo}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                
                <legend>Datos de contactos</legend>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="telefonoSolidaria">Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefonoSolidaria"
                    name="telefonoSolidaria"
                    value={telefonoSolidaria}
                    onChange={handleChange}
                    placeholder="Ingrese su numero de telefono"
                    autoComplete="off"
                    required
                  />
                </div>
                
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="correoSolidaria">Correo</label>
                  <input
                    type="number"
                    className="form-control"
                    id="correoSolidaria"
                    name="correoSolidaria"
                    value={correoSolidaria}
                    onChange={handleChange}
                    placeholder="Ingrese su correo electronico"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="sector">Sector</label>
                  <input
                    type="number"
                    className="form-control"
                    id="sectorSolidariasectorSolidaria"
                    name="sectorSolidaria"
                    value={sectorSolidaria}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="ciudadSolidaria">Ciudad</label>
                  <input
                    type="number"
                    className="form-control"
                    id="ciudadSolidaria"
                    name="ciudadSolidaria"
                    value={ciudadSolidaria}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="direccionSolidaria">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccionSolidaria"
                    name="direccionSolidaria"
                    value={direccionSolidaria}
                    onChange={handleChange}
                    placeholder="Ingrese la direccion de la propiedad"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="observacionSolidaria">Observacion</label>
                    <textarea
                      className="form-control"
                      name="observacionSolidaria"
                      id="observacionSolidaria"
                      value={observacionSolidaria}
                      onChange={handleChange}
                      placeholder="Observaciones a tomar en cuanta"
                      autoComplete="off"
                      rows="2"
                    ></textarea>
                  </div>
                </div>

              </div>
            </fieldset>
            <div className="modal-footer">
              <button
                type="button"
                id="btnCerrarSolidario"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Solidario;
