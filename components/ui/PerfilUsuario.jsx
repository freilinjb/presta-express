import React from "react";

const RerfilCliente = ({usuario, parametrosNegocios}) => {

  return (

    <>
    {usuario ? (
      <>
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card">
        <div className="card-body">
          <div className="user-avatar text-center d-block">
            {parametrosNegocios.urlFoto ? (
              <img
                src={parametrosNegocios.urlFoto}
                alt="User Avatar"
                className="rounded-circle user-avatar-xxl"
              />
            ) : (
              <img
                src={`${parametrosNegocios[0].urlLogo ? parametrosNegocios[0].urlLogo : "/static/assets/images/avatar-1.jpg" }`}
                alt="User Avatar"
                className="rounded-circle user-avatar-xxl"
              />
            )}
          </div>
          <div className="text-center">
            <h2 className="font-24 mb-0">
              {usuario.displayName}
            </h2>
            {parametrosNegocios.eslogan && <p>Alias ({parametrosNegocios.eslogan})</p>}
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Informacion del Cliente </h3>
          <div className="">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="fas fa-fw fa-envelope mr-2"></i>
                {parametrosNegocios.eslogan}
              </li>
              <li className="mb-0">
                <i className="fas fa-fw fa-phone mr-2"></i>
                {parametrosNegocios.eslogan}
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body border-top">
          
          <h3 className="font-16">Rating</h3>
          <h1 className="">0</h1>
          <div className="rating-star">
            <i className="fa fa-fw fa-star"></i>
            <i className="fa fa-fw fa-star"></i>
            <i className="fa fa-fw fa-star"></i>
            <i className="fa fa-fw fa-star"></i>
          </div>
        </div>
        <div className="card-body border-top">
          <h3 className="font-16">Observacion</h3>
          <div>
            <p>{parametrosNegocios.eslogan}</p>
          </div>
        </div>
      </div>
    </div>
      </>
    ) : null}
    </>
  );
};

export default RerfilCliente;
