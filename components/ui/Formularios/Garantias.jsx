import React from "react";

import Hipotecaria from "../../ui/Formularios/Hipotecaria";
import Vehiculo from "../../ui/Formularios/Vehiculo";

const Garantias = () => {
  return (
    <>
      <div className="tab-regular">
        <ul className="nav nav-tabs " id="myTab" role="tablist">
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
              className="nav-link"
              id="vehiculo-tab"
              data-toggle="tab"
              href="#vehiculo"
              role="tab"
              aria-controls="vehiculo"
              aria-selected="false"
            >
              Vehiculo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active show"
              id="hipotecaria-tab"
              data-toggle="tab"
              href="#hipotecaria"
              role="tab"
              aria-controls="hipotecaria"
              aria-selected="true"
            >
              Hipotecaria
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade"
            id="solidaria"
            role="tabpanel"
            aria-labelledby="solidaria-tab"
          >
            <p className="lead">
              {" "}
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.{" "}
            </p>
            <p>
              Phasellus non ante gravida, ultricies neque a, fermentum leo.
              Etiam ornare enim arcu, at venenatis odio mollis quis. Mauris
              fermentum elementum ligula in efficitur. Aliquam id congue lorem.
              Proin consectetur feugiasse platea dictumst. Pellentesque sed
              justo aliquet, posuere sem nec, elementum ante.
            </p>
            <a href="#" className="btn btn-secondary">
              Go somewhere
            </a>
          </div>
          
          <Vehiculo/>


          <div
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Garantias;
