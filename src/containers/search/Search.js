import React from 'react';

export default (props) => {
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