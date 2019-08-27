import React from 'react';

const AdsButtons = ({ buttons, clickButtons }) => {

    const items = buttons.map((element, index) => {
       const classes = ['btn btn-white'];

       if(element.active === true) {
           classes.push('active');
       }

        return(
           <label className={ classes.join(' ') } key={index} onClick={() => clickButtons(element.label) }>
               <input
                   type="radio"
                   name="options"
                   id="option3"
                   autoComplete="off"
                   key={index}/>
               { element.label }
           </label>
       )
    });

    return(
      <div className="form-group col-md-3">
          <label htmlFor="feInputState">Выбрать тип</label>
          <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0" style={ {paddingLeft: 0} }>
              <div className="btn-group btn-group-sm btn-group-toggle d-flex my-auto mx-auto mx-sm-0" data-toggle="buttons">
                  { items }
              </div>
          </div>
      </div>
  )
};

export default AdsButtons;