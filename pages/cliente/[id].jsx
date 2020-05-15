import React,{useEffect, useContext, useState} from 'react';
import {useRouter} from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import {FirebaseContext} from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/Error404';
import Navegacion from '../../components/layout/Navegacion';
import Spinner from '../../components/ui/Spinner';



const Cliente = () => {

    const [cliente, setCliente] = useState({});
    const [error, setError] = useState(false);

    //Routing para obtener el id actual del producto
    const router = useRouter();
    const [consultarDB, setConsultarDB] = useState(true);
    // console.log(router);
    const {query: {id} } = router;

     //context de firebase
     const {firebase, usuario} = useContext(FirebaseContext);
 
    useEffect(() => {
        if(id && consultarDB) {
            const obtenerProducto = async () => {
                try {
                    firebase.cargando = true;

                    //Trae el documento que tenga el id
                    const clienteQuery = await firebase.db.collection('Clientes').doc(id);
                    const cliente = await clienteQuery.get();
                    if(cliente.exists) {
                        setCliente(cliente.data());
                        //Es para evitar que se cicle el useEffect y con la condicion principal
                        //y quitando el producto para evitar posibles errores
                        setConsultarDB(false);
                    } else {
                        setError(true);
                        setConsultarDB(false);
                    }
                } catch (error) {
                    console.log(error);
                }
                finally {
                    firebase.cargando = false;
                }
            }
            obtenerProducto();
        }
        //Si algo cambia en producto se actualiza: es por haVotado
    },[id]);

    // if(Object.keys(cliente).length === 0 && !error) return <Spinner className='spinner'/>;

    const {comentarios, creado, descripcion,empresa, nombre, url, urlImagen, votos, creador, haVotado} = cliente;

    //funcion que revisa que el creador del producto sea el mismo que esta autenticado
    const puedeBorrar = () => {
        if(!usuario) return false;

        if(creador.id === usuario.uid) {
            return true;
        } 
    }

    //Eliminar producto de la BD
    const eliminarCliente = async () => {
        if(!usuario) {
            return router.push('/login');
        } 

        if(creador.id !== usuario.uid) {
            return router.push('/');
        }
        
        try {
            await firebase.db.collection("productos").doc(id).delete();
            return router.push('/');


        } catch (error) {
            console.log(error);
        }
    }
    
    return ( 
        <Layout>
            {/* {error ? <Error404/> : ( */}
                <Navegacion>
                    {firebase.cargando ? <Spinner className='spinner'/> : (

                    <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                    <div className="card">
                    <div className="card-body">
                        <div className="user-avatar text-center d-block">
                            <img src={cliente.urlFoto} alt="User Avatar" className="rounded-circle user-avatar-xxl"/>
                        </div>
                        <div className="text-center">
                            <h2 className="font-24 mb-0">{cliente.nombre + ' '+ cliente.apellido}</h2>
                            {cliente.apodo && (<p>Alias ({cliente.apodo})</p>)}
                        </div>
                    </div>
                    <div className="card-body border-top">
                        <h3 className="font-16">Informacion del Cliente </h3>
                        <div className="">
                            <ul className="list-unstyled mb-0">
                            <li className="mb-2"><i className="fas fa-fw fa-envelope mr-2"></i>{cliente.correo}</li>
                            <li className="mb-0"><i className="fas fa-fw fa-phone mr-2"></i>{cliente.telefono}</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body border-top">
                        <h3 className="font-16">Rating</h3>
                        <h1 className="mb-0">0</h1>
                        <div className="rating-star">
                            <i className="fa fa-fw fa-star"></i>
                        </div>
                    </div>
                    <div className="card-body border-top">
                        <h3 className="font-16">Observacion</h3>
                        <div>
                            <p>{cliente.observacion}</p>
                        </div>
                    </div>
                </div>
                </div>
                    )}

            </Navegacion>
        </Layout>
     );
}
 
export default Cliente;