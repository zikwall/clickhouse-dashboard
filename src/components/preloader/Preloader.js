import React from 'react';
import Loader from "react-loader-spinner";
import DimmyLoader from "./DimmyLoader";

export default (props) => {
    let types = [
        'Audio', 'Triangle', 'BallTriangle'
    ];

    let type = types[Math.floor(Math.random()*types.length)];

    return <DimmyLoader {...props} />;

    return (
        <div className="absolute-center">
            <Loader
                type={type}
                color="#00BFFF"
                height="200"
                width="200"
            />
        </div>
    );
};