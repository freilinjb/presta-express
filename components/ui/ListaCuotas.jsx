import React,{useState, useEffect} from "react";
import useCalculadora from "../../hooks/useCalculadora";
import swal from 'sweetalert';
import Checkbox from '../../components/ui/Checkbox';

const ListaCuotas = ({ prestamo }) => {
  const { setMoneda } = useCalculadora();
  
  const seleccion = [{
    cuota:0,
    estado: false
  }];

  // useEffect(() => {
  //   setValorCuotas(prestamo.detallesCuotas[0].valorCuota);
  // });  
  const onClicConfirmar = () => {

    swal({
      title: "Cobro de Cuota!!",
      text: "El monto a cobrar es ",
      icon: "info",
      buttons: true,
      dangerMode: false,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Datos guardado con exito!!", {
          icon: "success",
        });
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };

  const onCheckboxClicked=(idx, isChecked)=>{
    let existe = false;
    for(const i in seleccion) {
      if(seleccion[i].cuota === idx) {
        existe = true;
        seleccion[i].estado = isChecked;
      }
    }

    if(!existe) {
      seleccion.push({cuota: idx, estado: isChecked});
    }

    console.log(seleccion);
      
    console.log(`I'm checkbox number ${idx} and i'm checked? --> ${isChecked}`);
    //Aquí puedes guardar estados si es necesario
  }

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
                {prestamo.detallesCuotas.map((cuotas) => (
                  <tr>
                    {/* <td>{cuotas.cuota}</td> */}
                    {/* <td> <div className="center"><input type="checkbox"  name="pago" id={cuotas.cuota}/></div> </td> */}
                    <td> <div className="center"><Checkbox initialState={false} id={cuotas.cuota} onChange={onCheckboxClicked}/></div> </td>
                    <td>{setMoneda(cuotas.interes)}</td>
                    <td>{setMoneda(cuotas.abonoCapital)}</td>
                    <td>{setMoneda(cuotas.valorCuota)}</td>
                    <td>{setMoneda(cuotas.saldoCapital)}</td>
                    <td>{cuotas.fecha}</td>
                    <td>{cuotas.estado}</td>
                    <td>
                      <div className="btn-group ml-auto">
                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={onClicConfirmar}
                        >
                          Cobrar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style>{`
      .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        `}</style>
    </>
  );
};

export default ListaCuotas;
