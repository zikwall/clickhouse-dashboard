import React from "react";
import LoadORNotData from "../load-or-not-data/LoadOrNotData";
//import NotLoadedContent from "../../../components/content-loader/NotLoadedContent";
//import DimmyLoader from "../../../components/content-loader/DimmyLoader";

const UserChannelsTable = ({data, isDataLoading}) => {
    if (data !== null) {
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
            <table className="table mb-0">
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
    }

    /*if (!isDataLoading) {
        return(
            <NotLoadedContent/>
        )
    }

    return (
        <DimmyLoader/>
    )*/

    return(
        <LoadORNotData isDataLoading={isDataLoading}/>
    )
};

export default UserChannelsTable;