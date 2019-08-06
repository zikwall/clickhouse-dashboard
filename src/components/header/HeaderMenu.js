import React from "react";

class HeaderMenu extends React.Component {
    render() {
        return (
            <div id="header-menu-container" className="header-navbar collapse d-lg-flex p-0 bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                <li className="nav-item dropdown">
                                    <a className="nav-link active" data-toggle="dropdown"><i
                                        className="material-icons"></i> Dashboards
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-small">
                                        <a href="/dashboard" className="dropdown-item">Analytics</a>
                                        <a href="/dashboard/store" className="dropdown-item">Store</a>
                                        <a href="/dashboard/blog-overview" className="dropdown-item">Blog</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="/dashboard/icon-sidebar-nav" className="nav-link"><i
                                        className="material-icons"></i> Menu Item</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" data-toggle="dropdown"><i
                                        className="material-icons">view_module</i> Components</a>
                                    <div className="dropdown-menu dropdown-menu-small">
                                        <a href="/dashboard/components-overview" className="dropdown-item">Overview</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="/dashboard/datatables" className="nav-link"><i
                                        className="material-icons"></i> Table</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" data-toggle="dropdown"><i
                                        className="material-icons"></i> User Account</a>
                                    <div className="dropdown-menu dropdown-menu-small">
                                        <a href="/auth" className="dropdown-item">Login</a>
                                        <a href="/auth/signup" className="dropdown-item">Register</a>
                                        <a href="/auth/forgot-password" className="dropdown-item">Forgot Password :)</a>
                                        <a href="/profile/change-password" className="dropdown-item">Change Password</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="?page=error" className="nav-link"><i
                                        className="material-icons">error</i> Error</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMenu;
