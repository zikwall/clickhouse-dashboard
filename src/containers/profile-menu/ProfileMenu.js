import React from 'react';
import Identity from "../../services/auth/Identity";

export default (props) => {

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
                <img className="user-avatar rounded-circle mr-2" src={require("../../assets/images/user/avatars/team-thumb-1.png")}
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