import React from "react";
import useCalculadora from "../../hooks/useCalculadora";

const Amortizacion = ({ tablaAmortizada }) => {
  const { setMoneda,formatearFecha } = useCalculadora();
  
  return (
    <>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#amortizacion"
                aria-expanded="true"
                aria-controls="amortizacion"
              >
                Tabla Amortizada
              </button>
            </h5>
          </div>

          <div
            id="amortizacion"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="bg-light">
                      <tr className="border-0">
                        <th className="border-0">#</th>
                        <th className="border-0">Interés</th>
                        <th className="border-0">Abono al capital</th>
                        <th className="border-0">Valor de la cuota </th>
                        <th className="border-0">Saldo al capital</th>
                        <th className="border-0">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tablaAmortizada.listo &&
                        tablaAmortizada.cuotas.map((cuota) => (
                          <tr key={cuota.cuota}>
                            <td>{cuota.cuota}</td>
                            <td>{setMoneda(cuota.interes)}</td>
                            <td>{setMoneda(cuota.saldoCapital)}</td>
                            <td>{setMoneda(cuota.valorCuota)}</td>
                            <td>{setMoneda(cuota.saldoCapital)}</td>
                            <td>{cuota.fecha}</td>
                          </tr>
                        ))}
                      <tr>
                        <td colSpan="8">
                          <a
                            href="#!"
                            className="btn btn-outline-light float-right"
                          >
                            Imprimir
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Resumen
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Valor de la cuota</strong>
                  <span class="badge badge-secondary badge-pill">{tablaAmortizada.cuotaFija}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Cuotas</strong>
                  <span class="badge badge-secondary badge-pill">{tablaAmortizada.cuotas.length}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Fecha de inicio</strong>
                  <span class="badge badge-secondary badge-pill">{tablaAmortizada.cuotas[0].fecha}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Fecha de culminacion</strong>
                  <span class="badge badge-secondary badge-pill">{tablaAmortizada.cuotas[tablaAmortizada.cuotas.length-1].fecha}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <p className="alert alert-warning">{tablaAmortizada.msg}</p>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amortizacion;
