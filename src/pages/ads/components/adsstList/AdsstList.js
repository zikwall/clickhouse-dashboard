import React from 'react';

const AdsstList = ({ groupData }) => {

    const items = groupData.map((item, index) => {
        return(
            <li className="list-group-item d-flex px-3" key={ index }>
                <span className="text-semibold text-fiord-blue">{ item[0] }</span>
                <span className="ml-auto text-right text-semibold text-reagent-gray">{ item[1] }</span>
            </li>
        )
    });

    return(
        <div className="card-body p-0">
            <ul className="list-group list-group-small list-group-flush">
                { items }
            </ul>
        </div>
    )
};

export default AdsstList;