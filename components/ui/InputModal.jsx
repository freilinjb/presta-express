import React,{useState, useContext} from "react";
import {useRouter} from 'next/router';

import { FirebaseContext } from '../../firebase';

//Validadiones
import useValidacion from '../../hooks/useValidacion';
import validarIniciarSector from '../../validacion/validarIniciarSector';
import { useAlert } from "react-alert";


const InputModal = () => {

    const STATE_INICIAL = {
        nombre:'',
        descripcion:''
    }

    const alert  = useAlert();

    const [error, setError] = useState("");


    const {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur,
      } = useValidacion(STATE_INICIAL, validarIniciarSector, crearSector);
    
      let { nombre, descripcion } = valores;
    
      //hook de routing para redireccionar
      const router = useRouter();
    
      //Context con las operaciones crud de firebase
      const { usuario, firebase } = useContext(FirebaseContext);
    
      async function crearSector() {
        //Inicia la carga
            //Si el usuario no esta autenticado llevat al login
            if (!usuario) {
                console.log('no esta loqueado');
                firebase.cargando = false;
                return router.push("/SignIn");
            }

        try {
            //Crear el objeto de nuevo producto

            const sector = {
                nombre,
                descripcion,
                creado: Date.now(),
                creador: {
                    id: usuario.uid,
                    nombre: usuario.displayName
                }
            }
            console.log(sector);
            
            //Insertar en la BD
            firebase.cargando = true;

            firebase.db.collection("Sectores").add(sector);
            alert.success('Ah ocurrido un error');

            nombre = '';
            descripcion = '';

            document.getElementById("cerrar").click();


        } catch (error) {
            console.log(error);
        } finally {
            firebase.cargando = false;
        }
        //Despues de registrar un Producto redireccionar al
        return router.push("/Sectores");
      }
   
  return (
    <form
        className="needs-validation"
        noValidate
        onSubmit={handleSubmit}
    >
        <div
        className="modal fade"
        id="Modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="ModalLabel">
                        Registro de Sector
                    </h5>
                    <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    >
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    
                    <div className="form-group">
                        <label htmlFor="nombre" className="col-form-label">
                            Nombre del Sector
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        placeholder="Ingrese el nombre del Sector"
                        />
                    {errores.nombre && <p className="alert alert-danger">{errores.nombre}</p>}

                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control" 
                            id="descripcion" 
                            name="descripcion" 
                            value={descripcion} 
                            onChange={handleChange} 
                            placeholder="Descripcion"></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    id="cerrar"
                    >
                    Cerrar
                    </button>
                    <button type="button" className="btn btn-primary" type="submit">
                        Guardar
                    </button>
                </div>
                </div>
            </div>
        </div>
    </form>

  );
};

export default InputModal;
