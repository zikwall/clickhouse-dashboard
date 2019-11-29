import React from 'react';
import ContentLoader from "../../../components/content-loader/ContentLoader";
import DatePicker from "react-datepicker";
import { Line } from "react-chartjs-2";
import { apiFetch, pureFetch } from "../../../services/api/Api";
import { Color, Data, DateTime } from '../../../utils';
import cn from 'classnames';

export default class extends React.Component {

    state = {
        loaded: false,
        channels: {},
        dataset: {},

        isChangeDatepcker: false,
        datepickerValue: null,
        isInvalid: false
    };

    handleFormSubmit = async (e) => {
        e.preventDefault();

        // deprecated
    };

    handleDatepickerChange = async (date) => {
        await this.setState({
            datepickerValue: date
        });

        if (this.state.datepickerValue === null) {
            this.setValid(false);

            return;
        }

        if (this.state.isInvalid === true) {
            this.setValid(true)
        }

        let range = DateTime.RangeOfDate(this.state.datepickerValue);
        let time = DateTime.toTimestamp(range.begin);

        let options = {
            method: 'POST',
            body: JSON.stringify({time})
        };

        this.init(options, false);
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

    setLoaded(status) {
        this.setState({
            loaded: status
        });
    }

    setValid(status) {
        this.setState({
            isInvalid: status
        })
    }

    async componentDidMount() {
       await this.init();
    }

    init = async (options = {}, withChannels = true) => {
        await this.setLoaded(false);

        let promisses = [
            apiFetch('/api/v1/channels/load', options)
        ];

        if (withChannels) {
            promisses.push(pureFetch('https://pl.iptv2021.com/api/v1/channels?access_token=r0ynhfybabufythekbn&key=url_protocol'))
        }

        Promise.all(promisses).then(async (response) => {
            if (withChannels) {
                await this.setState({
                    channels: response[1]
                });
            }

            await this.dataset(response[0]);

            this.setLoaded();
        });
    };

    render() {
        if (this.state.loaded === false) {
            return <ContentLoader big={true}/>
        }

        return (
            <>
                <div className="row border-bottom py-2 bg-light">
                    <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                        <DatePicker
                            className={cn({"form-control": true, "is-invalid": this.state.isInvalid})}
                            placeholderText='Выбрать период'
                            dateFormat = 'dd-MM-yyyy'
                            selected={ this.state.datepickerValue !== null
                                ? new Date(this.state.datepickerValue)
                                : DateTime.CurrentDayTimestamp(true) }
                            onChange={ (date) => this.handleDatepickerChange(Date.parse(date))}
                            minDate={ DateTime.BeginOfLoadChannelTimestamp(true) }
                            maxDate={ DateTime.TomorrowTimestamp(true) }
                        />
                    </div>
                </div>

                <Line data={this.state.dataset} />
            </>
        );
    }
}

