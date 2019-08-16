import React from 'react';
import {ContentLoader} from "../../components/content-loader";

const AsnCountryPie = (props) => {

    if (props.loaded === false) {
        return (
            <>
                <ContentLoader countPlaceholders={3}/>
            </>
        );
    }

    return ('Pie loaded!');
};

export default AsnCountryPie;