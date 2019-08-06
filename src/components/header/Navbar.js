import React from "react";
import {Brand, Notification, ProfileMenu, SearchPanel} from "./elements/NavbarElements";

class Navbar extends React.Component {
    render() {
        return (
            <div className="main-navbar bg-white">
                <div className="container p-0">
                    <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                        <Brand/>
                        <SearchPanel/>

                        <ul className="navbar-nav border-left flex-row border-right ml-auto">
                            <Notification/>
                            <ProfileMenu {...this.props} />
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
