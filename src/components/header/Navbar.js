import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div className="main-navbar bg-white">
                <div className="container p-0">
                    <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                        <a className="navbar-brand" href="#" style={{ lineHeight: "25px" }}>
                            <div className="d-table m-auto">
                                <img id="main-logo" className="d-inline-block align-top mr-1 ml-3"
                                     style={{maxWidth: "25px"}} src={require("./../../assets/images/shards-dashboards-logo.svg")}
                                     alt="Shards Dashboard"
                                />
                                <span className="d-none d-md-inline ml-1">ClickHouse Analitycs</span>
                            </div>
                        </a>
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
                        <ul className="navbar-nav border-left flex-row border-right ml-auto">
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#"
                                   role="button" aria-haspopup="true" aria-expanded="false">
                                    <img className="user-avatar rounded-circle mr-2" src={require("./../../assets/images/avatars/0.jpg")}
                                         alt="User Avatar"
                                    />
                                    <span className="d-none d-md-inline-block">Sierra Brooks</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-small">
                                    <a className="dropdown-item" href="/profile"><i
                                        className="material-icons"></i> Profile
                                    </a>
                                    <a className="dropdown-item" href="/profile/edit"><i
                                        className="material-icons"></i> Edit Profile
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item text-danger" href="#">
                                        <i className="material-icons text-danger"></i> Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <nav className="nav">
                            <a href="#"
                               className="nav-link nav-link-icon toggle-sidebar  d-inline d-lg-none text-center"
                               data-toggle="collapse" data-target=".header-navbar" aria-expanded="false"
                               aria-controls="header-navbar">
                                <i className="material-icons"></i>
                            </a>
                        </nav>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
