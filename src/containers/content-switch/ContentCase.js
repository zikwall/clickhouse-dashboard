import React from 'react'

export default class extends React.Component {
    static defaultProps = {
        sheetIndex: "unindexed",
        sheetName: "Unnamed",
    };

    render() {
        return (
            this.props.children
        );
    }
}