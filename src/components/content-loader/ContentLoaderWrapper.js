import React from 'react';
import PropTypes from 'prop-types';
import { ContentLoader } from "./index";

const ContentLoaderWrapper = ({children, loaded, countPlaceholders}) => {
    if (loaded === false) {
        return (
            <ContentLoader countPlaceholders={ countPlaceholders }/>
        );
    }

    return children;
};

ContentLoaderWrapper.defaultProps = {
    loaded: false,
    countPlaceholders: 3
};

ContentLoaderWrapper.propTypes = {
    loaded: PropTypes.bool,
};

export default ContentLoaderWrapper;