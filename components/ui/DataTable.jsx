import React from 'react';

const DataTable = () => {
    return ( 
        <>
            <div className="row">
                    {/* <!-- ============================================================== --> */}
                    {/* <!-- data table  --> */}
                    {/* <!-- ============================================================== --> */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Tablas de datos: botones de impresión, Excel, CSV, PDF</h5>
                                <p>Este ejemplo muestra DataTables y la extensión Buttons que se usa con el marco Bootstrap 4 que proporciona el estilo.</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"><div className="dt-buttons">          <button className="btn btn-outline-light buttons-copy buttons-html5" tabindex="0" aria-controls="example" type="button"><span>  Copiar    </span></button> <button className="btn btn-outline-light buttons-excel buttons-html5" tabindex="0" aria-controls="example" type="button"><span>  Sobresalir    </span></button> <button className="btn btn-outline-light buttons-pdf buttons-html5" tabindex="0" aria-controls="example" type="button"><span>  PDF    </span></button> <button className="btn btn-outline-light buttons-print" tabindex="0" aria-controls="example" type="button"><span>  Impresión    </span></button> <button className="btn btn-outline-light buttons-collection dropdown-toggle buttons-colvis" tabindex="0" aria-controls="example" type="button" aria-haspopup="true"><span>  Visibilidad de la columna    </span></button> </div></div><div className="col-sm-12 col-md-6"><div id="example_filter" className="dataTables_filter"><label>  Buscar:    <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="example"/></label></div></div></div><div className="row"><div className="col-sm-12"><table id="example" className="table table-striped table-bordered second dataTable" role="grid" aria-describedby="example_info">
                                        <thead>
                                            <tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Nombre: activar para ordenar la columna descendente">  Nombre    </th><th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Posición: activar para ordenar la columna ascendente"   >  Posición    </th><th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Oficina: active para ordenar la columna ascendente">  Oficina    </th><th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Edad: activar para ordenar la columna ascendente">  Años    </th><th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Fecha de inicio: active para ordenar la columna ascendente" >  Fecha de inicio    </th><th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Salario: activar para ordenar la columna ascendente">  Salario    </th></tr>
                                        </thead>
                                        <tbody>
                                        <tr role="row" className="odd">
                                                <td className="sorting_1">  Airi Satou    </td>
                                                <td>  Contador    </td>
                                                <td>  Tokio    </td>
                                                <td>  33    </td>
                                                <td>  2008/11/28    </td>
                                                <td>  $ 162,700    </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">  Angelica Ramos    </td>
                                                <td>  Director Ejecutivo (CEO)    </td>
                                                <td>  Londres    </td>
                                                <td>  47    </td>
                                                <td>  2009/10/09    </td>
                                                <td>  $ 1,200,000    </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">  Ashton Cox    </td>
                                                <td>  Autor técnico junior    </td>
                                                <td>  San Francisco    </td>
                                                <td>  66    </td>
                                                <td>  12/01/2009    </td>
                                                <td>  $ 86,000    </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">  Bradley Greer    </td>
                                                <td>  Ingeniero de software    </td>
                                                <td>  Londres    </td>
                                                <td>  41    </td>
                                                <td>  13/10/2012    </td>
                                                <td>  $ 132,000    </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">  Brenden Wagner    </td>
                                                <td>  Ingeniero de software    </td>
                                                <td>  San Francisco    </td>
                                                <td>  28    </td>
                                                <td>  07/06/2011    </td>
                                                <td>  $ 206,850    </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">  Brielle Williamson    </td>
                                                <td>  Especialista en integración    </td>
                                                <td>  Nueva York    </td>
                                                <td>  61    </td>
                                                <td>  02/12/2012    </td>
                                                <td>  $ 372,000    </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">  Bruno Nash    </td>
                                                <td>  Ingeniero de software    </td>
                                                <td>  Londres    </td>
                                                <td>  38    </td>
                                                <td>  03/05/2011    </td>
                                                <td>  $ 163,500    </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">  César Vance    </td>
                                                <td>  Soporte de preventa    </td>
                                                <td>  Nueva York    </td>
                                                <td>  21    </td>
                                                <td>  12/12/2011    </td>
                                                <td>  $ 106,450    </td>
                                            </tr><tr role="row" className="odd">
                                                <td className="sorting_1">  Cara Stevens    </td>
                                                <td>  Asistente de ventas    </td>
                                                <td>  Nueva York    </td>
                                                <td>  46    </td>
                                                <td>  06/12/2011    </td>
                                                <td>  $ 145,600    </td>
                                            </tr><tr role="row" className="even">
                                                <td className="sorting_1">  Cedric Kelly    </td>
                                                <td>  Desarrollador Javascript Senior    </td>
                                                <td>  Edimburgo    </td>
                                                <td>  22    </td>
                                                <td>  29/03/2012    </td>
                                                <td>  $ 433,060    </td>
                                            </tr></tbody>
                                        <tfoot>
                                            <tr><th rowspan="1" colspan="1">  Nombre    </th><th rowspan="1" colspan="1">  Posición    </th><th rowspan="1" colspan="1">  Oficina    </th><th rowspan="1" colspan="1">  Años    </th><th rowspan="1" colspan="1">  Fecha de inicio    </th><th rowspan="1" colspan="1">  Salario    </th></tr>
                                        </tfoot>
                                    </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="example_info" role="status" aria-live="polite">  Mostrando desde 1 hasta 10 de 57 registros    </div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="example_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="example_previous"><a href="#" aria-controls="example" data-dt-idx="0" tabindex="0" className="page-link">  Anterior    </a></li><li className="paginate_button page-item active"><a href="#" aria-controls="example" data-dt-idx="1" tabindex="0" className="page-link">  1    </a></li><li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx="2" tabindex="0" className="page-link">  2    </a></li><li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx="3" tabindex="0" className="page-link">  3    </a></li><li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx="4" tabindex="0" className="page-link">  4 4    </a></li><li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx="5" tabindex="0" className="page-link">  5 5    </a></li><li className="paginate_button page-item "><a href="#" aria-controls="example" data-dt-idx="6" tabindex="0" className="page-link">  6 6    </a></li><li className="paginate_button page-item next" id="example_next"><a href="#" aria-controls="example" data-dt-idx="7" tabindex="0" className="page-link">  próximo    </a></li></ul></div></div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== --> */}
                    {/* <!-- end data table  --> */}
                    {/* <!-- ============================================================== --> */}
                </div>
        </>
     );
}
 
export default DataTable;