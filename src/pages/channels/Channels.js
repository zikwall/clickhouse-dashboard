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
        startAppData: null,
        channelUsers:null,
        isLoad: false
    };

    loadData = async (app, dayBegin, dayEnd) => {
        await this.setState({
            durationChannelsData: null,
            openChannelsData: null,
            startAppData: null,
            isLoad: true
        });

        let durationChannelsData = await apiFetch('/api/v1/general/get-channels-view-duration', {
            method: 'POST',
            body: JSON.stringify({app, dayBegin, dayEnd})
        });

        let openChannelsData = await apiFetch('/api/v1/general/get-start-channels', {
            method: 'POST',
            body: JSON.stringify({app, dayBegin, dayEnd})
        });

        let startAppData = await apiFetch('/api/v1/general/get-start-app', {
            method: 'POST',
            body: JSON.stringify({app, dayBegin, dayEnd})
        });

        if(isEmpty(durationChannelsData.channelsViewDuration)) {
            durationChannelsData = null;
        } else {
            durationChannelsData = durationChannelsData.channelsViewDuration;
        }

        if(isEmpty(openChannelsData.startChannels)) {
            openChannelsData = null;
        } else {
            openChannelsData = openChannelsData.startChannels;
        }

        if(isEmpty(startAppData.startApp)) {
            startAppData = null;
        } else {
            startAppData = startAppData.startApp;
        }

        await this.setState({
            durationChannelsData,
            openChannelsData,
            startAppData,
            isLoad: false
        });
    };

    render() {
        let content = (
            <ChannelsDataTable
                durationChannelsData={this.state.durationChannelsData}
                openChannelsData={this.state.openChannelsData}
                startAppData={this.state.startAppData}
                channelUsers={this.state.channelUsers}/>
        );

        if (this.state.isLoad) {
            content = <DimmyLoader />
        }

        return(
            <>
                <Form withoutEvtp={true} loadData={this.loadData} title="Статистика по каналам"/>
                { content }
                <hr/>
            </>
        )
    }
}