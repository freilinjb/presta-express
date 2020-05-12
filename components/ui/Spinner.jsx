import React from 'react';
import Head from 'next/head';
// import './Spinner.css';

const Spinner = () => {
    return ( 
        <>
        <Head>
            <link rel="stylesheet" href="/static/assets/libs/css/Spinner.css"/>
        </Head>

        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
        </>
     );
}
 
export default Spinner;