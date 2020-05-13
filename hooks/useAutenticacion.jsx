import React,{useEffect, useState} from 'react';
import firebase from '../firebase';

function useAutenticacion() {
    const [ usuarioAutenticado, setUsuarioAutenticado] = useState(null);
    
    useEffect(() => {
        firebase.cargando = true;
        //Verifica si alguien inicio sesion y guarda la sesion
        //Y la libreria de firebase hace todo por nosotros de guardar la sesion del usuario
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if(user) {
                setUsuarioAutenticado(user);
            } else {
                setUsuarioAutenticado(null);
            }
        });
        firebase.cargando = false;

        return () => unsuscribe();
    },[]);
    return usuarioAutenticado;
}
export default useAutenticacion;
