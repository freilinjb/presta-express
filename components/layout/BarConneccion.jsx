import React from "react";

const BarCon = () => {
  return (
    <>
      <li className="nav-item dropdown connection">
        <a
          className="nav-link"
          href="#!"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {" "}
          <i className="fas fa-fw fa-th"></i>{" "}
        </a>
        <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
          <li className="connection-list">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                <a href="#!" className="connection-item">
                  <img src="../assets/images/github.png" alt="" />{" "}
                  <span>Github</span>
                </a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                <a href="#!" className="connection-item">
                  <img src="../assets/images/dribbble.png" alt="" />{" "}
                  <span>Dribbble</span>
                </a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                <a href="#!" className="connection-item">
                  <img src="../assets/images/dropbox.png" alt="" />{" "}
                  <span>Dropbox</span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                <a href="#!" className="connection-item">
                  <img src="../assets/images/bitbucket.png" alt="" />{" "}
                  <span>Bitbucket</span>
                </a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                <a href="#!" className="connection-item">
                  <img src="../assets/images/mail_chimp.png" alt="" />
                  <span>Mail chimp</span>
                </a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                <a href="#!" className="connection-item">
                  <img src="../assets/images/slack.png" alt="" />{" "}
                  <span>Slack</span>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="conntection-footer">
              <a href="#!">More</a>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default BarCon;
