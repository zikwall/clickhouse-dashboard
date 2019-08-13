import React from "react";
import PropTypes from 'prop-types';
import ActiveNavigation from "../../containers/navigation/ActiveNavigation";
import {Identity} from "../../services/auth";

class Navigation extends React.Component {
    // потом поменяю
    items = [
        {
            url: '/dashboard',
            title: 'Домашняя панель',
            icon: '',
            childs: [
               {
                    title: 'Аналитика',
                    url: '/analytics',
                    sort: 1
                },
                {
                    title: 'Статистика',
                    url: '/statistic',
                    sort: 2
                },
                {
                    title: 'Реклама',
                    url: '/ads',
                    sort: 3
                }
            ],
            sort: 1
        },
        {
            title: 'AS Провайдеры',
            url: '/asn',
            icon: 'view_module',
            childs: [
                {
                    title: 'Уникальные IP',
                    url: '/ip',
                    sort: 1
                },
                {
                    title: 'Абонентский трафик',
                    url: '/trafic',
                    sort: 2
                },
                {
                    title: 'Звеньевые структуры',
                    url: '/chain-structure',
                    sort: 3
                }
            ],
            sort: 2
        },
        {
            title: 'Table',
            url: '/table',
            icon: '',
            sort: 3
        },
        {
            title: 'Общая информация',
            url: '/generally',
            icon: 'error',
            sort: 4
        },
        {
            title: 'ClickHouse Dashboard',
            url: '/dashboard/clickhouse',
            icon: 'extension',
            sort: 5,
            isVisible: Identity.can('canViewDashboard')
        }
    ];

    render() {
        return (
            <div id="header-menu-container" className="header-navbar collapse d-lg-flex p-0 bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                <ActiveNavigation items={ this.items }/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Navigation.contextTypes = {
    router: PropTypes.object
};

export default Navigation;
