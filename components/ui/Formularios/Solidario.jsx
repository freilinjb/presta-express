import React, { useContext } from "react";
import { useRouter } from "next/router";
import useMensajeAlertas from "../../../hooks/useMensajesAlertas";

import { FirebaseContext } from "../../../firebase";

//Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarCrearGarantiaHipoteca from "../../../validacion/validarCrearGarantiaHipoteca";

import useGarantia from "../../../hooks/useGarantia";

const STATE_INICIAL = {
  tipoPropiedad: "",
  certificado: "",
  parcela: "",
  metraje: "",
  frenteMts: "",
  libro: "",
  folio: "",
  distritoCatastral: "",
  fontoMts: "",
  ciudad: "",
  tasacionHipoteca: "",
  observacionHipoteca: "",
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
      tipoGarantia: "Hipotecario",
      codigo: Math.random().toString(),
      tipoPropiedad,
      certificado,
      parcela,
      metraje,
      frenteMts,
      libro,
      folio,
      distritoCatastral,
      fontoMts,
      fechaTasacion,
      tasacion: tasacionHipoteca,
      direccion: direccionHipoteca,
      ciudad,
      observacion: observacionHipoteca,
    };
    setGarantiasTemporales([...garantiasTemporales, { Garantia }]);

    //Cierra el modal
    document.getElementById("btnCerrarSolidario").click();
  }

  const {
    tipoPropiedad,
    certificado,
    parcela,
    metraje,
    frenteMts,
    libro,
    folio,
    distritoCatastral,
    fontoMts,
    fechaTasacion,
    tasacionHipoteca,
    direccionHipoteca,
    ciudad,
    observacionHipoteca,
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
              <legend>Datos de la Propiedad</legend>
              <div className="form-row">

              <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="tipoVehiculo">Tipo de Propiedad</label>
                  <select
                    className="form-control"
                    name="tipoPropiedad"
                    value={tipoPropiedad}
                    id="tipoPropiedad"
                    onChange={handleChange}
                    required
                  >
                    <option selected value="">
                      Seleccione el tipo de propiedad
                    </option>
                    <option value="Hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="certificado">Certificado</label>
                  <input
                    type="text"
                    className={`form-control ${errores.certificado && ("is-invalid")}`}
                    id="certificado"
                    name="certificado"
                    value={certificado}
                    onChange={handleChange}
                    placeholder="Ingrese el certificado"
                    autoComplete="off"
                  />
                  <div className="invalid-feedback">
                    Debe espesificar el certificado de la propiedad
                  </div>
                </div>
                
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="chasis">Parcela</label>
                  <input
                    type="text"
                    className={`form-control ${errores.parcela && ("is-invalid")}`}
                    id="parcela"
                    name="parcela"
                    value={parcela}
                    onChange={handleChange}
                    placeholder="Ingrese la parcela"
                    autoComplete="off"
                    required
                  />
                  <div className="invalid-feedback">
                    Debe espesificar la placa del vehiculo
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="metraje">Metraje</label>
                  <input
                    type="text"
                    className={`form-control ${errores.metraje && ("is-invalid")}`}
                    id="metraje"
                    name="metraje"
                    value={metraje}
                    onChange={handleChange}
                    placeholder="Ingrese el Numero de Placa"
                    autoComplete="off"
                    required
                  />
                  <div className="invalid-feedback">
                    Debe espesificar la metraje
                  </div>
                </div>
              
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="libro">Libro</label>
                  <input
                    type="text"
                    className="form-control"
                    id="libro"
                    name="libro"
                    value={libro}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>
                
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="folio">Folio</label>
                  <input
                    type="number"
                    className="form-control"
                    id="folio"
                    name="folio"
                    value={folio}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="distritoCatastral">Descripcion castral</label>
                  <select
                    className="form-control"
                    name="distritoCatastral"
                    value={distritoCatastral}
                    id="distritoCatastral"
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
                  <label htmlFor="color">FontoMts</label>
                  <input
                    type="number"
                    className="form-control"
                    id="fontoMts"
                    name="fontoMts"
                    value={fontoMts}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="frenteMts">FrenteMts</label>
                  <input
                    type="number"
                    className="form-control"
                    id="frenteMts"
                    name="frenteMts"
                    value={frenteMts}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="fechaTasacion">Fecha Tasacion</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaTasacion"
                    name="fechaTasacion"
                    value={fechaTasacion}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                {/* <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="pasajeros">Pasajeros</label>
                  <input
                    type="number"
                    className="form-control"
                    // id="pasajeros"
                    // name="pasajeros"
                    // value={pasajeros}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div> */}

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="tasacionHipoteca">Tasación</label>
                  <input
                    type="number"
                    className="form-control"
                    id="tasacionHipoteca"
                    name="tasacionHipoteca"
                    value={tasacionHipoteca}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="ciudad">Ciudad</label>
                  <input
                    type="number"
                    className="form-control"
                    id="ciudad"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="direccionHipoteca">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccionHipoteca"
                    name="direccionHipoteca"
                    value={direccionHipoteca}
                    onChange={handleChange}
                    placeholder="Ingrese la direccion de la propiedad"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="observacionHipoteca">Observacion</label>
                    <textarea
                      className="form-control"
                      name="observacionHipoteca"
                      id="observacionHipoteca"
                      value={observacionHipoteca}
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
