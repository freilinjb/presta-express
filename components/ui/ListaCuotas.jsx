import React from "react";
import useCalculadora from '../../hooks/useCalculadora';

const ListaCuotas = ({prestamo}) => {
  const { setMoneda } = useCalculadora();
  
  return (
    <>
      <div className="card">
        <h5 className="card-header">Top Selling Products</h5>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="bg-light">
                <tr className="border-0">
                  <th className="border-0">Cuota #</th>
                  <th className="border-0">Interés</th>
                  <th className="border-0">Abono al capital</th>
                  <th className="border-0">Valor de la cuota</th>
                  <th className="border-0">Saldo al capital</th>
                  <th className="border-0">Fecha</th>
                  <th className="border-0">Estado</th>
                  <th className="border-0">Accion</th>
                </tr>
              </thead>
              <tbody>
                  {prestamo.detallesCuotas.map(cuotas=> (
                    <tr>
                      <td>{cuotas.cuota}</td>
                      <td>{setMoneda(cuotas.interes)}</td>
                      <td>{setMoneda(cuotas.abonoCapital)}</td>
                      <td>{setMoneda(cuotas.valorCuota)}</td>
                      <td>{setMoneda(cuotas.saldoCapital)}</td>
                      <td>{cuotas.fecha}</td>
                      <td>{cuotas.estado}</td>
                      <td>
                        <div className="btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light">Cobrar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaCuotas;
