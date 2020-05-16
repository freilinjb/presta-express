import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../firebase'; 
import useAutenticacion from './useAutenticacion';

const usePrestamo = orden => {

    const {firebase} = useContext(FirebaseContext);

    const usuario = useAutenticacion();

    async function joinsCollectionsHandler() {
      if(usuario) {
      const { uid} = usuario;
      const clientesColleccion = await firebase.db.collection("Clientes").where("creador.id", "==", uid).get();
      const clientes = clientesColleccion.docs.map(doc => doc.data());
    
      const prestamosColleccio = await firebase.db.collection("Prestamos").where("creador.id", "==", uid).get();
      const prestamos = prestamosColleccio.docs.map(doc => doc.data());
    
        const data = clientes.map(bin => {
        const { id } = bin;
        const det = prestamos.filter(
          doc => doc.cliente.id === id
        );
        return { bin };
      });
      let unique = [...new Set(data)];


      // console.log(clientes);
      // console.log(prestamos);
      }
    }



    return {
      joinsCollectionsHandler
    }
}

export default usePrestamo;

//Se copio todo el codigo desde index y se agrergaron los hooks arriba
//Y funciono todo bien
