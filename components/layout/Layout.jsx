import React from 'react';
import Head from 'next/head';
import Header from './Header';



const Layout = (props) => {
    return ( 
        <>
                <Head>
                    {/* <!-- Required meta tags --> */}
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <title>Concept - Bootstrap 4 Admin Dashboard Template</title>
                    {/* <!-- Bootstrap CSS --> */}
                    <link rel="stylesheet" href="/static/assets/vendor/bootstrap/css/bootstrap.min.css"/>
                    <link href="/static/assets/vendor/fonts/circular-std/style.css" rel="stylesheet"/>
                    <link rel="stylesheet" href="/static/assets/libs/css/style.css"/>
                    <link rel="stylesheet" href="/static/assets/vendor/fonts/fontawesome/css/fontawesome-all.css"/>
                    
                </Head>
                <body>
                    <Header/>
                    <div className="dashboard-main-wrapper">
                        <main>
                            {props.children}
                        </main>
                    </div>
                        {/* <!-- Optional JavaScript --> */}
                        <script src="/static/assets/vendor/jquery/jquery-3.3.1.min.js"></script>
                        <script src="/static/assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
                        <script src="/static/assets/vendor/slimscroll/jquery.slimscroll.js"></script>
                        <script src="/static/assets/libs/js/main-js.js"></script>
                </body>
        </>
     );
}
 
export default Layout;