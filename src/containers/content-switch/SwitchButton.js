import React from 'react';

export default ({click, name, isActive}) => {
    return (
        <a href="#" onClick={ click } className={"btn btn-white" + (isActive ? ' active' : '')}> { name } </a>
    );
};