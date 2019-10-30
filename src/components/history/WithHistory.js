import React from "react";

const withHistory = (Component) => {
    return (props) => {
        return (
            <Component {...props} />
        );
    }
};

export default withHistory;