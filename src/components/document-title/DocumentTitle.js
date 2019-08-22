import React from 'react';
import Helmet from 'react-helmet';

export const DocumentTitle = ({ title }) => {
    var defaultTitle = 'LimeHD Analytics System';
    return (
        <Helmet>
            <title>{title ? defaultTitle + ' | ' + title : defaultTitle}</title>
        </Helmet>
    );
};

const withTitle = ({ component: Component, title }) => {
    return class extends Component {
        render() {
            return (
                <>
                    <DocumentTitle title={title} />
                    <Component {...this.props} />
                </>
            );
        }
    };
};

export default withTitle;
