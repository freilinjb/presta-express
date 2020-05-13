import App,{useState, useEffect} from 'next/app';
import Router from 'next/router';
import NextNprogress from 'nextjs-progressbar';
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
            <NextNprogress
                    color="#000"
                    startPosition="10"
                    stopDelayMs="200"
                    height="3"
            />
            <Component {...pageProps}/>
        </FirebaseContext.Provider>
    )
}

export default MyApp;