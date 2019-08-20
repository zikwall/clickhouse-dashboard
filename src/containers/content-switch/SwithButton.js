import React from 'react';

export default (props) => {
    const {click, name, isActive} = props;

    return (
        <a onClick={ click } className={"btn btn-white" + (isActive ? ' active' : '')}> { name } </a>
    );
};