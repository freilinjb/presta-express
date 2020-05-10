import React from "react";

const Notificacion = () => {
  return (
    <>
      <li className="nav-item dropdown notification">
        <a
          className="nav-link nav-icons"
          href="#!"
          id="navbarDropdownMenuLink1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-fw fa-bell"></i>{" "}
          <span className="indicator"></span>
        </a>
        <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
          <li>
            <div className="notification-title"> Notification</div>
            <div className="notification-list">
              <div className="list-group">
                <a
                  href="#!"
                  className="list-group-item list-group-item-action active"
                >
                  <div className="notification-info">
                    <div className="notification-list-user-img">
                      <img
                        src="../assets/images/avatar-2.jpg"
                        alt=""
                        className="user-avatar-md rounded-circle"
                      />
                    </div>
                    <div className="notification-list-user-block">
                      <span className="notification-list-user-name">
                        Jeremy Rakestraw
                      </span>
                      accepted your invitation to join the team.
                      <div className="notification-date">2 min ago</div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="list-group-item list-group-item-action">
                  <div className="notification-info">
                    <div className="notification-list-user-img">
                      <img
                        src="../assets/images/avatar-3.jpg"
                        alt=""
                        className="user-avatar-md rounded-circle"
                      />
                    </div>
                    <div className="notification-list-user-block">
                      <span className="notification-list-user-name">
                        John Abraham
                      </span>
                      is now following you
                      <div className="notification-date">2 days ago</div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="list-group-item list-group-item-action">
                  <div className="notification-info">
                    <div className="notification-list-user-img">
                      <img
                        src="../assets/images/avatar-4.jpg"
                        alt=""
                        className="user-avatar-md rounded-circle"
                      />
                    </div>
                    <div className="notification-list-user-block">
                      <span className="notification-list-user-name">
                        Monaan Pechi
                      </span>{" "}
                      is watching your main repository
                      <div className="notification-date">2 min ago</div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="list-group-item list-group-item-action">
                  <div className="notification-info">
                    <div className="notification-list-user-img">
                      <img
                        src="../assets/images/avatar-5.jpg"
                        alt=""
                        className="user-avatar-md rounded-circle"
                      />
                    </div>
                    <div className="notification-list-user-block">
                      <span className="notification-list-user-name">
                        Jessica Caruso
                      </span>
                      accepted your invitation to join the team.
                      <div className="notification-date">2 min ago</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="list-footer">
              {" "}
              <a href="#!">View all notifications</a>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Notificacion;
