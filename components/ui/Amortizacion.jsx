import React from "react";
import useCalculadora from '../../hooks/useCalculadora';

const Amortizacion = ({tablaAmortizada}) => {
    const { setMoneda } = useCalculadora();
        console.log('hola');
        
        console.log(tablaAmortizada);
  return (
    <>
      <div className="card">
        <h5 className="card-header">Tabla Amortizada</h5>
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
                (tablaAmortizada.cuotas.map(cuota=>(
                <tr>
                    <td>{cuota.cuota}</td>
                    <td>{setMoneda(cuota.interes)}</td>
                    <td>{setMoneda(cuota.saldoCapital)}</td>
                    <td>{setMoneda(cuota.valorCuota)}</td>
                    <td>{setMoneda(cuota.saldoCapital)}</td>
                    <td>{cuota.fecha}</td> 
                </tr>)))}
                <tr>
                  <td colspan="8">
                    <a href="#!" className="btn btn-outline-light float-right">
                      Imprimir
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amortizacion;