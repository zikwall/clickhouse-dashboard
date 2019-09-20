import React from 'react';

const filter = (arr) => {
    return arr.sort((a,b) => {
        return a.tz - b.tz;
    })
};

const DataList = ({ totalUsersData, getDailyOverage, timeZoneUsers }) => {
    let timeZoneUsersItems = <p>Нет данных</p>;

    if (timeZoneUsers !== null) {
        let filterTimeZoneUsersItems = filter(timeZoneUsers);

        timeZoneUsersItems = filterTimeZoneUsersItems.map((item, index) => {
            return (
                <li
                    key={ index }
                    style={{listStyleType: "none"}}>
                    Тайм зона ({ item.tz }) : { item.ctn }
                </li>
            )
        });
    }

    return(
        <>
            <ul className="list-group list-group-small list-group-flush">
                <li className="list-group-item d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Общее количество</span>
                    <span className="ml-auto text-right text-semibold text-reagent-gray">
                                        { totalUsersData }
                                    </span>
                </li>
                <li className="list-group-item d-flex px-3">
                    <span className="text-semibold text-fiord-blue">Среднедневная аудитория</span>
                    <span className="ml-auto text-right text-semibold text-reagent-gray">
                                        { getDailyOverage() }
                                    </span>
                </li>
            </ul>
            <div className="card-header border-bottom">
                <h6>По тайм зонам</h6>
            </div>
            <ul style={{paddingLeft:0,marginLeft:0}}>
                { timeZoneUsersItems }
            </ul>
        </>
    )
};

export default DataList;