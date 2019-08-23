import React, { Component } from 'react';
import DropDownList from "../../components/drop-down-list";
import { apiFetch } from "../../services/api/Api";
import Datapicker from "../../components/datapecker";

export default class Ads extends Component{
    state = {
        fields: {
            dropDownList: {
                label: "Приложения",
                options: [],
                isValid: false,
                isTouch: false,
                value: ''
            },
            dataPicker: {
                label: "Промежуток времени",
                from: '',
                to: '',
                isValid: false,
                isTouch: false,
            }
        }
    };

    async componentDidMount() {
        const data = await apiFetch('/api/v1/general/get-app');
        const newFields = Object.assign({}, this.state.fields);
        newFields.dropDownList.options = data.app;

        this.setState({
            fields: newFields
        });
    }

    onDropDownListChangeHandler = async (value) => {
        const isTouch = true;
        let isValid = true;

        if(value === '') {
            isValid = false;
        }

        const newFields = Object.assign({}, this.state.fields);
        newFields.dropDownList.isTouch = isTouch;
        newFields.dropDownList.isValid = isValid;
        newFields.dropDownList.value = value;

        this.setState({
            fields: newFields
        });
    };

    render() {
        return(
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Обзор</span>
                        <h3 className="page-title">Рекламная статистика</h3>
                    </div>
                </div>
                <form>
                    <div className="form-row">
                    <DropDownList changeInput={this.onDropDownListChangeHandler} {...this.state.fields.dropDownList}/>
                    <Datapicker />
                    </div>
                </form>
            </>
        )
    }
}