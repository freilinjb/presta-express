import React from "react";

const ResemenPrestamoPerfil = ({ detallesCuotas }) => {
  console.log("desdes perfil usuaril", "=>", detallesCuotas);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <h4> Valor de la cuota: $2,800.30</h4>
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
