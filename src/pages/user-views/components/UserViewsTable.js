import React from "react";
//import LoadORNotData from "../load-or-not-data/LoadOrNotData";
import { DimmyLoader, EmptyContent } from "../../../components/content-loader";

const UserViewsTable = ({data, isDataLoading}) => {
    
    let content = <EmptyContent />;
    if (isDataLoading) {
        content = <DimmyLoader />;
    }

    if (data !== null) {
        const items = data.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.online}
                    </td>
                    <td> 
                        {item.archive}
                    </td>
                </tr>
            )
        });

        return (
            <table className="table table-sm table-striped mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">Телеканал</th>
                        <th scope="col" className="border-0">Онлайн</th>
                        <th scope="col" className="border-0">Архив</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }

    

    return(
    <div>{content}</div>
    );
};

export default UserViewsTable;