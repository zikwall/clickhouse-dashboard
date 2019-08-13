import React from "react";
import { Notification } from "../../containers/notification";
import { ProfileMenu } from "../../containers/profile-menu";
import { Search } from "../../containers/search";


const Brand = (props) => {
    return  (
        <a className="navbar-brand" href="/" style={{ lineHeight: "35px" }}>
            <div className="d-table m-auto">

                <img id="main-logo" className="d-inline-block align-top mr-1 ml-3"
                     style={{maxWidth: "35px"}} src={require("./../../assets/images/logo.png")}
                     alt="Shards Dashboard"
                />

                <span className="d-none d-md-inline ml-1">LimeHD Analitycs</span>
            </div>
        </a>
    );
};

class NavigationHeader extends React.Component {
    render() {
        return (
            <div className="main-navbar bg-white">
                <div className="container p-0">
                    <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                        <Brand/>
                        <Search/>

                        <ul className="navbar-nav border-left flex-row border-right ml-auto">
                            <Notification />
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

export default NavigationHeader;
