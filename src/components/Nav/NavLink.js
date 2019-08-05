import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkItem extends React.Component {
    render() {
        //const isActive = this.context.router.route.location.pathname === this.props.to;
        const className = '';

        return(
            <a className={'nav-link' + className} data-toogle="dropdown">
                {this.props.children}
            </a>
        );
    }
}

class DropdownItem extends React.Component {
    render() {
        return (
            <div className="dropdown-menu dropdown-menu-small">
                <Link to='/dashboard' className="dropdown-item">
                    Analytics
                </Link>
                <Link to='/dashboard/store' className="dropdown-item">
                    Store
                </Link>
                <Link to='/dashboard/blog-overview' className="dropdown-item">
                    Blog
                </Link>
            </div>
        );
    }
}

class NavLink extends React.Component {
    render() {
        const { dropdownItems } = this.props;
        const isDropdown = typeof dropdownItems !== 'undefined';
        const className = isDropdown ? ' dropdown' : '';

        return (
            <li className={"nav-item" + className}>
                <LinkItem {...this.props}>
                    <i className="material-icons"></i> Dashboards
                </LinkItem>
                {
                    isDropdown ? <DropdownItem /> : null
                }
            </li>
        );
    }
}

LinkItem.contextTypes = {
    router: PropTypes.object
};

export default NavLink;