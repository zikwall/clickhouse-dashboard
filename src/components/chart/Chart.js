import React from 'react';
import { Line } from "react-chartjs-2";
import {Color} from "../../utils";

const formatDate = (str) => {
    const date = new Date(str * 1000);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear() % 100;

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (yy < 10) yy = '0' + yy;

    return dd + '-' + mm + '-' + yy;
};

const createDataset = (items) => {
    const labels = [];
    const data = [];

    for (let item of items) {
        labels.push(formatDate(item.day_begin));
        data.push(item.ctn);
    }

    return {
        labels: labels,
        datasets: [{
            data: data,
            //backgroundColor: Color.getRGB(data.length),
            //hoverBackgroundColor: Color.getRGB(data.length)
        }],
    };
};

const Chart = ({ data }) => {
    return(
        <Line data={ createDataset(data) }
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

export default Chart;