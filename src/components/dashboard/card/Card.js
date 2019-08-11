import React from 'react';

const Card = (props) => {

    const {header, footer} = props;

    return (
        <div className="card ubd-stats card-small h-100">
            { header &&
                <div className="card-header border-bottom">
                    <h6 className="m-0">{ header }</h6>
                </div>
            }

            <div className="card-body d-flex flex-column">
                { props.children }
            </div>

            {
                footer &&
                <div className="card-footer border-top">
                    { footer.call() }
                </div>
            }
        </div>
    );
};

export {
    Card
}