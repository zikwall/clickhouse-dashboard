import React from 'react';
import { Bar } from "react-chartjs-2";
import { Color } from "../../../../utils";

const createDataset = (items) => {
    const labels = [];
    const data = [];

    for (let item of items) {
        labels.push(item[0]);
        data.push(item[1]);
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

const AdsPie = ({ data }) => {
    return(
        <Bar data={ createDataset(data) }
             options={{
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position:"left",
                    display: false,
                    /*labels: {
                        padding: 25, boxWidth: 20
                    }*/
                },
                cutoutPercentage:0,
                tooltips: {
                    custom: false, mode: "index", position: "nearest"
                }
        }}/>
    )
};

export default AdsPie;