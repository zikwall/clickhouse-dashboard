import React from 'react';

const DataList = ({ data }) => {
    let total = 0;
    let count = 0;
    let chefIndicator = 0;

    data.forEach((item, i, arr) => {
        total += +item.ctn;
        count++;
    });

    return(
        <ul className="list-group list-group-small list-group-flush">
            <li className="list-group-item d-flex px-3">
                <span className="text-semibold text-fiord-blue">Общее количество запускоа приложения</span>
                <span className="ml-auto text-right text-semibold text-reagent-gray">
                    { total }
                </span>
            </li>
            <li className="list-group-item d-flex px-3">
                <span className="text-semibold text-fiord-blue">Среднедневной показатель</span>
                <span className="ml-auto text-right text-semibold text-reagent-gray">
                    { (total/count).toFixed(2) }
                </span>
            </li>
            <li className="list-group-item d-flex px-3">
                <span className="text-semibold text-fiord-blue">Среднее количество пользований приложений в день</span>
                <span className="ml-auto text-right text-semibold text-reagent-gray">
                    Данные3
                </span>
            </li>
        </ul>
    )
};

export default DataList;