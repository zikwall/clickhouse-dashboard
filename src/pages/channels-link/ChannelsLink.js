import React from "react" ;
import { apiFetch } from "../../services/api/Api";
import { Identity } from "../../services/auth";
import ChannelList from "./components/channels-list";
import { Col, Row } from "../../components/ui/container";
import { Button } from "../../components/ui/button";
import "./ChannelsLink.css";

export default class ChannelsLink extends React.Component {
    constructor(props) {
        super(props);
        this.checkedDoHandler = this.checkedDoHandler.bind(this);
      }

    state = {
        userChannels: [],
        channels: [],
        isVisible: true,
        isCreateUser: true,
    }

    componentDidMount() {
        Promise.all([
            this.getChannelsList(),
            this.getUserChannelsList(),
            this.getChannelsListMejor(),
        ]).then(result => {
            let channels = result[0].filter(item1 => !result[1].some(item2 => item2.id == item1.id ));
            let userChannels = result[1];
            
            this.setState({
                channels: channels,
                userChannels: userChannels,
            });
        });
    }

    getUserChannelsList = () => {
        return apiFetch('/api/v1/user/channels/list?id=' + this.props.userId).then(response => {
            return response;
        });
    }

    async getChannelsList() {
        const channels = await  fetch('https://pl.iptv2021.com/api/v1/channels?access_token=r0ynhfybabufythekbn').then(response => {
            return response.json();
        });
        let data = [];

        for (const key in channels) {
           data.push({
               id: key,
               name: channels[key],
               checked: false,
               lable: 'lime',
           });
        }

        return data;
    }

    async getChannelsListMejor() {
        const channelsMejor = await  fetch('https://vls.iptv2022.com/api/v1/channels?access_token=r0ynhfybabufythekbn').then(response => {
            return response.json();
        });
        
        let data = [];

        for (const key in channelsMejor) {
            data.push({
                id: key,
                name: channelsMejor[key],
                checked: false,
                lable: 'mejor',
            });
         }

         return data;
    }

    transferChannels(from , to) {
        let fromChannels = this.state[from];
        let toChannels = this.state[to];
        let checkedIdChannels = [];

        for (let key = 0; key < fromChannels.length; key++) {
            if (fromChannels[key].checked == false) {
                continue;
            }

            if (toChannels.find(x => x.id === fromChannels[key].id)) {
                continue
            }

            fromChannels[key].checked = false;
            toChannels.unshift(fromChannels[key]);
            checkedIdChannels.push(fromChannels[key].id);
            fromChannels.splice(key, 1);
            key--;
        }

        return apiFetch('/api/v1/user/channels/update', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Identity.getAccessToken()
            },
            body: JSON.stringify({channels: checkedIdChannels, user: this.props.userId}),
            withCredentials: true,
        }).then(response => {
            if (!response.result) {
               return alert(response.message);
            }

            this.setState({
                from:  fromChannels,
                to: toChannels
            });
        });

    }

    checkedDoHandler(name, e) {
        let channelId = e.target.value;
        let channels = this.state[name];
        let isChecked = channels[channelId].checked ? false : true;
        channels[channelId].checked = isChecked;
        this.setState({
            name: channels
        });
    }

    render() {
        let checkedDoHandler  = this.checkedDoHandler;
        
        if (!this.props.isVisible) {
            return (
                null
            );
        }
        
        return (
            <>
                <div className={`${this.state.isCreateUser ? "channels-link" : ""}`}>
                    <div className="close-btn">
                        <button className="btn btn-link" onClick={ () => {this.props.closeChannelsLinkForm()}}>X</button>
                    </div>
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                            <h3 className="page-title">Телеканалы</h3>
                        </div>
                    </div>
                    <Row>
                        <Col>
                            <ChannelList items={ this.state.channels } name={'channels'} checkedDoHandler = {checkedDoHandler.bind(this)} />
                        </Col>
                        <Col>
                            <div className="col-6 mx-auto">
                                <Button onClick={ () => this.transferChannels('userChannels', 'channels')}>
                                    <i className="material-icons">arrow_back</i>
                                </Button>
                                <Button onClick={ () => this.transferChannels('channels', 'userChannels')}>
                                    <i className="material-icons">arrow_forward</i>
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <ChannelList items={this.state.userChannels} name={'userChannels'} checkedDoHandler = {checkedDoHandler.bind(this)}/>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}