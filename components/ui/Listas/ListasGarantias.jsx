import React, { useEffect, useState } from "react";
import ModalGarantias from "../../ui/Modal/ModalGarantias";

import useGarantia from "../../../hooks/useGarantia";

const ListasGarantias = () => {
  const { garantiasTemporales, setGarantiasTemporales } = useGarantia("desc");

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
                  <th className="border-0">Tasación</th>
                </tr>
              </thead>
              <tbody>
                {garantiasTemporales.map((garantia,index)=> (
                  <>
                    <tr key={garantia.Garantia.key}>
                      <td>{index+1}</td>
                      <td>{garantia.Garantia.tipoGarantia}</td>
                      <td>{garantia.Garantia.nombre}</td>
                      <td>{garantia.Garantia.tasacion}</td>
                      <td>
                        <div className="btn-group ml-auto">
                          <button className="btn btn-sm btn-outline-light" data-toggle="modal" data-toast-posy="top" data-target="#sectorEdicionModal">Editar</button>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </td> 
                    </tr>
                  </>
                ))}
                {/* <tr>
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
                </tr> */}
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
      <ModalGarantias setGarantiasTemporales={setGarantiasTemporales} garantiasTemporales={garantiasTemporales}/>
    </>
  );
};

export default ListasGarantias;
