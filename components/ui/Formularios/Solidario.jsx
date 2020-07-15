import React, { useContext } from "react";
import { useRouter } from "next/router";
import useMensajeAlertas from "../../../hooks/useMensajesAlertas";

import { FirebaseContext } from "../../../firebase";

//Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarCrearGarantiaSolidaria from "../../../validacion/validarCrearGarantiaSolidaria";

import useGarantia from "../../../hooks/useGarantia";

const STATE_INICIAL = {
  tipoIdentificacion: "cedula de identificación",
  identificacion: "",
  nombreSolidaria: "",
  apellidoSolidaria: "",
  sexoSolidaria: "",
};

const Solidario = ({ garantiasTemporales, setGarantiasTemporales }) => {
  //hook de routing para redireccionar
  const router = useRouter();

  //Context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  // const { garantiasTemporales, setGarantiasTemporales } = useGarantia("desc");

  const { valores, errores, handleSubmit, handleChange } = useValidacion(
    STATE_INICIAL,
    validarCrearGarantiaSolidaria,
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
      tipoIdentificacion: tipoIdentificacionSolidaria,
      identificacion: identificacionSolidaria,
      nombre: nombreSolidaria,
      apellido: apellidoSolidaria,
      sexo: sexoSolidaria,
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
    tipoIdentificacionSolidaria,
    identificacionSolidaria,
    nombreSolidaria,
    apellidoSolidaria,
    sexoSolidaria,
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
                  <label htmlFor="tipoIdentificacionSolidaria">Tipo de Identificacion</label>
                  <select
                    className="form-control"
                    name="tipoIdentificacionSolidaria"
                    value={tipoIdentificacionSolidaria}
                    id="tipoIdentificacionSolidaria"
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
                  <label htmlFor="identificacionSolidaria">Identificacion</label>
                  <input
                    type="text"
                    className={`form-control ${errores.identificacionSolidaria && ("is-invalid")}`}
                    id="identificacionSolidaria"
                    name="identificacionSolidaria"
                    value={identificacionSolidaria}
                    onChange={handleChange}
                    placeholder="Ingrese el numero de identificación"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Debe espesificar el certificado de la propiedad
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="nombreSolidaria">Nombre</label>
                  <input
                    type="text"
                    className={`form-control ${errores.nombreSolidaria && ("is-invalid")}`}
                    id="nombreSolidaria"
                    name="nombreSolidaria"
                    value={nombreSolidaria}
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
                  <label htmlFor="apellidoSolidaria">Apellido</label>
                  <input
                    type="text"
                    className={`form-control ${errores.apellidoSolidaria && ("is-invalid")}`}
                    id="apellidoSolidaria"
                    name="apellidoSolidaria"
                    value={apellidoSolidaria}
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
                  <label htmlFor="sexoSolidaria">Sexo</label>
                  <select
                    className="form-control"
                    name="sexoSolidaria"
                    value={sexoSolidaria}
                    id="sexoSolidaria"
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
                  <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={fechaNacimiento}
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
                    type="email"
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
