import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config';

class Firebase {

    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        //Metodo de autenticar y crear una cuenta
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
        this.cargando = false;
    }

    async registrar(nombre, email, password) {
        this.cargando = true;
        try {

            const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

            console.log('nuevoUsuario', '=>', nuevoUsuario);

            //Coleccion de configuracion de operaciones de 
            //negocios y datos de relacionados a los roles
            const configuracion = {

                nombreEmpresa: '',
                eslogan: '',
                urlLogo: '',
                Direccion:{
                    direccion:'',
                    ciudad:'',
                    sector:'',
                },
                Contacto:{
                    celular:'',
                    telefono1:'',
                    telefono2:'',
                    correo:'',
                },
                prestamo: {
                    tipoCobro: '',
                    aplicacionInteres: '',
                    interesPorDefecto: '',
                    permitirCambiarInteres: false,
                    diasIgnorados: [

                    ],
                    fijarCobro: false,
                    cobro: {
                        semanal: '',
                        quincenal: '',
                        mensual: '',
                    },
                    diasQuincena: 14,
                    diasMes: 28,
                    redondeoAutomatico: false,
                },
                usuario: {
                    id: nuevoUsuario.user.uid,
                },
            };

            const resultado = await firebase.db.collection("Configuracion").add(configuracion);
            console.log(`resultado: `, resultado);
            
            return await nuevoUsuario.user.updateProfile({
                displayName: nombre
            });

        } catch (error) {
            console.log(error);

        }
        finally {
            this.cargando = false;
        }

    }

    //todo Iniciar sesion del usuario
    async login(email, password) {

        try {
            this.cargando = true;
            return this.auth.signInWithEmailAndPassword(email, password);

        } catch (error) {
            console.log(error);

        }
        finally {
            this.cargando = false;
        }
    }

    //todo Cierra la sesion del usuario
    async cerrarSesion() {
        try {

            this.cargando = true;
            await this.auth.signOut();

        } catch (error) {
            console.log(error);

        }
        finally {
            this.cargando = false;
        }
    }
}


const firebase = new Firebase();
export default firebase;