import React,{useContext} from "react";
import Link from "next/link";
import {FirebaseContext} from '../../firebase';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const ClienteMiniaturaDetalle = ({ cliente }) => {
	const {firebase, usuario} = useContext(FirebaseContext);

	const {
	id,
    nombre,
    apellido,
    correo,
    telefono,
    creado,
    observacion,
	urlFoto,
	creador
  } = cliente;
  
  const eliminarCliente = async () => {
	if(!usuario) {
		return router.push('/login');
	} 

	if(creador.id !== usuario.uid) {
		return router.push('/');
	}
	
	try {
		console.log('eliminar Cliente');
		console.log(id);
		console.log(usuario);

		firebase.db.collection("Prestamos").where("creador.id", "==", usuario.uid).where("estado","==","pendiente")
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
			});
		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});
		
		// const prestamos = await firebase.db.collection("Prestamos").where("creador.id","==",usuario.uid);
		// if(prestamos.exists) {
		// 	console.log('existe');
		// } else  {
		// 	console.log('no existe');
		// }
		// console.log('prestamos');
		// console.log(prestamos);
		// await firebase.db.collection("Clientes").where("").doc(cliente.id).delete();
		// return router.push('/');

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
