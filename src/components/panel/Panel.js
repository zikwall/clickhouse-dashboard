import React from 'react';
import { FilterPanel } from "../filter";
import { Scrollbars } from "react-custom-scrollbars";
import PropTypes from 'prop-types';

const Panel = ({useButtons, useRange, filterButtons, everyOneCallback, children, height}) => {
    return (
        <>
            <FilterPanel buttons={filterButtons} useButtons={useButtons} useRange={useRange}/>

            <Scrollbars style={{height: height }}>
                {children }
            </Scrollbars>
        </>
    );
};

export default Panel;

Panel.defaultProps = {
    filterButtons: {},
    useButtons: true,
    useRange: false,
    everyOneCallback: null,
    height: 570,
};

Panel.propTypes = {
    filterButtons: PropTypes.object,
    useButtons: PropTypes.bool,
    useRange: PropTypes.bool,
    everyOneCallback: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};