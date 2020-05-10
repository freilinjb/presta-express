import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config';

class Firebase {

    constructor() {
        if(!app.apps.length) {
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
            
            const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);
            
            this.cargando = true;
            // Para actualizar el nombre del usuario creado
            return await nuevoUsuario.user.updateProfile({
                displayName: nombre
            });

            console.log(nuevoUsuario);
        } catch (error) {
            console.log(error);
        }
        finally {
            this.cargando = false;
        }
        
    }

    //todo Iniciar sesion del usuario
    async login(email, password) {
        this.cargando = true;
        
        try {
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