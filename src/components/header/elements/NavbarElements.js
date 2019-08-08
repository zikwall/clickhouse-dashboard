import React from 'react';
import AuthService from "../../../services/auth/AuthService";
import Identity from "../../../services/auth/Identity";

const Brand = () => {
    return  (
        <a className="navbar-brand" href="/" style={{ lineHeight: "35px" }}>
            <div className="d-table m-auto">

                    <img id="main-logo" className="d-inline-block align-top mr-1 ml-3"
                         style={{maxWidth: "35px"}} src={require("./../../../assets/images/logo.png")}
                         alt="Shards Dashboard"
                    />

                <span className="d-none d-md-inline ml-1">ClickHouse Analitycs</span>
            </div>
        </a>
    );
};

const SearchPanel = () => {
    return (
        <form action="#" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
            <div className="input-group input-group-seamless ml-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <input className="navbar-search form-control" type="text"
                       placeholder="Search for something..." aria-label="Search"
                />
            </div>
        </form>
    );
};

const Notification = () => {
    return (
        <li className="nav-item border-right dropdown notifications">
            <a className="nav-link nav-link-icon text-center" href="#" role="button"
               id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false">
                <div className="nav-link-icon__wrapper">
                    <i className="material-icons"></i>
                    <span className="badge badge-pill badge-danger">2</span>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                    <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                            <i className="material-icons"></i>
                        </div>
                    </div>
                    <div className="notification__content">
                        <span className="notification__category">Analytics</span>
                        <p>Your website’s active users count increased by <span
                            className="text-success text-semibold">28%</span> in the last week.
                            Great job!
                        </p>
                    </div>
                </a>
                <a className="dropdown-item" href="#">
                    <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                            <i className="material-icons"></i>
                        </div>
                    </div>
                    <div className="notification__content">
                        <span className="notification__category">Sales</span>
                        <p>Last week your store’s sales count decreased by <span
                            className="text-danger text-semibold">5.52%</span>. It could have been
                            worse!
                        </p>
                    </div>
                </a>
                <a className="dropdown-item notification__all text-center" href="#"> View all
                    Notifications
                </a>
            </div>
        </li>
    );
};

const ProfileMenu = (props) => {
    const logout = (e) => {
        const { history } = props;

        e.preventDefault();
        Identity.logout();
        history.replace("/auth/login");
    };

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#"
               role="button" aria-haspopup="true" aria-expanded="false">
                <img className="user-avatar rounded-circle mr-2" src={require("./../../../assets/images/avatars/vk.jpeg")}
                     alt="User Avatar"
                />
                <span className="d-none d-md-inline-block">{ Identity.getUser().field('username') }</span>
            </a>
            <div className="dropdown-menu dropdown-menu-small">
                <a className="dropdown-item" href="/profile"><i
                    className="material-icons"></i> Profile
                </a>
                <a className="dropdown-item" href="/profile/edit"><i
                    className="material-icons"></i> Edit Profile
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" onClick={ logout }>
                    <i className="material-icons text-danger"></i> Logout
                </a>
            </div>
        </li>
    );
};

export {
    Brand, SearchPanel, Notification, ProfileMenu
};
