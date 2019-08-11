import React from "react";
import PropTypes from 'prop-types';
import {NavLink, Link} from "react-router-dom";

class HeaderMenu extends React.Component {
    // потом поменяю
    items = {
        'dashboard': {
            url: '/dashboard',
            title: 'Dashboard',
            icon: '',
            childs: {
                'analytics': {
                    title: 'Analytics',
                    url: '/analitycs'
                },
                'store': {
                    title: 'Store',
                    url: '/store'
                },
                'blog-overview': {
                    title: 'Blog',
                    url: '/blog-overview'
                }
            },
        },
        'icon-sidebar-nav': {
            title: 'Menu Item',
            url: '/menu-tem',
            icon: '',
        },
        'components': {
            title: 'Components',
            url: '/components',
            icon: 'view_module',
            childs: {
                'overview': {
                    title: 'Overview',
                    url: '/overview'
                },
            },
        },
        'tables': {
            title: 'Table',
            url: '/table',
            icon: '',
        },
        'user-account': {
            title: 'User Account',
            url: '/user-account',
            icon: '',
            childs: {
                'login': {
                    title: 'Login',
                    url: '/login',
                    root: true
                },
                'signup': {
                    title: 'Signup',
                    url: '/signup',
                    root: true
                },
                'forgot-password': {
                    title: 'Forgot Password :)',
                    url: '/forgot-password',
                    root: true
                },
                'change-password': {
                    title: 'Change Password :)',
                    url: '/change-password',
                    root: true
                },
            },
        },
        'error': {
            title: 'Errors',
            url: '/errors',
            icon: 'error',
        }
    };

    renderItems = () => {
        let items = [];

        for (let currentItem in this.items) {
            if (!this.items.hasOwnProperty(currentItem)) {
                continue;
            }

            let item = this.items[currentItem];

            let isDropdown = item.hasOwnProperty('childs');
            var isActive = false;

            items.push(
                <li key={currentItem} className={ 'nav-item' + (isActive ? 'active' : '') + (isDropdown ? ' dropdown' : '') }>
                    <NavLink className="nav-link" data-toggle={ isDropdown ? "dropdown" : ''} to={!isDropdown ? item.url : ''}><i
                        className="material-icons">{ item.icon }</i> { item.title }
                    </NavLink>

                    {
                        isDropdown ? this.renderSubItems(item.childs, item) : null
                    }
                </li>
            );
        }

        return items;
    };

    renderSubItems = (items, parent) => {
        let subItems = [];

        let getUrl = ({ url, root = false}, parentUrl) => {
            if (root) {
                return url;
            }

            return parentUrl + url;
        };

        for (let currentItem in items) {
            if (!items.hasOwnProperty(currentItem)) {
                continue;
            }

            let item = items[currentItem];

            subItems.push(
                <NavLink key={currentItem} to={getUrl(item, parent.url)} className="dropdown-item">{ item.title }</NavLink>
            );
        }

        return (
            <div className="dropdown-menu dropdown-menu-small">
                { subItems }
            </div>
        );
    };

    render() {
        return (
            <div id="header-menu-container" className="header-navbar collapse d-lg-flex p-0 bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                { this.renderItems() }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderMenu.contextTypes = {
    router: PropTypes.object
};

export default HeaderMenu;
