import React from 'react';
import Layout from '../components/layout/Layout';
import Navegacion from '../components/layout/Navegacion';
import DataTable from '../components/ui/DataTable';

const Prueba2 = () => {
    return ( 
        <>  
        <Layout>
            <Navegacion>
                <DataTable/>
            </Navegacion>
        </Layout>
        </>
     );
}
 
export default Prueba2;