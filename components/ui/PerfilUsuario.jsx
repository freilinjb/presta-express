import React from "react";

const RerfilCliente = ({ usuario, parametrosNegocios }) => {
  return (
    <>
      {usuario ? (
        <>

            <div className="">
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
                        src={`${
                          parametrosNegocios[0].urlLogo
                            ? parametrosNegocios[0].urlLogo
                            : "/static/assets/images/avatar-1.jpg"
                        }`}
                        alt="User Avatar"
                        className="rounded-circle user-avatar-xxl"
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="font-24 mb-0">
                      <p>
                        <strong>Nombre de usuario</strong>
                      </p>
                      {usuario.displayName}
                    </h3>
                    {parametrosNegocios[0].nombreEmpresa && (
                      <>
                        <p className="border-top mt-3">
                          <strong>Nombre comercial</strong>
                        </p>{" "}
                        <h1> ({parametrosNegocios[0].nombreEmpresa}) </h1>
                      </>
                    )}
                    {parametrosNegocios[0].eslogan && (
                      <p>
                        <strong>Eslogan</strong>
                        <br /> ({parametrosNegocios[0].eslogan})
                      </p>
                    )}
                  </div>
                </div>
                <div className="card-body border-top">
                  <h3 className="font-16">Informacion de contacto </h3>
                  <div className="">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <i className="fas fa-fw fa-envelope mr-2"></i>
                        {parametrosNegocios[0].Contacto.correo}
                      </li>
                      <li className="mb-0">
                        <i className="fas fa-fw fa-phone mr-2"></i>
                        {parametrosNegocios[0].Contacto.telefono1}
                      </li>
                      <li className="mb-0">
                        <i className="fas fa-fw fa-phone mr-2"></i>
                        {parametrosNegocios[0].Contacto.telefono2}
                      </li>
                      <li className="mb-0">
                        <i className="fas fa-mobile fa-phone mr-2"></i>
                        {parametrosNegocios[0].Contacto.celular}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card-body border-top">
                  <h3 className="font-16">Informacion de geografica </h3>
                  <div className="">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <i className="fas fa-map-marker fa-envelope mr-2"></i>
                        {parametrosNegocios[0].Direccion.ciudad}
                      </li>
                      <li className="mb-0">
                        <i className=" fas fa-map-signs fa-phone mr-2"></i>
                        {parametrosNegocios[0].Direccion.sector}
                      </li>
                      <li className="mb-0">
                        <i className="fas fa-map fa-phone mr-2"></i>
                        {parametrosNegocios[0].Direccion.direccion}
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
