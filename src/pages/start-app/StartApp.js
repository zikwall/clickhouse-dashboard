import React, { Component } from 'react';
import { apiFetch } from "../../services/api/Api";
import { BaseObject } from '../../utils';
import { EmptyContent, DimmyLoader } from "../../components/content-loader";
import Form from "../../containers/form";
import DataList from "./components";

export default class StartApp extends Component{
    state = {
        startAppData: null,
        isLoad: false
    };

    loadData = async (app, dayBegin, dayEnd) => {
        await this.setState({
            startAppData: null,
            isLoad: true
        });

        let startAppData = await apiFetch('/api/v1/general/get-start-all-app', {
            method: 'POST',
            body: JSON.stringify({app, dayBegin, dayEnd})
        });

        await this.setState({
            startAppData,
            isLoad: false
        });
    };

    render() {
        let totalContent = <EmptyContent />;

        if (this.state.startAppData === null || BaseObject.isEmpty(this.state.startAppData.startAllApp)) {
            totalContent = <EmptyContent />;
        } else {
            totalContent = <DataList data={ this.state.startAppData.startAllApp }/>;
        }

        if (this.state.isLoad === true) {
            totalContent = <DimmyLoader />;
        }

        return (
            <>
                <Form
                    withoutEvtp
                    loadData={this.loadData} title="Статистика по запускам приложений"
                    withoutApp/>
                <div className="row no-gutters">
                    <div className="col-md-12 col-sm-12 col mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Статистика по стартам приложений</h6>
                            </div>
                            <div className="card-body">
                                { totalContent }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}