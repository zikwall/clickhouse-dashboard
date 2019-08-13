import React from 'react';
import { Line } from "react-chartjs-2";

export default class extends React.Component {

    // ТОЛЬКО ДЛЯ ПРИМЕРА!!!

    Charts = [];
    data = [
        {
            backgroundColor: "rgba(0, 184, 216, 0.1)", borderColor: "rgb(0, 184, 216)", data: [1, 2, 1, 3, 5, 4, 7]
        },
        {
            backgroundColor: "rgba(23,198,113,0.1)", borderColor: "rgb(23,198,113)", data: [1, 2, 3, 3, 3, 4, 4]
        },
        {
            backgroundColor: "rgba(255,180,0,0.1)", borderColor: "rgb(255,180,0)", data: [2, 3, 3, 3, 4, 3, 3]
        },
        {
            backgroundColor: "rgba(255,65,105,0.1)", borderColor: "rgb(255,65,105)", data: [1, 7, 1, 3, 1, 4, 8]
        },
        {
            backgroundColor: "rgb(0,123,255,0.1)", borderColor: "rgb(0,123,255)", data: [3, 2, 3, 2, 4, 5, 4]
        }
    ];

    render() {
        this.Charts = this.data.map((item, i) => {


            let data =  {
                labels:["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"],
                datasets:[{
                    label: "Today",
                    fill: "start",
                    data: item.data, backgroundColor: item.backgroundColor, borderColor: item.borderColor, borderWidth: 1.5
                }]
            };

            let options = {
                maintainAspectRatio: true, responsive: true,
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false,
                    custom: false
                },
                elements: {
                    point: {
                        radius: 0
                    },
                    line: {
                        tension: .3
                    }
                },
                scales: {
                    xAxes:[{
                        gridLines: false,
                        scaleLabel: false,
                        ticks: {
                            display: false
                        }
                    }],
                    yAxes:[{
                        gridLines: false,
                        scaleLabel: false,
                        ticks: {
                            display: false,
                            suggestedMax: Math.max.apply(Math, item.data) + 1
                        }
                    }]
                }
            };

            return {
                data: data,
                options: options
            };
        });

        // ТОЛЬКО ДЛЯ ПРИМЕРА!!!

        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Обзор</span>
                        <h3 className="page-title">Clickhouse State</h3>
                    </div>

                    <div className="col-12 col-sm-4 d-flex align-items-center">
                        <div className="btn-group btn-group-sm btn-group-toggle d-inline-flex mb-4 mb-sm-0 mx-auto"
                             role="group" aria-label="Page actions">
                            <a href="?" className="btn btn-white active"> Основное </a>
                            <a href="?" className="btn btn-white"> Дополнительно </a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="stats-small card card-small">
                            <div className="card-body px-0 pb-0">
                                <div className="d-flex px-3">
                                    <div className="stats-small__data">
                                        <span className="stats-small__label mb-1 text-uppercase">Users</span>
                                        <h6 className="stats-small__value count m-0">2,390</h6>
                                    </div>
                                    <div className="stats-small__data text-right align-items-center">
                                        <span
                                            className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                                    </div>
                                </div>

                                <Line data={this.Charts[0].data} options={this.Charts[0].options} />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="stats-small card card-small">
                            <div className="card-body px-0 pb-0">
                                <div className="d-flex px-3">
                                    <div className="stats-small__data">
                                        <span className="stats-small__label mb-1 text-uppercase">Sessions</span>
                                        <h6 className="stats-small__value count m-0">8,391</h6>
                                    </div>
                                    <div className="stats-small__data text-right align-items-center">
                                        <span
                                            className="stats-small__percentage stats-small__percentage--decrease">7.21%</span>
                                    </div>
                                </div>

                                <Line data={this.Charts[1].data} options={this.Charts[1].options} />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="stats-small card card-small">
                            <div className="card-body px-0 pb-0">
                                <div className="d-flex px-3">
                                    <div className="stats-small__data">
                                        <span className="stats-small__label mb-1 text-uppercase">Pageviews</span>
                                        <h6 className="stats-small__value count m-0">21,293</h6>
                                    </div>
                                    <div className="stats-small__data text-right align-items-center">
                                        <span
                                            className="stats-small__percentage stats-small__percentage--increase">3.71%</span>
                                    </div>
                                </div>

                                <Line data={this.Charts[2].data} options={this.Charts[2].options} />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="stats-small card card-small">
                            <div className="card-body px-0 pb-0">
                                <div className="d-flex px-3">
                                    <div className="stats-small__data">
                                        <span className="stats-small__label mb-1 text-uppercase">Pages / Session</span>
                                        <h6 className="stats-small__value count m-0">6.43</h6>
                                    </div>
                                    <div className="stats-small__data text-right align-items-center">
                                        <span
                                            className="stats-small__percentage stats-small__percentage--decrease">2,71%</span>
                                    </div>
                                </div>

                                <Line data={this.Charts[3].data} options={this.Charts[3].options} />

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
