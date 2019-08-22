import React from 'react';
import { FilterPanel } from "../filter";
import { Scrollbars } from "react-custom-scrollbars";

export default class extends React.Component {
    static defaultProps = {
        filterButtons: {},
        everyOneCallback: null,
        height: 570,
    };

    render () {
        return (
            <>
                <FilterPanel buttons={this.props.filterButtons}/>

                <Scrollbars style={{height: this.props.height }}>
                    { this.props.children }
                </Scrollbars>
            </>
        );
    }
}