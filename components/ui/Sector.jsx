import React from "react";
import useSector from '../../hooks/useSector';


const Sector = ({sector, index, id}) => {
  const { eliminarSector, setEditarSector} = useSector();
  const {nombre, descripcion } = sector;

  const seleccionar=()=> {
     setEditarSector(id, sector);
  }

  return (
    <>
        <tr>
          <td>
            <p>{index}</p>
          </td>
          <td>
            <p>{nombre}</p>
          </td>
          <td>
          <p>{descripcion}</p>
          </td>
          <td>
            <div className="btn-group ml-auto">
              <button className="btn btn-sm btn-outline-light" data-toggle="modal" data-toast-posy="top" data-target="#sectorEdicionModal" onClick={seleccionar}>Editar</button>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={eliminarSector}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
    </>
  );
};

export default Sector;

