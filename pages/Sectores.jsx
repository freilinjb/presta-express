import React,{useState,useContext, useEffect} from "react";
import Layout from "../components/layout/Layout";
import Navegacion from "../components/layout/Navegacion";
import InputModal from '../components/ui/InputModal';
import Sector from '../components/ui/Sector';
import {FirebaseContext} from '../firebase'; 

const Sectores = () => {

  // const {sectores} = useSector("creado");

  const [sectores, setSectores ] = useState([]);
  const {firebase, usuario} = useContext(FirebaseContext);

    // const usuario = useAutenticacion();

    if(usuario) {
      const { uid } = usuario;
      const obtenerSectores =() => {  
        firebase.db.collection("Sectores").where("creador.id","==",uid).orderBy("creado", 'desc').onSnapshot(manejarSnapshot);//Ordena por creado
      }
      obtenerSectores();
    }
  
    // useEffect(() => {
    //   //Esta funcion te da acceso a todos los datos
    //   //y snapshot realiza operaciones con ellos
    //   // console.log(usuario);
    //   if(usuario){
    //     console.log(usuario);
        
       
    //   }
    // },[usuario]);
    
    //se ejecuta cuando el componente esta listo
    function manejarSnapshot(snapshot) {
      const sectores = snapshot.docs.map(doc => {
        //Extrae todo el registro completo
        return {
          id: doc.id,
          ...doc.data()
        }
      });
   
      //resultado de la consulta
      setSectores(sectores);
    }
    
    // const {nombre, descripcion, id } = sector;

    return (
    <>
      <Layout>
      <Navegacion>
        <div className="dashboard-short-list">
            <button type="button" className="btn btn-primary float-right shadow"  data-toggle="modal" data-target="#Modal">Registrar un sector</button>
            <InputModal/>
            

          <div className="row justify-content-center">
            {/* <!-- ============================================================== --> */}
            {/* <!-- shortable list  --> */}
            {/* <!-- ============================================================== --> */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">

              <section className="card card-fluid">
                <h5 className="card-header drag-handle">Lista de Sectores </h5>
                <ul
                  className="sortable-lists list-group list-group-flush list-group-bordered"
                  id="items"
                >
                  {sectores.map(sector => (
                    <Sector
                    key={sector.id}
                    sector={sector}
                    />
                ))}
                </ul>
              </section>
            </div>
          </div>
          {/* <!-- ============================================================== --> */}
          {/* <!-- end nestable list  --> */}
          {/* <!-- ============================================================== --> */}
        </div>
        </Navegacion>
      </Layout>
    </>
  );
};

export default Sectores;
