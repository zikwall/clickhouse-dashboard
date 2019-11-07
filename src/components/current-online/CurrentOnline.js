import React, {useEffect, useState} from "react";
import { pureFetch } from "../../services/api/Api";
import { Scrollbars } from "react-custom-scrollbars";
import { useInterval } from "../../hooks";
import { ContentLoaderWrapper } from "../content-loader";
import CountUp from 'react-countup';
import { BaseObject } from "../../utils";

const CurrentOnline = () => {

    const [online, setOnline] = useState(null);
    const [channels, setChannels] = useState({});
    const [onlines, setOnlines] = useState({});

    useEffect(() => {
        fetchOnline();
    }, [online]);

    useInterval(() => {
       fetchOnline();
    }, 50000);

    const resolveOnline = (onlines = []) => {
        let ch = {};
        let total = 0;

        for (let onl in onlines) {
            for (let [channel, counter] of Object.entries(onlines[onl].CHANNELS)) {
                let channelName = channel;

                if (channels.hasOwnProperty(channel)) {
                    channelName = channels[channel].name;
                }

                total += +counter;

                if (ch.hasOwnProperty(channelName)) {
                    ch[channelName] += +counter;

                    continue;
                }

                ch[channelName] = +counter;
            }
        }

        return [total, BaseObject.sortable(ch, {
                reverse: true
            })
        ];
    };

    const fetchOnline = async () => {
        Promise.all([
            pureFetch('https://pl.iptv2021.com/api/v1/channels?access_token=r0ynhfybabufythekbn&key=url_protocol'),
            pureFetch('http://172.19.95.111:4020/api/chnls'),
            pureFetch('http://172.19.95.110:4020/api/chnls'),
            pureFetch('http://172.19.95.109:4020/api/chnls'),
            pureFetch('http://172.19.95.108:4020/api/chnls'),
            pureFetch('http://172.19.95.112:4020/api/chnls'),
            pureFetch('http://172.19.95.114:4020/api/chnls'),
            pureFetch('http://api.limehd.tv/cdn')
        ]).then((res) => {
            setChannels(res[0]);
            let [total, onlines] = resolveOnline(res.slice(1, 7));
            setOnlines(onlines);
            setOnline(total);

        }).catch((err) => {
            console.log(err)
        });
    };


    return (
        <>
            <div className="card card-small">
                <div className="card-body px-0 pb-0">
                    <div className="d-flex px-3">
                        <div className="stats-small__data">
                            <span className="stats-small__label mb-1 text-uppercase">Users</span>
                            <h6 className="stats-small__value count m-0">{ online == null ? 0 : <CountUp end={ online }/> }</h6>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="card card-small">
                <div className="card-header border-bottom">
                    <h6 className="m-0">Current <strong>Online</strong></h6>
                </div>
                <div className="card-body p-0">
                    <ContentLoaderWrapper loaded={online != null} >
                        <ul className="list-group list-group-small list-group-flush">
                            <Scrollbars style={{height: '300px' }}>
                                <Channels onlines={ onlines } />
                            </Scrollbars>
                        </ul>
                    </ContentLoaderWrapper>
                </div>
                <div className="card-footer border-top">

                </div>
            </div>
        </>
    );
};

const Channel = ({name, count}) => {
    return (
        <li className="list-group-item d-flex px-3">
            <span className="text-semibold text-fiord-blue">{ name }</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">{ count }</span>
        </li>
    );
};

const Channels = ({onlines}) => {
    let ch = [];

    let cc = 1;
    for (let [c, v] of Object.entries(onlines)) {
        ch.push(<Channel key={cc++} count={v} name={c} />);
    }

    return ch;
};

export default CurrentOnline;