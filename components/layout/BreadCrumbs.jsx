import React from 'react';

const BreadCrumbs = (props) => {
    // let direccion = {
    //     link: [],
    //     mensaje: ['DA']
    // }
    return ( 
        <>
            <div className="breadcrumbs">
                <div className="breadcrumbs-inner">
                    <div className="row m-0">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>props.titulo</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li><a href="#">Dashboard</a></li>
                                        <li><a href="#">UI Elements</a></li>
                                        <li className="active">Alerts</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BreadCrumbs;