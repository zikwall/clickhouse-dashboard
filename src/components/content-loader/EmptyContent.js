import React from 'react';
import './empty-content.css';
import { Translator } from 'eo-locale';
import { LOCALES } from "./../../constants";

const EmptyContent = ({lang}) => {
    const translate = new Translator(lang, LOCALES);
    
    return (
        <div className="non-content">
            <div className="non-content-cover"></div>
            {translate.messages.dataNotYet}
        </div>
    );
};

export default EmptyContent;