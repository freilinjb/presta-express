import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const ClienteMiniaturaDetalle = ({cliente}) => {

    const {nombre, apellido, img, creado, sector} = cliente;
    return ( 
        <>
        <div className="chat-module-body">
            <div className="media chat-item">
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
                            <a className="chat-item-author">William</a>
                        </Link>
                        <span>{formatDistanceToNow(new Date(creado), {locale: es})}</span>
                    </div>
                    <div className="chat-item-body">
                        <p>Hey guys, Phasellus imperdiet arcu venenatis, malesuada nulla a, porta sem. Curabitur nec massa ultrices, consequat erat sit amet, luctus justo. Brand Concept &amp; Design!</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ClienteMiniaturaDetalle;