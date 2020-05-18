import React,{useState} from "react";
import useCalculadora from "../../hooks/useCalculadora";

const ResemenPrestamoPerfil = ({ detallesCuotas, monto }) => {
    const { setMoneda } = useCalculadora();
    const [togalPagado, setTotalPagado] = useState(0);    
    const [capitalPagado,setCapitalPagado] = useState(0);    
    const [capitalPendiente, setCapitalPendiente] = useState(0);    
    const [interes, setInteres] = useState(0);    

    console.log("desdes perfil usuaril", "=>", detallesCuotas);

    for(const i )
  return (
    <>
      <div className="row">
          <div className="col-12">
              <p></p>
          </div>
        <div className="col-4">
          <h4> Cuotas Pagadas: $2,800.30 | </h4>
          <p>Suspendisse potenti. Done csit amet rutrum.</p>
        </div>

        <div className="col-4">
          <h4> Today's Earning: $2,800.30</h4>
          <p>Suspendisse potenti. Done csit amet rutrum.</p>
        </div>
        <div className="col-4">
          <h4> Today's Earning: $2,800.30</h4>
          <p>Suspendisse potenti. Done csit amet rutrum.</p>
        </div>
      </div>
    </>
  );
};

export default ResemenPrestamoPerfil;
