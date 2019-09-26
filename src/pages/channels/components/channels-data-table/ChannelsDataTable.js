import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

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

    options = {
        print: false,
        download: false,
        filter: false,
        responsive: "scrollFullHeight",
        rowsPerPage: 25,
        expandableRows: false
    };

    //Берем за основу два разных массива поочередно.Это для того, чтобы дополнить данными tableData
    //Т.к один из массивов может быть пустым или не полным.

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
                const countOpenChannelObj = data.openChannelsData[key];

                if (countOpenChannelObj !== undefined) {
                    obj.openChannel = +countOpenChannelObj.ctn;
                }

            }

            if (data.channelUsers !== null) {
                const countChannelUsers = data.channelUsers.filter((item) => item.vcid === data.durationChannelsData[key].vcid)[0];

                if (countChannelUsers !== undefined) {
                    obj.channelUsers = +countChannelUsers.ctn;
                }
            }

            tableData.push(obj);
        }

        for (let key in data.openChannelsData) {
            if (tableData.filter(item => item.channelsName === key)) {
                continue;
            }

            let obj = {
                channelsName: "Нет данных",
                durationChannelOnline: "Нет данных",
                durationChannelArchive: "Нет данных",
                openChannel: "Нет данных",
                channelUsers: "Нет данных"

            };
            obj.channelsName = data.openChannelsData[key].name;
            obj.openChannel = +data.openChannelsData[key].ctn;

            if (data.durationChannelsData[key] !== undefined) {
                obj.durationChannelOnline = +(data.durationChannelsData[key].online/120).toFixed(2);
            }

            if (data.durationChannelsData[key] !== undefined) {
                obj.durationChannelArchive = +(data.durationChannelsData[key].archive/120).toFixed(2);
            }

            if (data.channelUsers !== null && data.durationChannelsData[key]) {
                const countChannelUsers = data.channelUsers.filter((item) => item.vcid === data.durationChannelsData[key].vcid)[0];

                if (countChannelUsers !== undefined) {
                    obj.channelUsers = +countChannelUsers.ctn;
                }
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