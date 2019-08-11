import React from 'react';
import { LoaderPlaceholder } from './LoaderPlaceholder';
import ContentLoader from "react-content-loader"

const LoaderSvg = (props) => {
    const {type, color} = props;
    const availableTypes = ['audio', 'bar', 'oval', 'puff', 'spin'];
    const isAvailable = (type) => {
        return availableTypes.includes(type);
    };

    if (!isAvailable(type)) {
        return <img src={require('../../assets/svg/loaders/oval.svg')} />
    }

    return (
        <img src={require(`./../../assets/svg/loaders/${type}.svg`)} />
    );
};

export default (props) => {
    const ContentLoaderBig = () => (
        <ContentLoader
            height={163}
            width={500}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <rect x="28" y="50" rx="3" ry="3" width="22" height="109" />
            <rect x="71" y="88" rx="3" ry="3" width="22" height="71" />
            <rect x="108" y="12" rx="3" ry="3" width="22" height="149" />
            <rect x="148" y="31" rx="3" ry="3" width="22" height="131" />
            <rect x="190" y="19" rx="3" ry="3" width="22" height="146" />
            <rect x="229" y="138" rx="3" ry="3" width="22" height="34" />
            <rect x="270" y="49" rx="3" ry="3" width="22" height="115" />
            <rect x="309" y="20" rx="3" ry="3" width="22" height="141" />
            <rect x="349" y="58" rx="3" ry="3" width="22" height="103" />
            <rect x="388" y="100" rx="3" ry="3" width="22" height="60" />
            <rect x="467" y="38" rx="3" ry="3" width="22" height="124" />
            <rect x="427" y="84" rx="3" ry="3" width="22" height="77" />
        </ContentLoader>
    );

    const ContentLoaderSmall = () => (
        <ContentLoader
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <rect x="28" y="50" rx="3" ry="3" width="22" height="109" />
            <rect x="71" y="88" rx="3" ry="3" width="22" height="71" />
            <rect x="108" y="12" rx="3" ry="3" width="22" height="149" />
            <rect x="148" y="31" rx="3" ry="3" width="22" height="131" />
            <rect x="190" y="19" rx="3" ry="3" width="22" height="146" />
            <rect x="229" y="138" rx="3" ry="3" width="22" height="34" />
            <rect x="270" y="49" rx="3" ry="3" width="22" height="115" />
            <rect x="309" y="20" rx="3" ry="3" width="22" height="141" />
            <rect x="349" y="58" rx="3" ry="3" width="22" height="103" />
        </ContentLoader>
    );

    return (
        <LoaderPlaceholder {...props}>
            <LoaderSvg {...props} />
            <div style={{paddingTop: '1rem'}}>Идет загрузка данных</div>
        </LoaderPlaceholder>
    );
};