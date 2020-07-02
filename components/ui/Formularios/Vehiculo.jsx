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
        {/* <h3>Registro de Hipoteca </h3>
        <p>
          Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu
          sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex
          ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros
          pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus
          scelerisque risus, a commodo mi tempus eu.
        </p> */}
        <div className="">
          <div className="card">
            <h5 className="card-header">
              Registro de Cliente <span className="fas fa-user-plus"></span>
            </h5>
            <div className="card-body">
              <form
                className="needs-validation"
                noValidate
                // onSubmit={handleSubmit}
              >
                <fieldset>
                  <legend>Datos Personales</legend>
                  <div className="form-row">
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                      <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                      <label htmlFor="apellido">Apellido</label>
                      <div className="valid-feedback">Looks good!</div>
                      {/* {errores.apellido && (
                        <div className="valid-feedback">{errores.apellido}</div>
                      )} */}
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                      <label htmlFor="apodo">Apodo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="apodo"
                        name="apodo"
                        // value={apodo}
                        // onChange={handleChange}
                        autoComplete="off"
                        placeholder=""
                      />
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                      <label htmlFor="sexo">Sexo</label>
                      <select
                        className="form-control"
                        name="sexo"
                        // value={sexo}
                        id="sexo"
                        // onChange={handleChange}
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
                        // value={cedula}
                        // onChange={handleChange}
                        placeholder="Identificacion"
                        autoComplete="off"
                      />
                      <div className="valid-feedback">Looks good!</div>
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
                        // value={sector}
                        // onChange={handleChange}
                      >
                        <option value="" selected>
                          --Seleccione--
                        </option>
                        {/* {sectores.map((str) => (
                          <option value={str.id} key={str.id}>
                            {str.nombre}
                          </option>
                        ))} */}
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
                        // value={direccion}
                        // onChange={handleChange}
                        placeholder="Identificacion"
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="">Observacion</label>
                        <textarea
                          className="form-control"
                          name="observacion"
                          id="observacion"
                          // value={observacion}
                          // onChange={handleChange}
                          placeholder="Observaciones a tomar en cuanta"
                          autoComplete="off"
                          rows="2"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehiculo;
