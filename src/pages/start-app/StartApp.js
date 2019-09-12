import React, { Component } from 'react';
import { apiFetch } from "../../services/api/Api";
import Form from "../../containers/form";
import { EmptyContent, DimmyLoader } from "../../components/content-loader";
import Chart from "../../components/chart";
import DataList from "./components";

const isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
};

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

        let startAppData = await apiFetch('/api/v1/general/get-start-app', {
            method: 'POST',
            body: JSON.stringify({app, dayBegin, dayEnd})
        });

        await this.setState({
            startAppData,
            isLoad: false
        });
    };

    render() {
        let chartContent = <EmptyContent />;
        let totalContent = <EmptyContent />;

        if (this.state.startAppData === null || isEmpty(this.state.startAppData.startApp)) {
            chartContent = <EmptyContent />;
            totalContent = <EmptyContent />;
        } else {
            chartContent = <Chart data={ this.state.startAppData.startApp }/>;
            totalContent = <DataList data={ this.state.startAppData.startApp }/>;
        }

        if (this.state.isLoad === true) {
            chartContent = <DimmyLoader />;
            totalContent = <DimmyLoader />;
        }

        return (
            <>
                <Form withoutEvtp loadData={this.loadData} title="Статистика по запускам приложений"/>
                <div className="row no-gutters">
                    <div className="col-md-8 col-sm-12 col mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">График</h6>
                            </div>
                            <div className="card-body">
                                { chartContent }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                             <div className="card-header border-bottom">
                                <h6 className="m-0">Общая информация</h6>
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