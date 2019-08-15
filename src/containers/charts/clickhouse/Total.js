import React from 'react';
import { merge } from "./Common";
import { Line } from "react-chartjs-2";
import { apiFetch } from "../../../services/api/Api";
import { ContentLoader } from "../../../components/content-loader";
import { abbreviateNumber } from "../../../utils";

export default class extends React.Component {

    state = {
        data: [],
        totalSum: 0,
        loaded: false
    };

    optData = {
        backgroundColor: "rgba(0, 184, 216, 0.1)", borderColor: "rgb(0, 184, 216)"
    };


    options = merge(this.optData.data);

    componentDidMount() {
        apiFetch('/api/v1/clickhouse/total').then((total) => {
            let labels = total.data.map((i) => {
                return i.date;
            });

            let data = total.data.map((i) => {
                return i.ctn;
            });

            let totalSum = abbreviateNumber(data.reduce((a, b) => parseInt(a) + parseInt(b), 0), 0);

            this.setState({
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Today",
                        fill: "start",
                        data: data, backgroundColor: this.optData.backgroundColor, borderColor: this.optData.borderColor, borderWidth: 1.5
                    }]
                },
                totalSum: totalSum,
                loaded: true
            })
        });
    }

    render() {

        if (this.state.loaded === false) {
            return (
                <div className="stats-small card card-small">
                    <div className="card-body px-0 pb-0">
                        <ContentLoader countPlaceholders={1}/>
                    </div>
                </div>
            );
        }

        const { data, totalSum} = this.state;

        return (
            <div className="stats-small card card-small">
                <div className="card-body px-0 pb-0">
                    <div className="d-flex px-3">
                        <div className="stats-small__data">
                            <span className="stats-small__label mb-1 text-uppercase">Общее</span>
                            <h6 className="stats-small__value count m-0">{ totalSum }</h6>
                        </div>
                        <div className="stats-small__data text-right align-items-center">
                            <span className="stats-small__percentage stats-small__percentage--increase">
                                12.4%
                            </span>
                        </div>
                    </div>

                    <Line data={data} options={this.options} />

                </div>
            </div>
        );
    }
};