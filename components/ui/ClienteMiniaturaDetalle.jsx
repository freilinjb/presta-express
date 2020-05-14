import React from "react";
import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const ClienteMiniaturaDetalle = ({ cliente }) => {
  const {
    nombre,
    apellido,
    correo,
    telefono,
    creado,
    observacion,
    urlFoto,
  } = cliente;

  const eliminarCliente = async () => {
	if(!usuario) {
		return router.push('/login');
	} 

	if(creador.id !== usuario.uid) {
		return router.push('/');
	}
	
	try {
		await firebase.db.collection("productos").doc(cliente.id).delete();
		return router.push('/');

	} catch (error) {
		console.log(error);
	}
}
  return (
    <>
      <tbody>
        <tr>
          <td>
            <div className="m-r-10">
              <img src={urlFoto} className="rounded-circle" alt="Foto" />
            </div>
          </td>
          <td>
            <p>{nombre + " " + apellido}</p>
          </td>
          <td>
            <p>
              <a href={`tel:1+${telefono}`}>{telefono}</a>
            </p>
          </td>
          <td>
            <p>
              <a href={`mailto:${correo}`}>{correo}</a>
            </p>
          </td>
          <td>
            <div className="btn-group ml-auto">
              <button className="btn btn-sm btn-outline-light">Editar</button>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={eliminarCliente}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <style jsx>{`
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default ClienteMiniaturaDetalle;
