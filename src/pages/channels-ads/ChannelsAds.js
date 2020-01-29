import React from "react";
import CustomDatePicker from "../../components/custom-date-picker";
import { apiFetch } from "../../services/api/Api";
import ChannelsAdsTable from './components/ChannelsAdsTable';
import Channels from "../channels";

export default class ChannelsAds  extends React.Component {
    state = {
        fields: {
            datePicker1: {
                label: "Начало периода",
                value: null,
                isValid: false,
                isTouch: false,
                minDate: null,
                maxDate: null
            },
            datePicker2: {
                label: "Конец периода",
                value: null,
                isValid: false,
                isTouch: false,
                minDate: null,
                maxDate: null
            }
        },
        formValid: false,
        statistic:null,
        isDataLoading: false,
    };

    async componentDidMount() {
        const period = await apiFetch('/api/v1/general/get-period');

        const newFields = Object.assign({}, this.state.fields);
        newFields.datePicker1.minDate = period.period[0];
        newFields.datePicker1.maxDate = period.period[1];
        newFields.datePicker2.minDate = period.period[0];
        newFields.datePicker2.maxDate = period.period[1];

        await this.setState({
            fields: newFields
        });
    }

    onChangeDatePickerHandler = async (date, name) => {
        let isValid = false;
        let value = null;

        if(!isNaN(date)) {
            isValid = true;
            value = date;
        }

        const newFields = Object.assign({}, this.state.fields);

        newFields[name].isTouch = true;
        newFields[name].isValid = isValid;
        newFields[name].value = value;

        if (name === 'datePicker1') {
            newFields.datePicker2.minDate = value;
        }

        if (name === 'datePicker2') {
            newFields.datePicker1.maxDate = value;
        }

        await this.setState({
            fields: newFields
        });
    };

    checkFields = async () => {
        const newFields = Object.assign({}, this.state.fields);
        let formValid = true;

        if (newFields.datePicker1.isValid === false) {
            formValid = false;
            newFields.datePicker1.isTouch = true;
        }

        if (newFields.datePicker2.isValid === false) {
            formValid = false;
            newFields.datePicker2.isTouch = true;
        }

        await this.setState({
            fields: newFields,
            formValid
        });

        return formValid;
    };

    checkAndSubmit = async (e) => {
        e.preventDefault();
        await this.checkFields();

        if (this.state.formValid) {
            const dayBegin = this.state.fields.datePicker1.value;
            const dayEnd = this.state.fields.datePicker2.value;
            const userChannels = await apiFetch('/api/v1/user/channels/list').then(response => {
                return response;
            });

            if (userChannels.length === 0) {
                return true;
            }

            await this.setState({
                statistic: null,
                isDataLoading: true
            });

            /*let statistic = await apiFetch('/api/v1/general/get-channels-view-duration-with-channels-id',{
                method: 'POST',
                body: JSON.stringify({dayBegin,dayEnd, userChannels}),
            });*/

            
            let statistic = null;

            await this.setState({
                statistic,
                isDataLoading: false
            });
        }
    }

    render() {
        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Обзор</span>
                        <h3 className="page-title">Показ рекламы на каналах</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={ (e) => this.checkAndSubmit(e)}>
                            <div className="form-row">
                                <CustomDatePicker changeDatePicker={ this.onChangeDatePickerHandler } name={ 'datePicker1' } { ...this.state.fields.datePicker1 }/>
                                <CustomDatePicker changeDatePicker={ this.onChangeDatePickerHandler } name={ 'datePicker2' } { ...this.state.fields.datePicker2 }/>
                            </div>
                            <button type="submit" className="mb-2 btn btn-sm btn-success mr-1">Применить</button>
                        </form>
                    </div>
                </div>
                <div className="row no-gutters">
                    <ChannelsAdsTable data={this.state.statistic} isDataLoading={this.state.isDataLoading}/>
                </div>
            </>
        );
    }
}