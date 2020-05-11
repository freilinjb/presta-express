import App,{useState, useEffect} from 'next/app';
import firebase, { FirebaseContext} from '../firebase'
import useAutenticacion from '../hooks/useAutenticacion';

const MyApp = (props) => {
    
    const usuario = useAutenticacion();
    

    
    //Component: es el componente actual
    //pageProps: son los props de la pagina
   
    const {Component, pageProps } = props; 
    return(
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <Component {...pageProps}/>
        </FirebaseContext.Provider>
    )
}

export default MyApp;