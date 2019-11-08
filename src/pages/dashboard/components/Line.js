import React from 'react';
import { Line } from "react-chartjs-2";
import ContentLoader from "../../../components/content-loader/ContentLoader";
import {apiFetch, pureFetch} from "../../../services/api/Api";
import { Color, Data } from '../../../utils';

export default class extends React.Component {

    state = {
        loaded: false,
        channels: {},
        dataset: {}
    };

    dataset = async (channels) => {
        let groupByUrl = [];

        for (let key in channels) {
            let channel = channels[key];

            if (typeof groupByUrl[channel.url_protocol] === 'undefined') {
                groupByUrl[channel.url_protocol] = [];
            }

            groupByUrl[channel.url_protocol].push(channel);
        }

        let dataset = [];

        for (let key in groupByUrl) {
            let groupChannels = groupByUrl[key];
            let RGBA = Color.randomRGBA();

            let channelName = key;

            if (this.state.channels.hasOwnProperty(key)) {
                channelName = this.state.channels[key].name;
            }

            let createData = {
                // chart props
                label: channelName, fill: "start",
                backgroundColor: `rgba(${RGBA[0]}, ${RGBA[1]}, ${RGBA[2]}, 0.1)`,
                borderColor: `rgba(${RGBA[0]}, ${RGBA[1]}, ${RGBA[2]}, 0.7)`,
                pointBackgroundColor: '#ffffff',
                pointHoverBackgroundColor: `rgba(${RGBA[0]}, ${RGBA[1]}, ${RGBA[2]}, 0.1)`,
                borderWidth: 1.5,

                // other
                loadHourTotal: 0
            };

            let realViewHours = groupChannels.length;

            // generate 24 hour
            createData['data'] = [...new Array(24)].map(() => {
                return 0;
            });

            for (let k in groupChannels) {
                let channel = groupChannels[k];
                let hourNumber = (new Date(channel.hour_begin * 1000)).getHours();

                // среднечасовая нагрузка на канал
                let sumAvgFiveMinuts = +channel.sumHour / channel.countRealFive;
                createData.data[hourNumber] = +sumAvgFiveMinuts;
                createData.loadHourTotal += sumAvgFiveMinuts;
            }

            // среднедневная нагрузка на канал
            createData.loadHourTotal = createData.loadHourTotal / realViewHours;
            dataset.push(createData);
        }

        dataset.sort((a, b) => {
            return -1 * (a.loadHourTotal - b.loadHourTotal);
        });

        this.setState({
            dataset: {
                labels: Data.HourLabels,
                datasets: dataset.splice(0, 10) // only TOP 10
            }
        });
    };

    setLoaded() {
        this.setState({
            loaded: !this.state.loaded
        });
    }

    async componentDidMount() {
        Promise.all([
            pureFetch('https://pl.iptv2021.com/api/v1/channels?access_token=r0ynhfybabufythekbn&key=url_protocol'),
            apiFetch('/api/v1/channels/load')
        ]).then(async (response) => {
            await this.setState({
                channels: response[0]
            });

            await this.dataset(response[1]);
            this.setLoaded();
        });
    }

    render() {
        if (this.state.loaded === false) {
            return <ContentLoader big={true}/>
        }

        return (
            <>
                <div className="row border-bottom py-2 bg-light">
                    <div className="col-12 col-sm-6">
                        <div id="sessions-overview-date-range"
                             className="input-daterange input-group input-group-sm my-auto ml-auto mr-auto ml-sm-auto mr-sm-0">
                            <input type="text" className="input-sm form-control" name="start"
                                   placeholder="Start Date"
                                   id="analytics-overview-sessions-date-range-1"
                            />
                            <input type="text" className="input-sm form-control" name="end"
                                   placeholder="End Date"
                                   id="analytics-overview-sessions-date-range-2"
                            />
                            <span className="input-group-append">
                                 <span className="input-group-text">
                                      <i className="material-icons"></i>
                                 </span>
                            </span>
                        </div>
                    </div>
                </div>

                <Line data={this.state.dataset} />
            </>
        );
    }
}

