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
                <PerfilUsuario parametrosNegocios={parametrosNegocios} usuario={usuario}/>
              )}

              {usuario && parametrosNegocios.length > 0 && (
                <EdicarConfiguracionUsuario
                  parametrosNegocios={parametrosNegocios}
                />
              )}
            </div>
          </>
        )}
      </Navegacion>
    </Layout>
  );
};

export default Configuracion;
