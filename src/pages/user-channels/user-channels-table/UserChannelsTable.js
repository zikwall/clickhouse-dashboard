import React from "react";
import LoadORNotData from "../load-or-not-data/LoadOrNotData";

const UserChannelsTable = ({data, isDataLoading}) => {
    
    if (data === null) {
        return(
            <LoadORNotData isDataLoading={isDataLoading}/>
        );
    }

    const items = data.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.cnt}
                    </td>
                </tr>
            )
        });

        return (
            <table className="table table-sm teble-striped mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">Телеканал</th>
                        <th scope="col" className="border-0">Уникальные пользователи</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );     
};

export default UserChannelsTable;