import React, { useEffect, useState } from "react";

import useGarantia from "../../../hooks/useGarantia";

const ListasGarantias = () => {
  const { garantiasTemporales } = useGarantia("desc");
  const [garantia, setGarantia] = useState([]);

  useEffect(() => {
    console.log("cambio lista garantia");
  }, [garantiasTemporales]);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row justify-content-between">
            <div className="col-4">
              <p>Listas de Garantias</p>
            </div>
            <div className="col-auto m-0 p-0">
              <button
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#ModalGarantias"
                type="button"
              >
                Agregar Garantia
                {garantiasTemporales.map((g) => (
                  <p>Hola mundo</p>
                ))}
              </button>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped ">
              <thead className="bg-light">
                <tr className="border-0">
                  <th className="border-0">#</th>
                  <th className="border-0">Tipo de Garantia</th>
                  <th className="border-0">Propietario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="m-r-10">
                      <img
                        src="/static/assets/images/product-pic.jpg"
                        alt="user"
                        className="rounded"
                        width="45"
                      />
                    </div>
                  </td>
                  <td>Product #1 </td>
                  <td>id000001 </td>
                  <td>
                    <span className="badge-dot badge-brand mr-1"></span>
                    InTransit{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan="9">
                    <a href="#" className="btn btn-outline-light float-right">
                      View Details
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

export default ListasGarantias;
