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
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="false"
            >
              Tab Title #1
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Tab Title #2
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active show"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="true"
            >
              Tab Title #3
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
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
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <h3>Tab Content Heading</h3>
            <p>
              Nullam et tellus ac ligula condimentum sodales. Aenean tincidunt
              viverra suscipit. Maecenas id molestie est, a commodo nisi.
              Quisque fringilla turpis nec elit eleifend vestibulum. Aliquam sed
              purus in odio ullamcorper congue consectetur in neque. Aenean sem
              ex, tempor et auctor sed, congue id neque.{" "}
            </p>
          </div>
          <div
            className="tab-pane fade active show"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
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
