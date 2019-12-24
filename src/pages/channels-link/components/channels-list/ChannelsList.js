import React from "react";
import { Select, InputLabel, Input} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = {
    select: {
        height: "255px !important",
    }
};
class ChannelsList extends React.Component {
    data = [];
    
    render() {
        let checkedUpdate = this.props.checkedDoHandler;
        const classes = this.props.classes;
        return (
            <>
                <div>
                    <InputLabel  shrink htmlFor="select-multiple-native">{this.props.name}</InputLabel>
                    <Select
                    id="demo-mutiple-checkbox"
                    value={this.data}
                    multiple={true}
                    native={true}
                    input={<Input />}
                    inputProps={{
                        id: 'select-multiple-native',
                    }}
                    classes={{select: classes.select}}
                    >
                    {this.props.items.map((channel,index) => {
                        let idx = this.data.indexOf(index);
                        
                        if (channel.checked == true && idx == -1) {
                            this.data.push(index);
                        } else if (channel.checked == false && idx > -1) {
                            this.data.splice(idx,1);
                        }
                        
                        return <option key={index} value={index} onClick={(e) => checkedUpdate(this.props.name, e)}>
                            {channel.name}
                        </option>
                    })}
                    </Select>
                </div>
            </>
        );
    }
}

export default withStyles(useStyles)(ChannelsList);