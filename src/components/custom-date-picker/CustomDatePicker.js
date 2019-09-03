import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css'

const CustomDatePicker = ({ label, minDate, maxDate, changeDatePicker, value, isValid, isTouch, name}) => {
    let classes = [];
    let start = false;
    let end = false;
    name === 'begin' ? start = true : end = true;

    if(!isValid && isTouch) {
        classes.push('errorDatePicker');
    }

    return(
        <div className="form-group col-md-3">
            <label htmlFor="feInputState">{ label }</label>
            <DatePicker
                className={ classes.join(' ') }
                placeholderText='Выбрать период'
                dateFormat = 'dd-MM-yyyy'
                selected={ value !== null ? new Date(value * 1000): null }
                onChange={ (date)=>changeDatePicker(Date.parse(date) / 1000, name) }
                minDate={ new Date(minDate * 1000) }
                maxDate={ new Date(maxDate * 1000) }
                selectsStart={ start }
                selectsEnd={ end }/>
        </div>
    )
};

export default CustomDatePicker;