import React from 'react';
import Head from 'next/head'
import {NextScript, Main } from 'next/document';
const HeadDataTable = () => {
    return ( 
        <Head>
            {/* <link href="/static/assets/vendor/fonts/circular-std/style.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="/static/assets/vendor/fonts/fontawesome/css/fontawesome-all.css"/>
            <link rel="stylesheet" type="text/css" href="/static/assets/vendor/datatables/css/dataTables.bootstrap4.css"/>
            <link rel="stylesheet" type="text/css" href="/static/assets/vendor/datatables/css/buttons.bootstrap4.css"/>
            <link rel="stylesheet" type="text/css" href="/static/assets/vendor/datatables/css/select.bootstrap4.css"/>
            <link rel="stylesheet" type="text/css" href="/static/assets/vendor/datatables/css/fixedHeader.bootstrap4.css"></link> */}
            <Main>
                <NextScript/>
                
                <script src="/static/assets/vendor/slimscroll/jquery.slimscroll.js"></script>
                <script src="/static/assets/vendor/multi-select/js/jquery.multi-select.js"></script>
                <script src="/static/assets/libs/js/main-js.js"></script>
                <script src="https:/cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
                <script src="/static/assets/vendor/datatables/js/dataTables.bootstrap4.min.js"></script>
                <script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
                <script src="/static/assets/vendor/datatables/js/buttons.bootstrap4.min.js"></script>
                <script src="/static/assets/vendor/datatables/js/data-table.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
                <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
                <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
                <script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
                <script src="https://cdn.datatables.net/rowgroup/1.0.4/js/dataTables.rowGroup.min.js"></script>
                <script src="https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js"></script>
                <script src="https://cdn.datatables.net/fixedheader/3.1.5/js/dataTables.fixedHeader.min.js"></script>
            </Main>
        </Head>
     );
}
 
export default HeadDataTable;