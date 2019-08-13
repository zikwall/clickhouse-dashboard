import React from  'react';
import { Bar } from 'react-chartjs-2';
import Preloader from "../../../components/content-loader/ContentLoader";

export default class extends React.Component {
    data = {
        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
        datasets:[{
            label: "Profit",
            fill: "start",
            data: [28922, 25317, 23182, 32119, 11291, 8199, 25182, 22120, 10219, 8771, 12992, 8221],
            backgroundColor: "#17c671",
            borderColor: "#17c671",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "#17c671",
            borderWidth: 1.5
        }, {
            label: "Shipping",
            fill: "start",
            data: [2892, 2531, 2318, 3211, 1129, 819, 2518, 2212, 1021, 8771, 1299, 820],
            backgroundColor: "rgba(72, 160, 255, 1)",
            borderColor: "rgba(72, 160, 255, 1)",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1.5
        }, {
            label: "Tax",
            fill: "start",
            data: [1400, 1250, 1150, 1600, 500, 400, 1250, 1100, 500, 4e3, 600, 500],
            backgroundColor: "rgba(153, 202, 255, 1)",
            borderColor: "rgba(153, 202, 255, 1)",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1.5
        }
        ]
    };

    state = {
        loaded: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            });
        }, 1400)
    }

    render() {

        if (this.state.loaded === false) {
            return <Preloader useHolders={false}/>
        }

        return (
            <>
                <div className="row border-bottom py-2 bg-light">
                    <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                        <div
                            className="btn-group btn-group-sm btn-group-toggle d-flex my-auto mx-auto mx-sm-0"
                            data-toggle="buttons">
                            <label className="btn btn-white">
                                <input type="radio" name="options" id="option1" autoComplete="off" /> Hour
                            </label>
                            <label className="btn btn-white">
                                <input type="radio" name="options" id="option2" autoComplete="off" /> Day
                            </label>
                            <label className="btn btn-white">
                                <input type="radio" name="options" id="option2" autoComplete="off" /> Week
                            </label>
                            <label className="btn btn-white active">
                                <input type="radio" name="options" id="option2" autoComplete="off" />
                                Month
                            </label>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div id="sales-report-date-range" className="input-daterange input-group input-group-sm my-auto ml-auto mr-auto ml-sm-auto mr-sm-0">
                            <input type="text" className="input-sm form-control" name="start"
                                   placeholder="Start Date" id="analytics-overview-date-range-1"
                            />
                            <input type="text" className="input-sm form-control" name="end"
                                   placeholder="End Date" id="analytics-overview-date-range-2"
                            />
                            <span className="input-group-text">
                                 <i className="material-icons"></i>
                             </span>
                        </div>
                    </div>
                </div>

                <Bar data={this.data}/>
            </>
        );
    }
}