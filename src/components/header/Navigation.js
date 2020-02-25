import React from "react";
import PropTypes from 'prop-types';
import ActiveNavigation from "../../containers/navigation/ActiveNavigation";
import NavigationRoutes from "../../routes/Routes";

const Navigation = () => {
    return (
        <div id="header-menu-container" className="header-navbar collapse d-lg-flex p-0 bg-white border-top">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                            <ActiveNavigation items={ NavigationRoutes }/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Navigation.contextTypes = {
    router: PropTypes.object
};

export default Navigation;
