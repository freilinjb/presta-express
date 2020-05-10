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

    }

    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);
        
        // Para actualizar el nombre del usuario creado
        return await nuevoUsuario.user.updateProfile({
            displayName: nombre
        });
        console.log(nuevoUsuario);
        
    }

    //todo Iniciar sesion del usuario
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    //todo Cierra la sesion del usuario
    async cerrarSesion() {
        await this.auth.signOut();
    }
}


const firebase = new Firebase();
export default firebase;