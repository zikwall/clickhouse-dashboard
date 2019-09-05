import React from 'react';
import { NavLink } from "react-router-dom";

export default class extends React.Component {
    state = {
        items: [],
        groups: []
    };

    componentDidMount() {
        const { items } = this.props;

        this.addItems(items);
    }

    addItems = (items) => {
        for (let currentItem in items) {
            if (!items.hasOwnProperty(currentItem)) {
                continue;
            }

            this.addItem(items[currentItem]);
        }
    };

    addItem = (item) => {
        if (!item.hasOwnProperty('sort')) {
            item.sort = 9999;
        }

        if (!item.hasOwnProperty('title')) {
            item.title = 'Unnamed';
        }

        if (!item.hasOwnProperty('group')) {
            item.group = 'default';
        }

        if (!item.hasOwnProperty('isVisible')) {
            item.isVisible = true;
        }

        /*if (item.hasOwnProperty('childs')) {
            item.childs = this.addItems(item.childs);
        }*/

        if (item.isVisible === false) {
            return false;
        }

        this.setState(prevState => ({
            items: [...prevState.items, item]
        }));
    };

    getItems = () => {
        return this.state.items;
    };

    addItemGroup = () => {
        // TODO add grouping links
    };

    getActive = () => {

    };

    sortGroups = () => {

    };

    sortItems = (sortable) => {
        return sortable.sort((a, b) => (a.sort > b.sort) ? 1 : -1)
    };

    renderItems = () => {
        let items = [];
        let itemsState = this.sortItems(this.getItems());
        for (let currentItem in itemsState) {
            if (!itemsState.hasOwnProperty(currentItem)) {
                continue;
            }

            let item = itemsState[currentItem];

            let isDropdown = item.hasOwnProperty('childs');
            let isActive = false;

            items.push(
                <li key={currentItem} className={ 'nav-item' + (isDropdown ? ' dropdown' : '') }>
                    <NavLink
                        className={ 'nav-link' + (isActive ? ' active' : '') }
                        data-toggle={ isDropdown ? "dropdown" : ''}
                        to={!isDropdown ? item.url : ''}>

                        {
                            item.icon && <i className={ 'material-icons' + (item.iconClassName ? ' ' + item.iconClassName : '') }>{ item.icon }</i>
                        }

                        { item.title }
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
        this.sortItems(items);

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
            this.renderItems()
        )
    }
}