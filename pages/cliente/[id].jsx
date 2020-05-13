import React,{useEffect, useContext, useState} from 'react';
import {useRouter} from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import {FirebaseContext} from '../../firebase';
import Layout from '../../components/layouts/Layout';
import Error404 from '../../components/layouts/404';


const Cliente = () => {

    const [cliente, setCliente] = useState({});
    const [error, setError] = useState(false);

    //Routing para obtener el id actual del producto
    const router = useRouter();
    const [comentario, setComentario] = useState({});
    const [consultarDB, setConsultarDB] = useState(true);
    // console.log(router);
    const {query: {id} } = router;

     //context de firebase
     const {firebase, usuario} = useContext(FirebaseContext);
 
    useEffect(() => {
        if(id && consultarDB) {
            const obtenerProducto = async () => {
                //Trae el documento que tenga el id
                const clienteQuery = await firebase.db.collection('Clientes').doc(id);
                const cliente = await clienteQuery.get();
                if(cliente.exists) {
                    setClientes(clientes.data());
                    //Es para evitar que se cicle el useEffect y con la condicion principal
                    //y quitando el producto para evitar posibles errores
                    setConsultarDB(false);
                } else {
                    setError(true);
                    setConsultarDB(false);
                }
            }
            obtenerProducto();
        }
        //Si algo cambia en producto se actualiza: es por haVotado
    },[id]);

    if(Object.keys(cliente).length === 0 && !error) return 'Cargando...';

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
            <>
            {error ? <Error404/> : (
            <div className="contenedor">
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                    `}
                >{nombre}</h1>

                <ContenedorProducto> 
                    <div>
                        <p>Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})}</p>
                        <p>Publicado por: {creador.nombre}</p>
                        
                        <img src={urlImagen}/>

                        <p>{descripcion}</p>

                        { usuario && (
                            <>
                                <h2>Agrega tu comentario</h2>
                                <form
                                    onSubmit={agregarComentario}
                                >
                                    <Campo>
                                        <input 
                                            type="text"
                                            name="mensaje"
                                            onChange={comentarioChange}
                                            />
                                    </Campo>
                                    <InputSubmit
                                        type="Submit"
                                        value="Agregar Comentario"
                                    />
                                </form> 
                            </>
                        )}

                        <h2 css={css`
                            margin: 2rem 0;
                        `}>Comentarios</h2>
                        {comentarios.length === 0 ? "Aun no hay comentarios" : (
                            <ul>
                                {comentarios.map((comentario,i) => (
                                <li 
                                    key={`${comentario.usuarioId}-${i}`}
                                    css={css`
                                        border: 1px solid #e1e1e1;
                                        padding: 2rem;
                                    `}
                                > 
                                    <p>{comentario.mensaje}</p>
                                    <p> Escrito por:
                                        <span
                                            css={css`
                                            font-weight: bold;
                                        `}
                                        >
                                            {' '}{comentario.usuarioNombre}
                                        </span>
                                    </p>
                                </li>
                                ))}
                            </ul>

                        )}
                    </div>

                    <aside>
                        <Boton
                            target="_blak"
                            bgColor="true"
                            href={url}
                        >Visita URL</Boton>

                        <div 
                            css={css`
                                margin-top: 5rem;
                            `}
                        >
                            <p css={css`
                                text-align: center;
                            `}>{votos} Votos</p>


                            {usuario && (
                                <Boton
                                    onClick={votarProducto}
                                >
                                    Votar
                                </Boton>
                            )}
                        </div>
                    </aside>
                </ContenedorProducto>

                {puedeBorrar() &&
                    <Boton
                        onClick={eliminarProducto}
                    >Eliminar Producto</Boton>
                }
            </div>

            )}
            </>
        </Layout>
     );
}
 
export default Producto;