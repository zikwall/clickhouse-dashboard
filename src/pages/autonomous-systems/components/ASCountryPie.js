import React from 'react';
import { Pie } from "react-chartjs-2";
import { Color} from "../../../utils";

const createDataset = (items) => {
    const labels = [];
    const data = [];

    for (let item in items) {
        labels.push(item);
        data.push(items[item]);
    }

    return {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: Color.getRGB(data.length),
            hoverBackgroundColor: Color.getRGB(data.length)
        }],
    };
};

const ASCountryPie = (props) => {
    return (
        <Pie data={createDataset(props.data)} options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position:"left",
                labels: {
                    padding: 25, boxWidth: 20
                }
            },
            cutoutPercentage:0,
            tooltips: {
                custom: false, mode: "index", position: "nearest"
            }
        }}/>
    );
};

export default ASCountryPie;