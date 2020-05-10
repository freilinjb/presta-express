import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Navegacion from './Navegacion';

const Layout = (props) => {
    function Componente(props) {
        return (
          props.children
        );
      }
    return ( 
        <>
                <Head>
                    {/* <!-- Required meta tags --> */}
                    
                    
                </Head>
                    
                    <div className="dashboard-main-wrapper">
                        <Header/>

                        

                        {props.navegacion ? (
                            <>
                            <Navegacion/>
                            
                            <div className="dashboard-wrapper">
                                <div className="container-fluid dashboard-content">
                                    {props.children}
                                </div>
                            </div>
                            </>
                        ) : 
                        
                        (
                            <Componente>{props.children}</Componente>
                        )}
                            
                            

                    </div>
                        {/* <!-- Optional JavaScript --> */}
                        
        </>
     );
}
 
export default Layout;