//FRONTAL DE CLIENTE
import React, { useState, useContext, useEffect } from "react";
import Link from 'next/link';
import Layout from "../components/layout/Layout";
import Navegacion from "../components/layout/Navegacion";
import { FirebaseContext } from "../firebase";

const Clientes = () => {
  // const {sectores} = useSector("creado");

  const [clientes, setClientes] = useState([]);
  const { firebase, usuario } = useContext(FirebaseContext);

  // const usuario = useAutenticacion();

  useEffect(() => {
    //Esta funcion te da acceso a todos los datos
    //y snapshot realiza operaciones con ellos
    // console.log(usuario);
    if (usuario) {
      const { uid } = usuario;
      const obtenerSectores = () => {
        firebase.db
          .collection("Clientes")
          .where("creador.id", "==", uid)
          .orderBy("creado", "desc")
          .onSnapshot(manejarSnapshot); //Ordena por creado
      }

      obtenerSectores();

      function manejarSnapshot(snapshot) {
        const clientes = snapshot.docs.map(doc => {
          //Extrae todo el registro completo
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        //resultado de la consulta
        setClientes(clientes);
      }
      console.log(clientes);
    }
  }, [usuario]);

  //se ejecuta cuando el componente esta listo

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
      </Navegacion>
    </Layout>
  );
};

export default Clientes;
