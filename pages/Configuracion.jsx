import React,{useEffect, useContext, useState} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import {FirebaseContext} from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/Error404';
import Navegacion from '../../components/layout/Navegacion';
import Spinner from '../../components/ui/Spinner';
import PerfilUsuario from '../components/ui/PerfilUsuario';
import ConfigurarUsuario from "../components/ui/EdicarConfiguracionUsuario";



const Cliente = () => {

    const [configuracion, setConfiguracion] = useState({});
    const [error, setError] = useState(false);

    const [consultarDB, setConsultarDB] = useState(true);
    // console.log(router);
    // const {query: {id} } = router;

     //context de firebase
     const {firebase, usuario} = useContext(FirebaseContext);
 
    useEffect(() => {
        if(id && consultarDB) {
            const obtenerCliente = async () => {
                try {
                    firebase.cargando = true;

                    //Trae el documento que tenga el id
                    const configuracionQuery = await firebase.db.collection('Configuracion').where("usuario.id","==",usuario.uid)
                    const configuracion = await configuracionQuery.get();
                    if(configuracion.exists) {
                        console.log('configuracion: ', configuracion);
                        
                        setConfiguracion(configuracion.data());
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
            obtenerCliente();
        }
    },[id]);


    const {comentarios, creado, descripcion,empresa, nombre, url, urlImagen, votos, creador, haVotado} = cliente;
    
    return ( 
        <Layout>
                <Navegacion>
                    {Object.keys(cliente).length === 0 && !error ? <Spinner className='spinner'/> : (
                    <>
                        <div className="row justify-content-center">
                            <PerfilUsuario configuracion={configuracion} usuario={usuario}/>
                            <ConfigurarUsuario configuracion={configuracion} id={id} />
                        </div>
                    </>
                    )}

            </Navegacion>
        </Layout>
     );
}
 
export default Cliente;