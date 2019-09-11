import React, { Component } from 'react';
import Form from "../../containers/form";
import { apiFetch } from "../../services/api/Api";
import DataList from "./components/data-list";
import UsersChart from "./components/users-chart";
import { EmptyContent, DimmyLoader } from "../../components/content-loader";

const isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
};

export default class Users extends Component {
    state = {
        usersData:null,
        isUserDataLoading: false,
        totalUsersData:null,
        isTotalUserDataLoading: false
    };

    loadUsersData = async (app, dayBegin, dayEnd, eventType) => {

        await this.setState({
            usersData:null,
            isUserDataLoading: true,
            totalUsersData:null,
            isTotalUserDataLoading: true
        });

        let usersData =  await apiFetch('/api/v1/general/get-app-users', {
            method: 'POST',
            body: JSON.stringify({app, dayBegin, dayEnd, eventType})
        });

        let totalUsersData =  await apiFetch('/api/v1/general/get-app-users-total', {
            method: 'POST',
            body: JSON.stringify({app, dayBegin, dayEnd, eventType})
        });

        if (usersData.appUsers.length === 0 || isEmpty(usersData.appUsers)) {
            usersData = null;
        }

        if (totalUsersData.appUsersTotal.length === 0) {
            totalUsersData = null;
        }

        await this.setState({
            usersData,
            totalUsersData,
            isUserDataLoading: false,
            isTotalUserDataLoading: false
        });
    };

    getDailyOverage = () => {
      let total = 0;
      let count = 0;

        this.state.usersData.appUsers.forEach((element) => {
            total += +element.ctn;
            count++;
        });

        return Math.round(total/count);

    };

    render() {
        let usersContent = <EmptyContent />;
        let userTotalContent = <EmptyContent />;

        if (this.state.usersData === null) {
            usersContent = <EmptyContent />;
        } else {
            usersContent = <UsersChart data={ this.state.usersData.appUsers }/>;
        }

        if (this.state.isUserDataLoading) {
            usersContent = <DimmyLoader />
        }

        if (this.state.totalUsersData === null || this.state.usersData === null) {
            userTotalContent = <EmptyContent />;
        } else {
            userTotalContent = <DataList
                totalUsersData={ this.state.totalUsersData.appUsersTotal[0].ctn }
                getDailyOverage={ this.getDailyOverage }/>
        }

        if (this.state.isTotalUserDataLoading) {
            userTotalContent = <DimmyLoader />
        }

        return(
            <>
                <Form loadData={this.loadUsersData}/>
                <div className="row no-gutters">
                    <div className="col-md-8 col-sm-12 col mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">График</h6>
                            </div>
                            <div className="card-body">
                                { usersContent }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Общая информация</h6>
                            </div>
                            <div className="card-body">
                                { userTotalContent }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}