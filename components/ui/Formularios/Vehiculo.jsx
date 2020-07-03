import React from "react";

const Vehiculo = () => {
  return (
    <>
      <div
        className="tab-pane fade"
        id="vehiculo"
        role="tabpanel"
        aria-labelledby="vehiculo-tab"
      >
        <div className="">
          <form
            className="needs-validation"
            noValidate
            // onSubmit={handleSubmit}
          >
            <fieldset>
              <legend>Datos del Vehiculo</legend>
              <div className="form-row">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="chasis">Chasis</label>
                  <input
                    type="text"
                    className="form-control"
                    id="chasis"
                    name="chasis"
                    // value={cedula}
                    // onChange={handleChange}
                    placeholder="Ingrese el Numero de Chasis"
                    autoComplete="off"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="chasis">Placa</label>
                  <input
                    type="text"
                    className="form-control"
                    id="placa"
                    name="placa"
                    // value={cedula}
                    // onChange={handleChange}
                    placeholder="Ingrese el Numero de Placa"
                    autoComplete="off"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                <label htmlFor="marca">Marca</label>
                  <select
                    className="form-control"
                    name="marca"
                    // value={sexo}
                    id="marca"
                    // onChange={handleChange}
                  >
                    <option selected value="">Seleccione una opción</option>
                    <option value="Hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                <label htmlFor="tipoVehiculo">Tipo de Vehiculo</label>
                  <select
                    className="form-control"
                    name="tipoVehiculo"
                    // value={sexo}
                    id="tipoVehiculo"
                    // onChange={handleChange}
                  >
                    <option selected value="">Seleccione el tipo de vehiculo</option>
                    <option value="Hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="modelo">Modelo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="modelo"
                    name="modelo"
                    // value={cedula}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="puertas">Numero de puertas</label>
                  <input
                    type="number"
                    className="form-control"
                    id="puertas"
                    name="cpuertasedula"
                    // value={cedula}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                <label htmlFor="anio">Anio</label>
                  <select
                    className="form-control"
                    name="anio"
                    // value={sexo}
                    id="anio"
                    // onChange={handleChange}
                  >
                    <option selected value="">Seleccione el anio</option>
                    <option value="Hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>


                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                <label htmlFor="color">Color</label>
                  <select
                    className="form-control"
                    name="color"
                    // value={sexo}
                    id="color"
                    // onChange={handleChange}
                  >
                    <option selected value="">Seleccione el color</option>
                    <option value="Hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                  </select>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="cilindros">Cilindros</label>
                  <input
                    type="number"
                    className="form-control"
                    id="cilindros"
                    name="cilindros"
                    // value={cedula}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="pasajeros">Pasajeros</label>
                  <input
                    type="number"
                    className="form-control"
                    id="pasajeros"
                    name="pasajeros"
                    // value={cedula}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="fuerzaMotriz">Fuerza Motriz</label>
                  <input
                    type="number"
                    className="form-control"
                    id="fuerzaMotriz"
                    name="fuerzaMotriz"
                    // value={cedula}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                  <label htmlFor="tasacion">Tasación</label>
                  <input
                    type="number"
                    className="form-control"
                    id="tasacion"
                    name="tasacion"
                    // value={cedula}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>

              <legend className="border-top mt-2">Datos del Propietario</legend>
              <div className="form-row">
                <div className="col-md-12 col-sm-12 mb-3">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese el nombre completo"
                    name="nombre"
                    // value={telefono}
                    // onChange={handleChange}
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
                    // value={correo}
                    // onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="telefono">Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    placeholder="Ingrese el numero de telefono"
                    name="telefono"
                    // value={correo}
                    // onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="w-100"></div>
                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="cedula">Cedula de identificacion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cedula"
                    placeholder="Ingrese el numero de telefono"
                    name="cedula"
                    // value={correo}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="placaAnterior">Placa anterior</label>
                  <input
                    type="text"
                    className="form-control"
                    id="placaAnterior"
                    placeholder="Ingrese el numero de telefono"
                    name="placaAnterior"
                    // value={correo}
                    // onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                  <label htmlFor="direccion">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    name="direccion"
                    // value={direccion}
                    // onChange={handleChange}
                    placeholder="Identificacion"
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="observacionVehiculo">Observacion</label>
                    <textarea
                      className="form-control"
                      name="observacionVehiculo"
                      id="observacionVehiculo"
                      // value={observacion}
                      // onChange={handleChange}
                      placeholder="Observaciones a tomar en cuanta"
                      autoComplete="off"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Vehiculo;
