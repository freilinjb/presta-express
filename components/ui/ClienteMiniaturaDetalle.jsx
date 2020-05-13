import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const ClienteMiniaturaDetalle = ({cliente}) => {

    const {nombre, apellido, correo, telefono, creado, observacion, urlFoto} = cliente;
    return ( 
        <>
	                    <tbody>
	                        <tr>
	                            <td>
	                                <div className="m-r-10">
                                        <img src={urlFoto} className="rounded-circle" alt="Foto"/>
                                    </div>
	                            </td>
	                            <td><p>{nombre + ' ' + apellido}</p></td>
	                            <td>
	                                {/* <div className="avatar-group">
	                                    <span><a href="#"><i className="fab fa-fw fa-facebook-square facebook-color"></i></a></span>
	                                    <span><a href="#"><i className="fab fa-fw fa-twitter-square twitter-color"></i></a></span>
	                                    <span><a href="#"><i className="fab fa-fw fa-instagram instagram-color"></i></a></span>
	                                    <span><a href="#"><i className="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
	                                </div> */}
                                    <p><a href={`tel:1+${telefono}`}>{telefono}</a></p>
	                            </td>
	                            <td>
                                    <p><a href={`mailto:${correo}`}>{correo}</a></p>
                                </td>
								<td>
								<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs"><span className="far fa-edit"></span></button></p></td>
    							<td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs"><span className="fas fa-trash-alt"></span></button></p></td>
								</td>
	                        </tr>
	                    </tbody>
						<style jsx>{`
							img {
								width:60px;
								heigth:60px;
							}
						`}</style>
	                
        </>
     );
}
 
export default ClienteMiniaturaDetalle;