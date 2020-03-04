import React from 'react';
import { Placeholder } from './Placeholder';
import { Translator } from 'eo-locale';
import { LOCALES } from "./../../constants";

export const LoaderSvg = ({ type, color }) => {
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

LoaderSvg.defaultProps = {
    type: 'none'
};

export default (props, lang) => {
    const translate = new Translator(lang, LOCALES);
    return (
        <Placeholder {...props}>
            <LoaderSvg {...props} />
            <div style={{paddingTop: '1rem'}}>{translate.messages.dataLoading}</div>
        </Placeholder>
    );
};