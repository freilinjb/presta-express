import React from 'react';

const ResemenPrestamoPerfil = ({detalles}) => {
    console.log('desdes perfil usuaril','=>', detalles);
    console.log(detalles);
    
    return (
        <>
        {detalles && (<h1>{detalles.pendiente} / {detalles.pagados}</h1>)}
        
        {/* <h3>Fecha de Culminacion: {prestamo.detallesCuotas[prestamo.detallesCuotas.length-1].fecha}</h3> */}
        </>
     );
}

export default ResemenPrestamoPerfil;