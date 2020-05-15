import App,{useState, useEffect} from 'next/app';
import Router from 'next/router';
import NextNprogress from 'nextjs-progressbar';
import firebase, { FirebaseContext} from '../firebase'
import useAutenticacion from '../hooks/useAutenticacion';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const MyApp = (props) => {
    
    const usuario = useAutenticacion();
    
    const options = {
        timeout: 5000,
        transition: 'scale',
        color: 'white',
        position: positions.BOTTOM_CENTER,
        offset: '30px',
        
      };
    
    //Component: es el componente actual
    //pageProps: son los props de la pagina
   
    const {Component, pageProps } = props; 
    return(
        <Provider template={AlertTemplate} {...options}>
            <FirebaseContext.Provider
                value={{
                    firebase,
                    usuario
                }}
            >
                <NextNprogress
                        color="#000"
                />
                <Component {...pageProps}/>
            </FirebaseContext.Provider>
        </Provider>
    )
}

export default MyApp;