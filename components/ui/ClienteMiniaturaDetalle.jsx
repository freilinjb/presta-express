import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const ClienteMiniaturaDetalle = ({cliente}) => {

    const {nombre, apellido, correo, telefono, creado, observacion, urlFoto} = cliente;
    return ( 
        <>
        <div className="table-container">
							<table className="table table-filter">
								<tbody>
									<tr data-status="pagado">

										<td>
											<div className="media">
												<a href="#" className="pull-left">
                                                    {urlFoto ? 
                                                    (<img src={urlFoto} className="media-photo rounded-circle"/>)
                                                    :
                                                    (<img src="/static/assets/images/avatar-1.jpg" className="media-photo rounded-circle"/>)
                                                    } 
												</a>
												<div className="media-body">
													<span className="media-meta float-right">{formatDistanceToNow(new Date(creado), {locale: es})}</span>
													<h4 className="title">
														{nombre + ' ' + apellido}

														<span className="pagado float-right">(Pagado)</span>
													</h4>
													<div className="summary">
                                                    <p><strong>Telefono: </strong><a href={`tel:+${telefono}`}>{telefono}</a></p>
                        <p><strong>Correo: </strong><a href={`mailto:${correo}`}>{correo}</a></p>
                                                        {observacion}
                                                        </div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
                            <style jsx>{`
                                    
                                    .table-filter {
                                        background-color: #fff;
                                        border-bottom: 1px solid #eee;
                                        width: 100%;
                                    }
                                    .table-filter tbody tr:hover {
                                        cursor: pointer;
                                        background-color: #eee;
                                    }
                                    .table-filter tbody td {
                                        padding: 10px;
                                        border-top-color: #eee;
                                    }
                                    .table-filter tbody tr.selected td {
                                        background-color: #eee;
                                    }
                                    .table-filter .star:hover {
                                        color: #ccc;
                                    }
                                    .table-filter .media-photo {
                                        width: 50px;
                                        height: 50px;
                                        margin: 5px;
                                    }
                                    .table-filter .media-meta {
                                        font-size: 11px;
                                        color: #999;
                                    }
                                    .table-filter .media .title {
                                        color: #2BBCDE;
                                        font-size: 14px;
                                        font-weight: bold;
                                        line-height: normal;
                                        margin: 0;
                                    }
                                    .table-filter .media .title span {
                                        font-size: .8em;
                                    }
                                    .table-filter .media .title span.pagado {
                                        color: #5cb85c;
                                    }
                                    .table-filter .media .title span.pendiente {
                                        color: #f0ad4e;
                                    }
                                    .table-filter .media .title span.cancelado {
                                        color: #d9534f;
                                    }
                                    .table-filter .media .summary {
                                        font-size: 14px;
                                    }
                                    .summary {
                                        margin: 0;
                                        padding: 0;
                                    }
                                    .float-right {
                                        padding: 5px;
                                    }
                                    `}</style>
						</div>
        </>
     );
}
 
export default ClienteMiniaturaDetalle;