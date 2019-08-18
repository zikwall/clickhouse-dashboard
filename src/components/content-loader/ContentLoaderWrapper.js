import React from 'react';
import PropTypes from 'prop-types';
import { ContentLoader } from "./index";

class ContentLoaderWrapper extends React.Component {
    static defaultProps = {
        loaded: false
    };

    render() {
        const { countPlaceholders } = this.props;

        if (this.props.loaded === false) {
            return (
                <ContentLoader countPlaceholders={ countPlaceholders }/>
            );
        }

        return this.props.children;
    }
}

ContentLoaderWrapper.propTypes = {
    name: PropTypes.bool
};

export default ContentLoaderWrapper;