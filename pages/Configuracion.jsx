import React, { useEffect, useContext, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { FirebaseContext } from "../firebase";
import Layout from "../components/layout/Layout";
import Error404 from "../components/layout/Error404";
import Navegacion from "../components/layout/Navegacion";
import Spinner from "../components/ui/Spinner";
import PerfilUsuario from "../components/ui/PerfilUsuario";
import EdicarConfiguracionUsuario from "../components/ui/EdicarConfiguracionUsuario";
import EdicarParametrosPrestamos from "../components/ui/EdicarParametrosPrestamos";

import useParametrosUsuario from "../hooks/useParametrosUsuario";

const Configuracion = () => {
  const { firebase, usuario } = useContext(FirebaseContext);

  const { parametrosNegocios } = useParametrosUsuario();

  console.log(parametrosNegocios[0]);
  console.log("usuario:", usuario);

  return (
    <Layout>
      <Navegacion>
        {firebase.cargando ? (
          <Spinner className="spinner" />
        ) : (
          <>
            <div className="row justify-content-center">
            {usuario && parametrosNegocios.length > 0 && (
                    <PerfilUsuario
                      parametrosNegocios={parametrosNegocios}
                      usuario={usuario}
                    />
                  )}
              <div className="tab-regular col-lg-6 col-sm-12">
                <ul className="nav nav-tabs " id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      id="informacionGeneral-tab"
                      data-toggle="tab"
                      href="#informacionGeneral"
                      role="tab"
                      aria-controls="informacionGeneral"
                      aria-selected="true"
                    >
                      Configuracion General
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="parametrosConfiguracion-tab"
                      data-toggle="tab"
                      href="#parametrosConfiguracion"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Parametros de Configuracion
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent ">

                  {usuario && parametrosNegocios.length > 0 && (
                    <EdicarConfiguracionUsuario
                      parametrosNegocios={parametrosNegocios}
                    />
                  )}
                  {usuario && parametrosNegocios.length > 0 && (
                    <EdicarParametrosPrestamos
                      parametrosNegocios={parametrosNegocios}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Navegacion>
    </Layout>
  );
};

export default Configuracion;
