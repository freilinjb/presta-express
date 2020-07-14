import React from "react";

import Hipotecaria from "../../ui/Formularios/Hipotecaria";
import Vehiculo from "../../ui/Formularios/Vehiculo";
import Solidario from "./Solidario";

const clickVentana = (e) => {
  console.log("Valores del click", "=>", e);
};

const Garantias = ({ garantiasTemporales, setGarantiasTemporales }) => {
  return (
    <>
      <div className="tab-regular">
        <ul
          className="nav nav-tabs "
          id="myTab"
          role="tablist"
          onClick={clickVentana}
        >
          <li className="nav-item">
            <a
              className="nav-link"
              id="solidaria-tab"
              data-toggle="tab"
              href="#solidaria"
              role="tab"
              aria-controls="solidaria"
              aria-selected="false"
            >
              Solidaria
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link show active"
              id="vehiculo-tab"
              data-toggle="tab"
              href="#vehiculo"
              role="tab"
              aria-controls="vehiculo"
              aria-selected="true"
            >
              Vehiculo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="hipotecaria-tab"
              data-toggle="tab"
              href="#hipotecaria"
              role="tab"
              aria-controls="hipotecaria"
              aria-selected="false"
            >
              Hipotecaria
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="documentos-tab"
              data-toggle="tab"
              href="#documentos"
              role="tab"
              aria-controls="documentos"
              aria-selected="false"
            >
              Adjuntar documentos
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <Solidario
            setGarantiasTemporales={setGarantiasTemporales}
            garantiasTemporales={garantiasTemporales}
          />
          <Vehiculo
            setGarantiasTemporales={setGarantiasTemporales}
            garantiasTemporales={garantiasTemporales}
          />
          <Hipotecaria
            setGarantiasTemporales={setGarantiasTemporales}
            garantiasTemporales={garantiasTemporales}
          />
          {/* <div
            className="tab-pane fade active show"
            id="hipotecaria"
            role="tabpanel"
            aria-labelledby="hipotecaria-tab"
          >
            <h3>Tab Heading Content </h3>
            <p>
              Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu
              sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex
              ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros
              pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus
              scelerisque risus, a commodo mi tempus eu.
            </p>
          </div> */}

          {/* <div
            className="tab-pane fade"
            id="documentos"
            role="tabpanel"
            aria-labelledby="documentos-tab"
          >
            <h3>Tab Heading Content </h3>
            <p>
              Vivamus pellentesque vestibulum lectus vitae auctor. Maecenas eu
              sodales arcu. Fusce lobortis, libero ac cursus feugiat, nibh ex
              ultricies tortor, id dictum massa nisl ac nisi. Fusce a eros
              pellentesque, ultricies urna nec, consectetur dolor. Nam dapibus
              scelerisque risus, a commodo mi tempus eu.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Garantias;
