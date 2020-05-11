import React,{useState, useContext} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/layout/Layout';
import Navegacion from '../../components/layout/Navegacion';
import FileUploader from 'react-firebase-file-uploader';


import { FirebaseContext } from '../../firebase';

//Validaciones
import useValidacion from '../../hooks/useValidacion';
import validarCrearCliente from '../../validacion/validarCrearCliente';
//Copia todo del crear-cuenta

//Modelo


const STATE_INICIAL = {
    nombre:'',
    apellido:'',
    foto:'',
    apodo:'',
    sexo:'',
    cedula:'',
    correo:'',
    telefonos:'',
    sector:'',
    direccion:'',
    observacion:''
}

const Cliente = () => {
      //state de las imagenes
    const [nombreimagen, guardarNombre] = useState("");
    const [subiendo, guardarSubiendo] = useState(false);
    const [progreso, guardarProgrerso] = useState(0);
    const [urlFoto, guardarUrlImagen] = useState("");

    const [error, setError] = useState("");


    const {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur,
      } = useValidacion(STATE_INICIAL, validarCrearCliente, crearCliente);
    
      const { nombre, apellido, apodo, sexo, cedula, foto, telefono, correo, sector, direccion, observacion } = valores;
    
      //hook de routing para redireccionar
      const router = useRouter();
    
      //Context con las operaciones crud de firebase
      const { usuario, firebase } = useContext(FirebaseContext);
    
      async function crearCliente() {
        //Inicia la carga
            //Si el usuario no esta autenticado llevat al login
            if (!usuario) {
                console.log('no esta loqueado');
                return router.push("/SignIn");
                firebase.cargando = false;
            }

        try {
            //Crear el objeto de nuevo producto

            const cliente = {
                nombre,
                apellido,
                apodo,
                sexo,
                cedula,
                correo,
                telefono,
                calificacion: 0,
                urlFoto,
                sector,
                direccion,
                observacion,
                creado: Date.now(),
                creador: {
                    id: usuario.uid,
                    nombre: usuario.displayName
                }
            }
        
            //Insertar en la BD
            firebase.cargando = true;

            firebase.db.collection("Clientes").add(cliente);
            console.log(cliente);
            console.log(usuario);
        } catch (error) {
            console.log(error);
        } finally {
            firebase.cargando = false;
        }

        
    
        //Despues de registrar un Producto redireccionar al
        return router.push("/");
      }
    
      const handleUploadStart = () => {
        guardarProgrerso(0);
        guardarSubiendo(true);
      };
    
      //El progreso se va guardando automaticamente
      const handleProgress = (progreso) => guardarProgrerso({ progreso });
    
      //Cuando haya un error
      const handleUploadError = (error) => {
        guardarSubiendo(error);
        console.error(error);
      };
    
      const handleUploadSuccess = (nombre) => {
        guardarSubiendo(100);
        guardarSubiendo(false);
        guardarNombre(nombre);
        firebase.storage
          .ref("Clientes")
          .child(nombre)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            guardarUrlImagen(url);
          }); //Dice en que parte esta la imagen
      };

    return ( 
        <Layout>
            <Navegacion>
            <div className="row justify-content-center">
            {/* <!-- ============================================================== --> */}
            {/* <!-- validation form --> */}
            {/* <!-- ============================================================== --> */}
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12">
                <div className="card">
                    <h5 className="card-header">Registro de Cliente</h5>
                    <div className="card-body">
                        <form 
                            className="needs-validation" 
                            noValidate
                            onSubmit={handleSubmit}
                            >
                            <fieldset>
                                <legend>Datos Personales</legend>
                                <div className="form-row">
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="nombre" 
                                    name="nombre" value={nombre} 
                                    placeholder="Ingrese el nombre" 
                                    onChange={handleChange} 
                                    autoComplete="off"
                                    required/>
                                {errores.nombre && <p className="alert alert-danger">{errores.nombre}</p>}

                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" className="form-control" id="apellido" name="apellido" placeholder="Apellido" value={apellido} onChange={handleChange} autoComplete="off" required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                {errores.apellido && <p className="alert alert-danger">{errores.apellido}</p>}

                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                    <label htmlFor="apodo">Apodo</label>
                                    <input type="text" className="form-control" id="apodo" name="apodo" value={apodo} onChange={handleChange} autoComplete="off" placeholder=""/>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="sexo">Sexo</label>
                                    <select className="form-control" name="sexo" value={sexo} id="sexo" onChange={handleChange}>
                                        <option selected value="Hombre">Hombre</option>
                                        <option value="mujer">Mujer</option>
                                        <option value="mo definido">No definido</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="cedula">Cedula de Identificaion</label>
                                <input type="number" className="form-control" id="cedula" name="cedula" value={cedula} onChange={handleChange} placeholder="Identificacion" autoComplete="off"/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <label htmlFor="foto">Foto de Perfil</label>

                                <div className="input-group">
                                    <div className="custom-file">
                                        <FileUploader
                                            className="custom-file-input"
                                            accept="image/*"
                                            name="foto"
                                            id="foto"
                                            randomizeFilename
                                            storageRef={firebase.storage.ref("Clientes")}
                                            onUploadStart={handleUploadStart}
                                            onUploadError={handleUploadError}
                                            onUploadSuccess={handleUploadSuccess}
                                            onProgress={handleProgress}
                                        />
                                        <label className="custom-file-label" htmlFor="foto">Elegir archivo</label>
                                    </div>
                                    </div>
                                </div>
                            </div>                                

                            <legend>Ubicacion</legend>
                            <div className="form-row">
                                <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor="telefono">Telefono</label>
                                <input type="text" className="form-control" id="telefono" placeholder="Ejemplo (809-888-9999)" name="telefono" value={telefono} onChange={handleChange} autoComplete="off" required/>
                                
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor="correo">Correo</label>
                                <input type="email" className="form-control" id="correo" placeholder="Ejemplo nombre@gmail.com" name="correo" value={correo} onChange={handleChange} autoComplete="off" required/>
                                {errores.correo && <p className="alert alert-danger">{errores.correo}</p>}
                                
                                </div>
                                
                                <div className="w-100"></div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                <label htmlFor="sector">Sector</label>
                                    <select className="form-control" name="sector" id="sector" value={sector} onChange={handleChange}>
                                        <option selected value="la herradura">La Herradura</option>
                                        <option value="penco">Penco</option>
                                    </select>
                                
                                </div>
                                <div className="col-md-6 col-sm-12 mb-3">
                                    <label htmlFor="direccion">Direccion</label>
                                    <input type="text" className="form-control" id="direccion" name="direccion" value={direccion} onChange={handleChange} placeholder="Identificacion"/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                      <label htmlFor="">Observacion</label>
                                      <textarea className="form-control" name="observacion" id="observacion" value={observacion} onChange={handleChange} placeholder="Observaciones a tomar en cuanta" autoComplete="off" rows="2"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button 
                                className="btn btn-block btn-primary" 
                                disabled={firebase.cargando}
                                type="submit">
                                    {firebase.cargando ? 
                                    (<>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Cargando...
                                    </>
                                    )
                                    :
                                    (
                                        <>
                                        Guardar
                                        </>
                                    )
                                    }
                                </button>
                                
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- ============================================================== --> */}
            {/* <!-- end validation form --> */}
            {/* <!-- ============================================================== --> */}
    </div> 
    </Navegacion>   
    </Layout>
     );
}
 
export default Cliente;