import React from 'react';
import { BaseObject, ClickHouse } from "../../../../utils";

const DataList = ({ totalUsersData, usersData, durationChannelsData, eventType }) => {
    let duration = 0;

    if (ClickHouse.isAll(eventType)) {
        for (let key in durationChannelsData) {
            duration += +durationChannelsData[key].archive + +durationChannelsData[key].online;
        }
    }

    if (ClickHouse.isOnline(eventType)) {
        for (let key in durationChannelsData) {
            duration += +durationChannelsData[key].online;
        }
    }

    if (ClickHouse.isArchive(eventType)) {
        for (let key in durationChannelsData) {
            duration += +durationChannelsData[key].archive;
        }
    }

    let quantityForAllDays = 0;

    if (!BaseObject.isEmpty(usersData.appUsers)) {
        usersData.appUsers.forEach((element) => {
            quantityForAllDays += +element.ctn;
        });
    }

    return(
        <>
            <ul className="list-group list-group-small list-group-flush">
                <li className="list-group-item d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Общее время просмотра</span>
                    <span className="ml-auto text-right text-semibold text-reagent-gray">
                        { (duration/120).toFixed(2) } часов
                    </span>
                </li>
                <li className="list-group-item d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Среднее количество дней пользования на одного пользователя</span>
                    <span className="ml-auto text-right text-semibold text-reagent-gray">
                        { isNaN((quantityForAllDays/totalUsersData).toFixed(5)) ? 0 : (quantityForAllDays/totalUsersData).toFixed(5)}
                    </span>
                </li>
            </ul>
        </>
    )
};

export default DataList;