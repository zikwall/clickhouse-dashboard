import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {

    state = {
        activeButtonIndex: 'day'
    };

    availableButtons = {
        day: {name: 'Day', index: 'day'},
        week: {name: 'Week', index: 'week'},
        month: {name: 'Month', index: 'month'}
    };

    renderButtons = (buttons = null, everyOneCallback = null) => {
        if (buttons === null) {
            return null;
        }

        return Object.keys(buttons).map((key, index) => {
            if (!this.availableButtons.hasOwnProperty(key)) {
                return null
            }

            let isActive = this.state.activeButtonIndex === key;

            let callback = buttons[key];

            return (
                <label onClick={ () => this.handleButtonClick(callback, key) }
                       key={index}
                       className={"btn btn-white" + (isActive ? ' active' : '')}>

                    <input type="radio"
                           name="filter-button"
                           id={"option" + index}
                           autoComplete="off" /> { this.availableButtons[key].name }
                </label>
            );
        });
    };

    handleButtonClick = (callback, time) => {
        this.setState({
            activeButtonIndex: time
        });

        callback(time);
    };

    handleDataRangeChange = () => {};

    render() {
        const {useButtons = true, useRange = true, buttons, everyOneCallback = null} = this.props;

        return (
            <div className="row border-bottom py-2 bg-light">
                { useButtons &&
                <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                    <div className="btn-group btn-group-sm btn-group-toggle d-flex my-auto mx-auto mx-sm-0" data-toggle="buttons">
                        { this.renderButtons(buttons, everyOneCallback) }
                    </div>
                </div>
                }

                { useRange &&
                <div className="col-12 col-sm-6">
                    <div id="sessions-overview-date-range"
                         className="input-daterange input-group input-group-sm my-auto ml-auto mr-auto ml-sm-auto mr-sm-0">
                        <input type="text" className="input-sm form-control" name="start"
                               placeholder="Start Date"
                               id="analytics-overview-sessions-date-range-1"
                        />
                        <input type="text" className="input-sm form-control" name="end"
                               placeholder="End Date"
                               id="analytics-overview-sessions-date-range-2"
                        />
                        <span className="input-group-append">
                        <span className="input-group-text">
                            <i className="material-icons"></i>
                        </span>
                    </span>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Filter;

Filter.propTypes = {
    buttons: PropTypes.object,
    useRange: PropTypes.bool,
    useButtons: PropTypes.bool,
    everyOneCallback: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};