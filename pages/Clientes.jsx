//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from 'next/link';
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import Navegacion from "../components/layout/Navegacion";
import ClienteMiniaturaDetalle from '../components/ui/ClienteMiniaturaDetalle';
import Spinner from '../components/ui/Spinner';
const Clientes = () => {
  // const {sectores} = useSector("creado");
  const [cargando, setCargando] = useState(false);
  
  const [clientes, setClientes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);



  // const usuario = useAutenticacion();

  useEffect(() => {
    if(usuario) {
        const { uid } = usuario;
        //Esta funcion te da acceso a todos los datos
        //y snapshot realiza operaciones con ellos
        try {
          setCargando(true);

          const obtenerClientes =() => {
            firebase.db.collection("Clientes").where("creador.id","==",uid).orderBy("creado", 'desc').onSnapshot(manejarSnapshot);//Ordena por creado
          }
          obtenerClientes();
          console.log(clientes);
        } catch (error) {
          console.log(error);
        }
        finally {
          setCargando(false);
        }
    }
  },[]);
  //se ejecuta cuando el componente esta listo
  function manejarSnapshot(snapshot) {
    const clientes = snapshot.docs.map(doc => {
      //Extrae todo el registro completo
      return {
        id: doc.id,
        ...doc.data()
      }
    });
 
    //resultado de la consulta
    setClientes(clientes);    
  }
  
  console.log(clientes);
  
  const Componente = (cargando) ? <Spinner/> : (<div className="col-md-6 col-lg-3 col-xl-3 col-sm-12">
                                                  {clientes.map(cliente=>(
                                                       <ClienteMiniaturaDetalle key={cliente.id} cliente={cliente}/>
                                                  ))}</div>)

  return (
    <Layout>
      <Navegacion titulo={"Lista de Clientes"}>
      
            <div className="row">
                <Link href="/add/Cliente">            
                    <a className="btn btn-primary shadow float-right col-md-auto offset-md-10">Registrar un sector</a>
                </Link>
                <div className="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-11 mt-2">
                    
                    <div className="card">
                        <div className="card-body">
                            <form>
                            <input
                                className="form-control form-control-lg"
                                type="search"
                                placeholder="Buscar..."
                                aria-label="Buscar..."
                            />
                            <button className="btn btn-primary search-btn" type="submit">
                                Buscar
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            { Componente } 
            </div>
      </Navegacion>
    </Layout>
  );
};

export default Clientes;
