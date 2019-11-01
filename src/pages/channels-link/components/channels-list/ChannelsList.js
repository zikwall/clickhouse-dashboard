import React from "react";

export default class ChannelsList extends React.Component {

    render() {
        let checkedUpdate = this.props.checkedDoHandler;
        return (
            <>
                <div className="vh-100">
                        <div className="h-75 overflow-auto">
                            <ul className="list-group list-group-flush">    
                                {this.props.items.map((channel, index) => {
                                    return <li className="list-group-item" key={index}>
                                        <div>
                                            <input type="checkbox" onClick={() => checkedUpdate(index, this.props.name)} checked={channel.checked} id={channel.id} readOnly/>
                                            <span>{channel.name}</span>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                </div>
            </>
        );
    }
}