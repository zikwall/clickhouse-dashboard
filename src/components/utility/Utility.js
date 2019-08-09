import React from 'react';

const Center = (props) => {

    return (
        <div style={{'margin': 'auto', 'top': '0px', 'right': '0px', 'left': '0px', 'bottom': '0px'}}>
            { props.children }
        </div>
    )
};

export {
    Center
};