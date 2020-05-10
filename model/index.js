import {useContext} from 'react';
import { FirebaseContext } from "../firebase";
const { usuario } = useContext(FirebaseContext);

export const cliente = {
    nombre,
    apellido,
    apodo,
    sexo,
    cedula,
    correo,
    telefonos:[],
    calificacion: 0,
    url,
    urlFoto,
    observacion,
    creado: Date.now(),
    creador: {
        id: usuario.uid,
        nombre: usuario.displayName
    }
}