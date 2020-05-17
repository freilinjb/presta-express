import React,{useEffect, useContext, useState} from 'react';
import {useRouter} from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import {FirebaseContext} from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/Error404';
import Navegacion from '../../components/layout/Navegacion';
import Spinner from '../../components/ui/Spinner';
import PerfilCliente from '../../components/ui/PerfilCliente';
import ListaPrestamos from '../../components/ui/ListaPrestamos';



const Prestamo = () => {

    const [prestamo, setPrestamo] = useState({});
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
            const obtenerDatos = async () => {
                try {
                    firebase.cargando = true;

                    //Trae el documento que tenga el id
                    const prestamoQuery = await firebase.db.collection('Prestamos').doc(id);
                    const prestamo = await prestamoQuery.get();
                    if(prestamo.exists) {
                        setPrestamo(prestamo.data());
                        console.log('entro aqui');
                        console.log(prestamo.data());
                        
                        //Es para evitar que se cicle el useEffect y con la condicion principal
                        //y quitando el producto para evitar posibles errores
                        const clienteQuery = await firebase.db.collection('Clientes').doc(prestamo.data().cliente.id);
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
            obtenerDatos();
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
            await firebase.db.collection("Clientes").doc(id).delete();
            return router.push('/');


        } catch (error) {
            console.log(error);
        }
    }
    
    return ( 
        <Layout>
            {/* {error ? <Error404/> : ( */}
                <Navegacion>
                    {Object.keys(cliente).length === 0 && !error ? <Spinner className='spinner'/> : (
                    <>
                            
                            <div className="row justify-content-center">
                                <PerfilCliente cliente={cliente}/>
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <ListaPrestamos key={id}/>
                                </div>
                            </div>

                    </>
                    )}
            </Navegacion>
        </Layout>
     );
}
 
export default Prestamo;