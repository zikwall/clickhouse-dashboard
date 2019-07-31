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
                                        className="material-icons"></i> Dashboards</a>
                                    <div className="dropdown-menu dropdown-menu-small">
                                        <a href="?page=dashboard" className="dropdown-item">Analytics</a>
                                        <a href="?page=store" className="dropdown-item">Store</a>
                                        <a href="?page=blog-overview" className="dropdown-item">Blog</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="?page=icon-sidebar-nav" className="nav-link"><i
                                        className="material-icons"></i> Menu Item</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" data-toggle="dropdown"><i
                                        className="material-icons">view_module</i> Components</a>
                                    <div className="dropdown-menu dropdown-menu-small">
                                        <a href="?page=components-overview" className="dropdown-item">Overview</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="?page=table&datatable=1" className="nav-link"><i
                                        className="material-icons"></i> Table</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" data-toggle="dropdown"><i
                                        className="material-icons"></i> User Account</a>
                                    <div className="dropdown-menu dropdown-menu-small">
                                        <a href="?page=login&layout=auth" className="dropdown-item">Login</a>
                                        <a href="?page=signup&layout=auth" className="dropdown-item">Register</a>
                                        <a href="?page=forgot&layout=auth" className="dropdown-item">Forgot Password</a>
                                        <a href="?page=change&layout=auth" className="dropdown-item">Change Password</a>
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
