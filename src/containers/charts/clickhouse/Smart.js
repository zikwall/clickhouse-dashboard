import React from 'react';
import { merge } from "./Common";
import {Line} from "react-chartjs-2";

export default (props) => {

    const optData = {
        backgroundColor: "rgb(0,123,255,0.1)", borderColor: "rgb(0,123,255)", data: [3, 2, 3, 2, 4, 5, 4]
    };

    const data =  {
        labels:["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
        datasets:[{
            label: "Today",
            fill: "start",
            data: optData.data, backgroundColor: optData.backgroundColor, borderColor: optData.borderColor, borderWidth: 1.5
        }]
    };


    let options = merge(optData.data);

    return (
        <Line data={data} options={options} />
    );
};