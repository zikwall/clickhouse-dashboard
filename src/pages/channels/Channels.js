import React, { Component } from 'react';
import { apiFetch } from "../../services/api/Api";
import Form from "../../containers/form";
import ChannelsDataTable from "./components/channels-data-table";
import { DimmyLoader } from "../../components/content-loader";

const isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
};

export default class Channels extends Component{
    state = {
        durationChannelsData: null,
        openChannelsData: null,
        channelUsers:null,
        channelUsersWithEvtp: null,
        isLoad: false
    };

    loadData = async (app, dayBegin, dayEnd) => {
        this.setState({
            durationChannelsData: null,
            openChannelsData: null,
            channelUsers: null,
            channelUsersWithEvtp: null,
            isLoad: true
        });

        Promise.all([
            apiFetch('/api/v1/general/get-channels-view-duration', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd})
            }),
            apiFetch('/api/v1/general/get-start-channels', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd})
            }),
            apiFetch('/api/v1/general/get-channels-uniq-users', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd})
            }),
            apiFetch('/api/v1/general/get-channels-uniq-users-with-evtp', {
                method: 'POST',
                body: JSON.stringify({app, dayBegin, dayEnd})
            })
        ]).then(results => {
            let channelUsers = null;
            let durationChannelsData = null;
            let openChannelsData = null;
            let channelUsersWithEvtp = null;

            if (!isEmpty(results[2].channelsUniqUsers)) {
                channelUsers = results[2].channelsUniqUsers;
            }

            if (!isEmpty(results[0].channelsViewDuration)) {
                durationChannelsData = results[0].channelsViewDuration;
            }

            if (!isEmpty(results[1].startChannels)) {
                openChannelsData = results[1].startChannels;
            }

            if (!isEmpty(results[3].channelsUniqUsersWithEvtp)) {
                channelUsersWithEvtp = results[3].channelsUniqUsersWithEvtp;
            }

            this.setState({
                durationChannelsData,
                openChannelsData,
                channelUsers,
                channelUsersWithEvtp,
                isLoad: false
            });
        });
    };

    render() {
        let content = (
            <ChannelsDataTable
                durationChannelsData={this.state.durationChannelsData}
                openChannelsData={this.state.openChannelsData}
                channelUsers={this.state.channelUsers}
                channelUsersWithEvtp={this.state.channelUsersWithEvtp}/>
        );

        if (this.state.isLoad) {
            content = <DimmyLoader />
        }

        return(
            <>
                <Form withoutEvtp loadData={this.loadData} title="Статистика по каналам"/>
                { content }
                <hr/>
            </>
        )
    }
}