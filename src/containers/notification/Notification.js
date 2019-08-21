import React from 'react';

export default (props) => {
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
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