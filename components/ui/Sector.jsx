import React from "react";
import Link from 'next/link';

const Sector = ({sector}) => {

  const {nombre, descripcion, id } = sector;


  return (
    <>
      <li className="list-group-item align-items-center drag-handle border fade-up-right">
        <span className="drag-indicator"></span>

        <div>{nombre}</div>
        <hr/>
        <div className="text-muted"> {descripcion}</div>
        <div className="btn-group ml-auto">
          
          <button className="btn btn-sm btn-outline-light">Editar</button>
          <button className="btn btn-sm btn-outline-light">
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default Sector;