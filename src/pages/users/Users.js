import React, { Component } from 'react';
import { apiFetch } from "../../services/api/Api";
import { EmptyContent, DimmyLoader } from "../../components/content-loader";
import { Object } from "../../utils";
import Form from "../../containers/form";
import DataList from "./components/data-list";
import UsersData from "./components/users-data";

export default class Users extends Component {
    state = {
        usersData:null,
        isUserDataLoading: false,
        totalUsersData:null,
        isTotalUserDataLoading: false,
        timeZoneUsers: null,
        durationChannelsData: null,
        eventType: 'all'
    };

    loadUsersData = async (app, dayBegin, dayEnd, eventType) => {

        this.setState({
            usersData: null,
            isUserDataLoading: true,
            totalUsersData: null,
            isTotalUserDataLoading: true,
            timeZoneUsers: null,
            durationChannelsData: null,
            eventType: 'all'
        });

        Promise.all([
            apiFetch('/api/v1/general/get-app-users', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd, eventType})
            }),
            apiFetch('/api/v1/general/get-app-users-total', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd, eventType})
            }),
            apiFetch('/api/v1/general/get-time-zone-users', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd, eventType})
            }),
            apiFetch('/api/v1/general/get-channels-view-duration', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd})
            })
        ]).then(results => {
            let usersData = null;
            let totalUsersData = null;
            let timeZoneUsers = null;
            let durationChannelsData = null;

            if (results[0].appUsers.length !== 0 || !Object.isEmpty(results[0].appUsers)) {
                usersData = results[0];
            }

            if (results[1].appUsersTotal.length !== 0) {
                totalUsersData = results[1];
            }

            if (results[2].length !== 0 || !Object.isEmpty(results[2].timeZoneUsers)) {
                timeZoneUsers = results[2].timeZoneUsers;
            }

            if(!Object.isEmpty(results[3].channelsViewDuration)) {
                durationChannelsData = results[3].channelsViewDuration;
            }

            this.setState({
                usersData,
                totalUsersData,
                isUserDataLoading: false,
                isTotalUserDataLoading: false,
                timeZoneUsers,
                durationChannelsData,
                eventType: eventType
            });
        });
    };

    render() {
        let usersContent = <EmptyContent />;
        let userTotalContent = <EmptyContent />;

        if (this.state.usersData === null) {
            usersContent = <EmptyContent />;
        } else {
            usersContent = <UsersData
                totalUsersData={this.state.totalUsersData}
                timeZoneUsers={this.state.timeZoneUsers}
            />;
        }

        if (this.state.isUserDataLoading) {
            usersContent = <DimmyLoader />
        }

        if (this.state.totalUsersData === null || this.state.usersData === null || this.state.durationChannelsData === null) {
            userTotalContent = <EmptyContent />;
        } else {
            userTotalContent = <DataList
                totalUsersData={ this.state.totalUsersData.appUsersTotal[0].ctn }
                usersData={ this.state.usersData }
                durationChannelsData={this.state.durationChannelsData}
                eventType={this.state.eventType}
            />
        }

        if (this.state.isTotalUserDataLoading) {
            userTotalContent = <DimmyLoader />
        }

        return(
            <>
                <Form
                    loadData={this.loadUsersData}
                    title="Статистика по пользователям"
                    evtp/>
                <div className="row no-gutters">
                    <div className="col-md-4 col-sm-12 col mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Пользователи</h6>
                            </div>
                            <div className="card-body">
                                { usersContent }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Просмотры</h6>
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