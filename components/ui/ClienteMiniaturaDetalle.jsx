import React,{useContext, useState} from "react";
import Link from "next/link";
import {FirebaseContext} from '../../firebase';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

import Spinner from '../../components/ui/Spinner';

import useMensajesAlertas from '../../hooks/useMensajesAlertas';

const ClienteMiniaturaDetalle = ({ cliente }) => {

    const { Toast } = useMensajesAlertas();
	const {firebase, usuario} = useContext(FirebaseContext);

	const [cargando, setCargando] = useState(false);

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
		setCargando(true);
		let existe = false;
		firebase.cargando = true;
		//Pregunta si el usuario contiene usuario 
		await firebase.db.collection("Prestamos").where("creador.id", "==", usuario.uid).where("estado","==","activo").where("cliente.id","==",id)
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				// console.log(doc.id, " => ", doc.data());

				if(doc.exists) {
					console.log('existe');
					existe = true;
				} else {
					console.log('no existe');
				}
			});
			if(existe){
				Toast.fire({
					icon: 'warning',
					title: 'El usuario tiene prestamos activo.\nNo puede ser eliminado hasta cultimar los prestamos activos!!'
				  });
			} 
		})
		.catch(function(error) {
			console.log("Error getting documents: ", error);
		});

		//Elimina el usuario si no contiene prestamos activos
		if(!existe) {
			await firebase.db.collection("Clientes").doc(id).delete();
			Toast.fire({
				icon: 'success',
				title: 'Se ha eliminado correctamente!!'
			  });
		}

	} catch (error) {
		console.log(error);
	}

	finally{
		setCargando(false);
		firebase.cargando = false;
	}
}
  return (
    <>
		
		{cargando && (<div className="spinner"><Spinner/></div>)}
	
        <tr>
          <td>
            <div className="m-r-10">
				{urlFoto ? 
				(
					<img src={urlFoto} className="rounded-circle" alt="Foto" />
				):
				(
					<img src="/static/assets/images/avatar-1.jpg" className="rounded-circle" alt="Foto" />
				)}
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
              <Link href="/cliente/[id]" as={`/cliente/${id}`}><a className="btn btn-sm btn-outline-light">Editar</a></Link>
              <button
                className="btn btn-sm btn-outline-light"
                onClick={eliminarCliente}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      <style jsx>{`
        img {
          	width: 60px;
          	height: 60px;
          	border-radius: 50%;
			  
        }
		.spinner {
			height: 100px;
			width: 100px;
			position: absolute;
			left: 50%;
			margin-left: -50px;
			top: 50%;
			margin-top: -50px;
        }
      `}</style>
    </>
  );
};

export default ClienteMiniaturaDetalle;
