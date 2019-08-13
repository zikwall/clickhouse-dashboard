import React from 'react';

import './placeholder.css';

export const Placeholder = (props) => {
    const { count = 3, useHolders = true } = props;

    const placeholders = ([...new Array(count)]).map((placeholder, i) => {
        return <img className="ui wireframe image"
                    src={require('./../../assets/images/placeholder/short-paragraph.png')}
                    key={i}/>
    });


    return (
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                { props.children }
            </div>

            { placeholders }
        </div>
    );
};