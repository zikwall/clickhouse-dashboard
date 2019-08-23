import React from 'react';

const Datapicker = () => {

    return(
        <div className="form-group col-md-3">
            <label htmlFor="analytics-overview-date-range-1">Выбор диапазона дат</label>
            <div id="analytics-overview-date-range" className="input-daterange input-group input-group-sm ml-auto">
                <input type="text" className="input-sm form-control" name="start" placeholder="Start Date"
                       id="analytics-overview-date-range-1" style={{height: "36px"}}/>
                <input type="text" className="input-sm form-control" name="end" placeholder="End Date"
                       id="analytics-overview-date-range-2"  style={{height: "36px"}}/>
                <span className="input-group-append">
                    <span className="input-group-text">
                      <i className="material-icons">&#xE916;</i>
                    </span>
                  </span>
            </div>
        </div>
    )
};

export default Datapicker;