import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

/*function compareDesc( a, b ) {
    let durationA = hmsToSecondsOnly(a.durationChannel.substring(0, a.durationChannel.indexOf('/')));
    let durationB = hmsToSecondsOnly(b.durationChannel.substring(0, b.durationChannel.indexOf('/')));

    if ( durationA > durationB ){
        return -1;
    }
    if ( durationA < durationB ){
        return 1;
    }
    return 0;
}

function compareAsc( a, b ) {
    let durationA = hmsToSecondsOnly(a.durationChannel.substring(0, a.durationChannel.indexOf('/')));
    let durationB = hmsToSecondsOnly(b.durationChannel.substring(0, b.durationChannel.indexOf('/')));

    if ( durationA < durationB ){
        return -1;
    }
    if ( durationA > durationB ){
        return 1;
    }
    return 0;
}

function hmsToSecondsOnly(str) {
    const a = str.split(':');

    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
}*/

export default class ChannelsDataTable extends Component{

    state = {
      data: []
    };

    componentDidMount() {
        const data = this.getData(this.props);

        this.setState({
            data
        })
    }

    columns = [
        {
            name: "channelsName",
            label: "Название канала",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "durationChannelOnline",
            label: "Длительность в часах (онлайн)",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "durationChannelArchive",
            label: "Длительность в часах (архив)",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "openChannel",
            label: "Переходы на канал",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "channelUsers",
            label: "Уникальные пользователи",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

/*    customSort = async (changedColumn, direction) => {
        console.log(direction);
        if (changedColumn =='durationChannel') {
            if (direction == 'descending') {
                let data = this.state.data;
                data = data.sort(compareDesc);

                await this.setState({
                    data: []
                });

                await this.setState({
                    data
                });
            }

            if (direction == 'ascending') {
                let data = this.state.data;
                data = data.sort(compareAsc);

                await this.setState({
                    data: []
                });

                await this.setState({
                    data
                });

                console.log(this.state.data);
            }
        }
    };*/

    options = {
        print: false,
        download: false,
        filter: false,
        responsive: "scrollFullHeight",
        rowsPerPage: 25,
        expandableRows: false
    };

    getData = (data) => {
        let tableData = [];

        for (let key in data.durationChannelsData) {
            let obj = {
                channelsName: "Нет данных",
                durationChannelOnline: "Нет данных",
                durationChannelArchive: "Нет данных",
                openChannel: "Нет данных",
                channelUsers: "Нет данных"

            };
            obj.channelsName = data.durationChannelsData[key].name;
            obj.durationChannelOnline = +(data.durationChannelsData[key].online/120).toFixed(2);
            obj.durationChannelArchive = +(data.durationChannelsData[key].archive/120).toFixed(2);

            if (data.openChannelsData !== null) {
                obj.openChannel = +data.openChannelsData.filter((item) => item.vcid === data.durationChannelsData[key].vcid)[0].ctn;
            }

            tableData.push(obj);
        }

        return tableData;
    };

    render() {
        return(
            <MUIDataTable
                title={"Статистика по каналам"}
                data={this.state.data}
                columns={this.columns}
                options={this.options}
            />
        )
    }
}