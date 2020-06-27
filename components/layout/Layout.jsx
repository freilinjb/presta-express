import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
    
    return ( 
        <>
                <Head>
                    {/* <!-- Required meta tags --> */}
                    {/* <!-- Required meta tags --> */}
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <title>P-EXPRESS - {props.title}</title>
                    {/* <!-- Bootstrap CSS --> */}
                    {/* <link rel="stylesheet" href="/static/assets/vendor/bootstrap/css/bootstrap.min.css"/> */}
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                    <link href="/static/assets/vendor/fonts/circular-std/style.css" rel="stylesheet"/>
                    <link rel="stylesheet" href="/static/assets/libs/css/style.css"/>
                    <link rel="stylesheet" href="/static/assets/vendor/fonts/fontawesome/css/fontawesome-all.css"/>








                    
                </Head>

                    
                    <div className="dashboard-main-wrapper">
                        <Header/>
                            {props.children}
                    </div>

                        {/* <!-- Optional JavaScript --> */}
                        <script src="/static/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
                        <script src="/static/assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
                        <script src="/static/assets/vendor/slimscroll/jquery.slimscroll.js"></script>
                        <script src="/static/assets/libs/js/main-js.js"></script>
                        
        </>
     );
}
 
export default Layout;