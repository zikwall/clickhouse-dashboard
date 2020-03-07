import React from "react";
import LoadORNotData from "../load-or-not-data/LoadOrNotData";
import { Translator } from 'eo-locale';
import { LOCALES } from "./../../../constants";

const UserChannelsTable = ({data, isDataLoading, lang}) => {

    const translate = new Translator(lang, LOCALES);

    if (data === null) {
        return(
            <LoadORNotData isDataLoading={isDataLoading} lang={lang}/>
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
                        <th scope="col" className="border-0">{translate.messages.channel}</th>
                        <th scope="col" className="border-0">{translate.messages.uniqueUsers}</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );     
};

export default UserChannelsTable;