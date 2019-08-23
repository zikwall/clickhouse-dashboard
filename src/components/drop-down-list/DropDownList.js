import React from 'react';

const DropDownList = ({label, options, isValid, isTouch, changeInput}) => {
    const elements = options.map((element, index) => {
        return(
            <option
                value={ element }
                key={index}>
                { element }
            </option>
        )
    });

    let classes = ['form-control'];

    if(!isValid && isTouch) {
        classes.push('is-invalid');
    }

    return(
            <div className="form-group col-md-3">
                <label htmlFor="feInputState">{ label }</label>
                <select
                    id="feInputState"
                    className={ classes.join(' ') }
                    onChange={(e) => changeInput(e.target.value)}>
                    <option value=""></option>
                    { elements }
                </select>
            </div>
    )
};

export default DropDownList;