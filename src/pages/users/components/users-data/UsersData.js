import React from "react";

const filter = (arr) => {
    return arr.sort((a,b) => {
        return a.tz - b.tz;
    })
};

const isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
};

const  UsersData = ({totalUsersData = null, timeZoneUsers = null}) => {
    let tzUsers = [(
        <tr key="noData">
            <td>Нет данных</td>
            <td>Нет данных</td>
        </tr>
    )];

    let total = (
        <tr key="noTotalData">
            <td>всего</td>
            <td>Нет данных</td>
        </tr>
    );

    let index = 0;

    if (timeZoneUsers !== null && !isEmpty(timeZoneUsers)) {
        tzUsers = filter(timeZoneUsers).map((item) => {
            index++;

            return (
                <tr key={ index }>
                    <td>{ item.tz }</td>
                    <td>{ item.ctn }</td>
                </tr>
            )
        });
    }

    if (totalUsersData !== null) {
        index++;

        total = (
            <tr key={ index }>
                <td>всего</td>
                <td>{ totalUsersData.appUsersTotal[0].ctn }</td>
            </tr>
        );
    }

    tzUsers.push(total);

    return(
        <table className="table mb-0">
            <thead className="bg-light">
            <tr>
                <th scope="col" className="border-0">Зона</th>
                <th scope="col" className="border-0">Уников</th>
            </tr>
            </thead>
            <tbody>
            { tzUsers }
            </tbody>
        </table>
    )
};

export default UsersData;