import React from 'react';

const Busqueda = (props) => {
    return ( 
        <>
        <form
            noValidate
            onSubmit={props.handleSubmit}
        >
            <div className="input-group input-group-round">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
                <input type="search" className="form-control filter-list-input" placeholder="Search chat" aria-label="Search Chat"/>
            </div>
        </form>
        </>
     );
}
 
export default Busqueda;