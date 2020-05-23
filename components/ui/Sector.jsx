import React from "react";
import Link from 'next/link';
import Swal from 'sweetalert2';
import useSector from '../../hooks/useSector';


const Sector = ({sector, index}) => {
  const { eliminarSector} = useSector();
  const {nombre, descripcion, id } = sector;

  // const eliminarSector=()=> {
  //   Swal.fire({
  //     title: 'Eliminar',
  //     text: "No podra recuperar el registro despues de haberlo eliminado!",
  //     icon: 'question',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Eliminar',
  //     cancelButtonText: 'Cancelar'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Eliminar!',
  //         'Preciono Eliminar.',
  //         'success'
  //       )
  //     } else {

  //        Swal.fire(
  //         'Deleted!',
  //         'Preciono cancelar.',
  //         'success'
  //       )
  //     }
  //   })
  // }


  return (
    <>
      <tbody>
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
              <Link href="/cliente/[id]" as={`/cliente/${id}`}><a className="btn btn-sm btn-outline-light">Editar</a></Link>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={eliminarSector}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Sector;

