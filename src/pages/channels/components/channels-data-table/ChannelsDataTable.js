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
            name: "durationChannel",
            label: "Длительность просмотра онлайн/архив",
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

    customSort = (changedColumn, direction) => {
        console.log(changedColumn, direction);
    };

    options = {
        print: false,
        download: false,
        filter: false,
        responsive: "scrollFullHeight",
        rowsPerPage: 25,
        onColumnSortChange: this.customSort
    };

    getData = (data) => {
        let tableData = [];

        for (let key in data.durationChannelsData) {
            let obj = {
                channelsName: "Нет данных",
                durationChannel: "Нет данных",
                openChannel: "Нет данных",
                channelUsers: "Нет данных"

            };
            obj.channelsName = data.durationChannelsData[key].name;
            obj.durationChannel = data.durationChannelsData[key].online + " / " + data.durationChannelsData[key].archive;

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