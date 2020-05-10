import React from 'react';
import Head from 'next/head';
import Navegacion from './Navegacion';
import BreadCrumbs from './BreadCrumbs';
import Footer from './Footer';
import Header from './Header';



const Layout = (props) => {

    let usuario = true;

    function Autenticacion (props) {
        usuario = false;
        return (<>{props.children}</>);
    }

    function Componente(props) {
        usuario = true;

        return (
            <>
                <Navegacion/>
                <div id="right-panel" className="right-panel">
                    <Header/>
                            
                    <BreadCrumbs/>                
                    <div className="content">
                        <div className="animated fadeIn">
                            {props.children}
                        </div>
                    </div>
                <Footer/>    
            </div>
        </>
        );
      }
    return ( 
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <title>Ela Admin - HTML5 Admin Template</title>
                <meta name="description" content="Ela Admin - HTML5 Admin Template"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png"/>
                <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css"/>
                <link rel="stylesheet" href="/static/assets/css/cs-skin-elastic.css"/>
                <link rel="stylesheet" href="/static/assets/css/style.css"></link>
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'/>
                
            </Head>
            <main>
                {usuario ? <Componente>{props.children}</Componente> : <Autenticacion>{props.children}</Autenticacion> }

                    
                {/* <!-- Scripts --> */}
                <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="/static/assets/js/main.js"></script>
            </main>
        </>
     );
}
 
export default Layout;