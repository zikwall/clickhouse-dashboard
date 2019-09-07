import React from 'react';
import './empty-content.css';

const NotLoadedContent = () => {
    return (
        <div className="non-content">
            <div className="non--loaded-content-cover"></div>
            Данных пока нет
        </div>
    );
};

export default NotLoadedContent;