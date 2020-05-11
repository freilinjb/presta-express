import React from 'react';

const ListaSectores = () => {
    return ( 
        <>
            <div class="dashboard-short-list">
                    <div class="row">
                        {/* <!-- ============================================================== --> */}
                        {/* <!-- shortable list  --> */}
                        {/* <!-- ============================================================== --> */}
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 co-12">
                            <section class="card card-fluid">
                                <h5 class="card-header drag-handle"> Shortable List </h5>
                                <ul class="sortable-lists list-group list-group-flush list-group-bordered" id="items">
                                    {/* lista sector */}
                                </ul>
                            </section>
                        </div>
                    </div>
                    {/* <!-- ============================================================== --> */}
                    {/* <!-- end nestable list  --> */}
                    {/* <!-- ============================================================== --> */}
                </div>
        </>
     );
}
 
export default ListaSectores;