import React from "react";
import CustomDatePicker from "../../components/custom-date-picker";
import { apiFetch } from "../../services/api/Api";
import UserChannelsTable from "./user-channels-table/UserChannelsTable";
import { EOLocale, Translator } from "eo-locale";
import { LOCALES } from "./../../constants";

const tr = new Translator('en', LOCALES);
export default class UserChannels extends React.Component {
    
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
        uniqueUsersData:null,
        isDataLoading: false,
        lang: 'en',
    };

    async componentDidMount() {
        const period = await apiFetch('/api/v1/general/get-period');

        const newFields = Object.assign({}, this.state.fields);
        newFields.datePicker1.minDate = period.period[0];
        newFields.datePicker1.maxDate = period.period[1];
        newFields.datePicker2.minDate = period.period[0];
        newFields.datePicker2.maxDate = period.period[1];
        newFields.datePicker1.label = tr.messages.startPeriod;
        newFields.datePicker2.label = tr.messages.endPeriod;


        const lang = this.detectLang();

        await this.setState({
            fields: newFields,
            lang: lang,
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
                uniqueUsersData: null,
                isDataLoading: true
            });

            let uniqueUsersData = await apiFetch('/api/v1/general/get-channels-uniq-users-by-account',{
                method: 'POST',
                body: JSON.stringify({dayBegin,dayEnd, userChannels}),
            });

            uniqueUsersData = Object.values(uniqueUsersData[0]);

            await this.setState({
                uniqueUsersData,
                isDataLoading: false
            });
        }
    };

    detectLang() {
        var language = window.navigator ? (window.navigator.language ||
            window.navigator.systemLanguage ||
            window.navigator.userLanguage) : "ru";
        language = language.substr(0, 2).toLowerCase();
        return language;
    }

    render() {
        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        
                            <EOLocale.Provider language={this.state.lang} locales={LOCALES}>
                                <span className="text-uppercase page-subtitle">
                                    <EOLocale.Text id="observe"></EOLocale.Text>
                                </span>
                            </EOLocale.Provider>
                            <EOLocale.Provider language={this.state.lang} locales={LOCALES}>
                                <h3 className="page-title">
                                    <EOLocale.Text id="uniqueUsers"></EOLocale.Text>
                                </h3>
                            </EOLocale.Provider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={ (e) => this.checkAndSubmit(e)}>
                            <div className="form-row">
                                <CustomDatePicker changeDatePicker={ this.onChangeDatePickerHandler } name={ 'datePicker1' } { ...this.state.fields.datePicker1 } lang={this.state.lang}/>
                                <CustomDatePicker changeDatePicker={ this.onChangeDatePickerHandler } name={ 'datePicker2' } { ...this.state.fields.datePicker2 } lang={this.state.lang}/>
                            </div>
                            <button type="submit" className="mb-2 btn btn-sm btn-success mr-1">
                                <EOLocale.Provider language={this.state.lang} locales={LOCALES}>
                                    <EOLocale.Text id="apply"></EOLocale.Text>
                                </EOLocale.Provider>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row no-gutters">
                    <UserChannelsTable data={this.state.uniqueUsersData} isDataLoading={this.state.isDataLoading} lang={this.state.lang}/>
                </div>
            </>
        );
    }
}