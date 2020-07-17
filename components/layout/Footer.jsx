import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer m-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              Copyright © 2018 Concept. All rights reserved. Dashboard by{" "}
              <a href="https://colorlib.com/wp/">Colorlib</a>.
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="text-md-right footer-links d-none d-sm-block">
                <a href="#">About</a>
                <a href="#">Support</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
