import React from 'react';

export default (props) => {
    const {useButtons = true, useRange = true} = props;

    return (
        <div className="row border-bottom py-2 bg-light">
            { useButtons &&
                <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                    <div
                        className="btn-group btn-group-sm btn-group-toggle d-flex my-auto mx-auto mx-sm-0"
                        data-toggle="buttons">
                        <label className="btn btn-white active">
                            <input type="radio" name="options" id="option1" autoComplete="off"/> Hour
                        </label>
                        <label className="btn btn-white">
                            <input type="radio" name="options" id="option2" autoComplete="off"/> Day
                        </label>
                        <label className="btn btn-white">
                            <input type="radio" name="options" id="option3" autoComplete="off"/> Week
                        </label>
                        <label className="btn btn-white">
                            <input type="radio" name="options" id="option4"
                                   autoComplete="off"
                            />

                            Month
                        </label>
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