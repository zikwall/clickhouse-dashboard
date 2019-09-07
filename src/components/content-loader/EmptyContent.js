import React from 'react';
import './empty-content.css';

const EmptyContent = () => {
    return (
        <div className="non-content">
            <div className="non-content-cover"></div>
            Данных пока нет
        </div>
    );
};

export default EmptyContent;