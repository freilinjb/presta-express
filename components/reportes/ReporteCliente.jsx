import React from "react";

const ReporteCliente = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="font-16">Ordenar por</h3>
          <select className="form-control">
            <option>Codigo</option>
            <option>Nombre</option>
            <option>Apellido</option>
          </select>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Rango</h3>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Fecha Inicial</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputEmail4"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Fecha Final</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
        </div>

        <div className="card-body border-top">
          <h3 className="font-16">Sexo</h3>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck11"
            />
            <label className="custom-control-label" for="customCheck11">
              Hombre
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck12"
            />
            <label className="custom-control-label" for="customCheck12">
              Mujer
            </label>
          </div>
        </div>

        <div className="card-body border-top">
          <h3 className="font-16">Categorias</h3>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck18"
            />
            <label className="custom-control-label" for="customCheck18">
              Prestamos
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck19"
            />
            <label className="custom-control-label" for="customCheck19">
              Solicitudes
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck20"
            />
            <label className="custom-control-label" for="customCheck20">
              Garantias
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck21"
            />
            <label className="custom-control-label" for="customCheck21">
              Solidario
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck22"
            />
            <label className="custom-control-label" for="customCheck22">
              Clientes
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck23"
            />
            <label className="custom-control-label" for="customCheck23">
              Sectores
            </label>
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Edad Demografica</h3>
          <select className="form-control">
            <option selected="">Selecciona un rango</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
          </select>
        </div>
        <div className="card-body border-top">
          <a href="#" className="btn btn-secondary btn-lg btn-block">
            Imprimir
          </a>
        </div>
      </div>
    </>
  );
};

export default ReporteCliente;
