import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const ClienteMiniaturaDetalle = ({cliente}) => {

    const {nombre, apellido, correo, telefono, creado} = cliente;
    return ( 
        <>
        <div className="chat-module-body">
            <div className="media chat-item border">
                {cliente.img ? 
                (
                    <img alt="William" src={cliente.img} className="rounded-circle user-avatar-lg"/>

                ) : 
                (
                    <img alt="William" src="/static/assets/images/avatar-1.jpg" className="rounded-circle user-avatar-lg"/>
                )}
                
                <div className="media-body">
                    <div className="chat-item-title">
                        <Link href="/editar/CLiente">
                            <a className="chat-item-author"><strong>{nombre + ' ' + apellido}</strong></a>
                        </Link>
                        <span>{formatDistanceToNow(new Date(creado), {locale: es})}</span>
                    </div>
                    <div className="chat-item-body">
                        
                        <p><strong>Telefono: </strong><a href={`tel:+${telefono}`}>{telefono}</a></p>
                        <p><strong>Correo: </strong><a href={correo}>{correo}</a></p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ClienteMiniaturaDetalle;